import { QdrantClient } from '@qdrant/js-client-rest';
import axios, { AxiosError } from 'axios';
import { ErrorLogger, ErrorType } from '@/lib/logging/logger';
import { systemPrompt, emotionAnalysisPrompt } from '@/config/prompts';
import { memoryCache } from '@/lib/cache/memoryCache';

// Custom Error
class RAGError extends Error {
  constructor(message: string, public type: ErrorType, public details?: any) {
    super(message);
    this.name = 'RAGError';
  }
}

// Types
interface RAGInput {
  senderName: string;
  receiverName: string;
  relationship: string;
  receiverGender?: string;
  emotionTag?: string;
  occasion?: string;
  memories?: Memory[];
  textContent?: string;
}

interface Memory {
  type: string;
  content: string;
  caption?: string;
  filename?: string;
}

interface AIScreen {
  type: string;
  content: string;
  background?: string;
  animation?: string;
  duration: number;
  emotion?: string;
  media?: string;
}

interface GeneratedContent {
  screens: AIScreen[];
  emotion: string;
  suggestions: string[];
  totalScreens: number;
}

export class CloudRAG {
  private qdrantClient: QdrantClient;
  private collectionName: string = 'asalways_embeddings';
  private modelEndpoint: string;
  private apiKey: string;

  constructor() {
    this.qdrantClient = new QdrantClient({
      url: process.env.QDRANT_URL || 'https://cbad1e13-3539-4d73-9cec-8feb85248c42.eu-west-2-0.aws.cloud.qdrant.io',
      apiKey: process.env.QDRANT_API_KEY,
    });
    this.modelEndpoint = process.env.LLM_API_ENDPOINT || 'https://api.groq.com/openai/v1/chat/completions';
    this.apiKey = process.env.LLM_API_KEY || '';
  }

  private async generateEmbedding(text: string): Promise<number[]> {
    const cacheKey = `embedding:${text}`;
    const cached = memoryCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await axios.post(
        process.env.EMBEDDING_API_ENDPOINT || 'https://api.groq.com/openai/v1/embeddings',
        { input: text, model: process.env.EMBEDDING_MODEL || 'bge-base-en-v1.5' },
        { headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' } }
      );
      const embedding = response.data.data[0].embedding;
      memoryCache.set(cacheKey, embedding, 3600000); // Cache for 1 hour
      return embedding;
    } catch (error) {
      throw new RAGError('Failed to generate embedding', ErrorType.AI, { error });
    }
  }

  private async queryVectorDB(embedding: number[], limit: number = 5): Promise<any[]> {
    try {
      const searchResult = await this.qdrantClient.search(this.collectionName, {
        vector: embedding,
        limit: limit,
        with_payload: true,
      });
      return searchResult.map(result => result.payload);
    } catch (error) {
      throw new RAGError('Failed to query vector database', ErrorType.DATABASE, { error });
    }
  }

  private async generateWithLLM(prompt: string): Promise<string> {
    const cacheKey = `llm:${prompt}`;
    const cached = memoryCache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await axios.post(
        this.modelEndpoint,
        {
          model: process.env.LLM_MODEL || 'mixtral-8x7b-32768',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 1024,
        },
        { headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' } }
      );
      const content = response.data.choices[0].message.content;
      memoryCache.set(cacheKey, content, 3600000); // Cache for 1 hour
      return content;
    } catch (error) {
      throw new RAGError('Failed to generate content with LLM', ErrorType.AI, { error });
    }
  }

  private async analyzeEmotion(text: string): Promise<string> {
    if (!text || text.trim().length === 0) return 'happy';
    const cacheKey = `emotion:${text}`;
    const cached = memoryCache.get(cacheKey);
    if (cached) return cached;

    try {
      const prompt = `Analyze the emotional tone... Text: "${text}"`;
      const response = await axios.post(
        this.modelEndpoint,
        {
          model: process.env.LLM_MODEL || 'mixtral-8x7b-32768',
          messages: [
            { role: 'system', content: emotionAnalysisPrompt },
            { role: 'user', content: prompt }
          ],
          temperature: 0.3,
          max_tokens: 10,
        },
        { headers: { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' } }
      );
      const emotion = response.data.choices[0].message.content.toLowerCase().trim();
      memoryCache.set(cacheKey, emotion, 3600000); // Cache for 1 hour
      return emotion;
    } catch (error) {
      ErrorLogger.log(new RAGError('Failed to analyze emotion', ErrorType.AI, { error }));
      return 'happy'; // Default fallback
    }
  }

  async generatePersonalizedContent(messageData: RAGInput): Promise<GeneratedContent> {
    try {
      const inputText = `Relationship: ${messageData.relationship}...`;
      const embedding = await this.generateEmbedding(inputText);
      const relevantExamples = await this.queryVectorDB(embedding);
      const prompt = `Write a heartfelt message...`;
      const generatedText = await this.generateWithLLM(prompt);
      const emotion = messageData.emotionTag || await this.analyzeEmotion(generatedText);
      const paragraphs = generatedText.split('\n\n').filter(p => p.trim().length > 0);
      const screens: AIScreen[] = this.createScreens(paragraphs, messageData, emotion);
      const suggestions = this.generateSuggestions(messageData.relationship, emotion);
      return { screens, emotion, suggestions, totalScreens: screens.length };
    } catch (error) {
      ErrorLogger.log(error as Error, (error as RAGError).type || ErrorType.GENERATION, (error as RAGError).details);
      throw error; // Re-throw the error to be caught by the API route
    }
  }

  private createScreens(paragraphs: string[], messageData: RAGInput, emotion: string): AIScreen[] {
    const screens: AIScreen[] = [];
    // ... screen creation logic ...
    return screens;
  }

  private getBackgroundForEmotion(emotion: string, index: number): string {
    // ... background logic ...
    return '';
  }

  private getAnimationForIndex(index: number): string {
    // ... animation logic ...
    return '';
  }

  private generateSuggestions(relationship: string, emotion: string): string[] {
    // ... suggestions logic ...
    return [];
  }
}

export const cloudRAG = new CloudRAG();
