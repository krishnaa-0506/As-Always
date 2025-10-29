import { CloudRAG } from './CloudRAG';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock QdrantClient
const mockSearch = jest.fn();
jest.mock('@qdrant/js-client-rest', () => ({
  QdrantClient: jest.fn().mockImplementation(() => ({
    search: mockSearch,
  })),
}));

describe('CloudRAG', () => {
  let cloudRAG: CloudRAG;

  beforeEach(() => {
    cloudRAG = new CloudRAG();
    mockedAxios.post.mockClear();
    mockSearch.mockClear();
  });

  it('should generate personalized content', async () => {
    // Mock the responses from the external services
    mockedAxios.post.mockResolvedValueOnce({ data: { data: [{ embedding: [1, 2, 3] }] } }); // generateEmbedding
    mockSearch.mockResolvedValueOnce([{ payload: { content: 'test content' } }]); // queryVectorDB
    mockedAxios.post.mockResolvedValueOnce({ data: { choices: [{ message: { content: 'Generated text' } }] } }); // generateWithLLM
    mockedAxios.post.mockResolvedValueOnce({ data: { choices: [{ message: { content: 'happy' } }] } }); // analyzeEmotion

    const messageData = {
      senderName: 'John',
      receiverName: 'Jane',
      relationship: 'friend',
    };

    const result = await cloudRAG.generatePersonalizedContent(messageData as any);

    expect(result).toBeDefined();
    expect(result.screens).toBeDefined();
    expect(result.emotion).toBe('happy');
    expect(result.suggestions).toBeDefined();
    expect(result.totalScreens).toBeGreaterThan(0);
  });

  it('should handle errors during content generation', async () => {
    // Mock an error from one of the services
    mockedAxios.post.mockRejectedValueOnce(new Error('API error'));

    const messageData = {
      senderName: 'John',
      receiverName: 'Jane',
      relationship: 'friend',
    };

    await expect(cloudRAG.generatePersonalizedContent(messageData as any)).rejects.toThrow('Failed to generate embedding');
  });
});
