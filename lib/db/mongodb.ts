import { MongoClient, MongoClientOptions, Db, ObjectId, Document, WithId } from 'mongodb';
import type { User, Message, Memory, AIScreen, Reaction, Template, Theme } from './types';
import { SecuritySanitizer } from '../security/sanitizer';

// Force TLS 1.2 for MongoDB connections
process.env.MONGODB_TLS_ALLOW_INVALID_CERTIFICATES = process.env.NODE_ENV === 'development' ? 'true' : 'false';
process.env.MONGODB_TLS_VERSION = 'TLSv1_2';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_ENV === 'development' ? '0' : '1';

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const options: MongoClientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
  maxPoolSize: 5,
  minPoolSize: 1,
  connectTimeoutMS: 60000,
  serverSelectionTimeoutMS: 60000,
  socketTimeoutMS: 60000,
  heartbeatFrequencyMS: 30000,
  directConnection: false,
  tls: true,
  tlsAllowInvalidCertificates: process.env.NODE_ENV === 'development',
  retryWrites: true,
  w: 'majority',
  retryReads: true,
  compressors: ['none'] as ('zlib' | 'none' | 'snappy' | 'zstd')[],
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Type casting helpers
function castToType<T extends { _id: any }>(doc: WithId<Document> | null): T | null {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  const converted = {
    ...rest,
    _id: _id.toString()
  };
  return converted as T;
}

function castToTypeArray<T extends { _id: any }>(docs: WithId<Document>[]): T[] {
  return docs.map(doc => {
    const { _id, ...rest } = doc;
    const converted = {
      ...rest,
      _id: _id.toString()
    };
    return converted as T;
  });
}

function toObjectId(id: string): ObjectId | null {
  if (!SecuritySanitizer.validateObjectId(id)) return null;
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

async function getDatabase(): Promise<Db> {
  try {
    const client = await clientPromise;
    const db = client.db('asalways');
    // Simple ping to check connection
    await db.command({ ping: 1 });
    console.log('Successfully connected to MongoDB Atlas');
    return db;
  } catch (error: any) {
    const errorMessage = error?.message || error;
    console.error('MongoDB connection failed:', {
      message: errorMessage,
      code: error?.code,
      name: error?.name
    });
    
    // Provide more specific error messages based on the error type
    if (errorMessage?.includes('SSL') || errorMessage?.includes('TLS')) {
      console.error('TLS Details:', {
        tlsVersion: process.versions.tls,
        openSSLVersion: process.versions.openssl,
        nodeVersion: process.version
      });
      throw new Error(`MongoDB TLS connection failed (${error?.code || 'unknown'}). Check network security and MongoDB Atlas access settings.`);
    } else if (errorMessage?.includes('Authentication failed')) {
      throw new Error('MongoDB authentication failed. Please check your username and password.');
    } else if (errorMessage?.includes('getaddrinfo')) {
      throw new Error('Could not resolve MongoDB hostname. Please check your network connection and DNS settings.');
    } else if (errorMessage?.includes('timeout')) {
      throw new Error('MongoDB connection timed out. Please check your network connection and firewall settings.');
    }
    
    throw new Error(`Database connection failed: ${errorMessage}`);
  }
}

export class DatabaseService {
  private db: Db | null = null;

  async connect(): Promise<Db> {
    if (!this.db) {
      let retries = 3;
      while (retries > 0) {
        try {
          this.db = await getDatabase();
          console.log('MongoDB connected successfully');
          break;
        } catch (error) {
          console.error(`MongoDB connection attempt failed. Retries left: ${retries - 1}`, error);
          retries--;
          if (retries === 0) {
            console.error('Failed to connect to MongoDB after 3 attempts');
            throw new Error('MongoDB connection failed');
          }
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
    return this.db!;
  }

  // User operations
  async createUser(userData: Omit<User, '_id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const db = await this.connect();
    const now = new Date();
    const sanitizedData = {
      ...userData,
      email: userData.email ? SecuritySanitizer.sanitizeString(userData.email.toLowerCase()) : undefined,
      name: userData.name ? SecuritySanitizer.sanitizeString(userData.name) : undefined,
      role: userData.role,  // Role is an enum, no need to sanitize
      password: userData.password, // Password is already hashed, no need to sanitize
      createdAt: now,
      updatedAt: now,
      _id: new ObjectId()
    } as User & { _id: ObjectId };

    await db.collection<User>('users').insertOne(sanitizedData);
    return castToType<User>(sanitizedData)!;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const db = await this.connect();
    const sanitizedEmail = SecuritySanitizer.sanitizeString(email.toLowerCase());
    const user = await db.collection<User>('users').findOne({ 
      email: sanitizedEmail 
    });
    return castToType<User>(user);
  }

  async findUserById(id: string): Promise<User | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;
    
    const db = await this.connect();
    const user = await db.collection<User>('users').findOne({ _id: objectId });
    return castToType<User>(user);
  }

  async updateUserPassword(email: string, hashedPassword: string): Promise<void> {
    const db = await this.connect();
    const sanitizedEmail = SecuritySanitizer.sanitizeString(email.toLowerCase());
    await db.collection<User>('users').updateOne(
      { email: sanitizedEmail },
      { $set: { password: hashedPassword, updatedAt: new Date() } }
    );
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const result = await db.collection<User>('users').findOneAndUpdate(
      { _id: objectId },
      { $set: { ...updateData, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    return result ? castToType<User>(result) : null;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.findUserById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.findUserByEmail(email);
  }

  async deleteUser(id: string): Promise<boolean> {
    const objectId = toObjectId(id);
    if (!objectId) return false;

    const db = await this.connect();
    const result = await db.collection<User>('users').deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  }

  async getUsers(limit = 50, offset = 0): Promise<{ users: User[]; total: number }> {
    const db = await this.connect();
    
    const [users, total] = await Promise.all([
      db.collection<User>('users')
        .find({})
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .toArray(),
      db.collection<User>('users').countDocuments()
    ]);

    return {
      users: users.map(user => castToType<User>(user)).filter(Boolean) as User[],
      total
    };
  }

  // Message operations
  async createMessage(messageData: Omit<Message, '_id' | 'createdAt' | 'updatedAt' | 'memories' | 'screens' | 'reactions'>): Promise<Message> {
    const db = await this.connect();
    const now = new Date();

    // Sanitize input data
    const sanitizedData = {
      code: SecuritySanitizer.sanitizeString(messageData.code), // Keep strict for codes
      senderName: SecuritySanitizer.sanitizeContent(messageData.senderName), // Use content sanitization for display names
      receiverName: SecuritySanitizer.sanitizeContent(messageData.receiverName), // Use content sanitization for display names
      relationship: SecuritySanitizer.sanitizeContent(messageData.relationship), // Use content sanitization for display text
      receiverGender: SecuritySanitizer.sanitizeContent(messageData.receiverGender), // Use content sanitization for display text
      status: messageData.status || 'CREATED',  // Enum value, no need to sanitize
      emotionTag: messageData.emotionTag ? SecuritySanitizer.sanitizeContent(messageData.emotionTag) : undefined,
      selectedSong: messageData.selectedSong ? SecuritySanitizer.sanitizeString(messageData.selectedSong) : undefined, // Keep strict for file paths
      voiceNote: messageData.voiceNote ? SecuritySanitizer.sanitizeString(messageData.voiceNote) : undefined, // Keep strict for file paths
      textContent: messageData.textContent ? SecuritySanitizer.sanitizeContent(messageData.textContent) : undefined, // Use content sanitization for user text
      isViewed: false,
      senderId: messageData.senderId ? SecuritySanitizer.sanitizeString(messageData.senderId) : undefined,
      receiverId: messageData.receiverId ? SecuritySanitizer.sanitizeString(messageData.receiverId) : undefined,
      memories: [],
      screens: [],
      reactions: [],
      createdAt: now,
      updatedAt: now,
      _id: new ObjectId()
    } as Message & { _id: ObjectId };

    // Validate required fields
    if (!sanitizedData.code || !sanitizedData.senderName || !sanitizedData.receiverName) {
      throw new Error('Missing required fields');
    }

    await db.collection<Message>('messages').insertOne(sanitizedData);
    return castToType<Message>(sanitizedData)!;
  }

  async findMessageByCode(code: string): Promise<Message | null> {
    const db = await this.connect();
    const sanitizedCode = SecuritySanitizer.sanitizeString(code);
    const message = await db.collection<Message>('messages').findOne({ code: sanitizedCode });
    
    // Log for debugging
    if (message) {
      console.log(`Found message for code ${sanitizedCode}:`, {
        id: message._id,
        status: message.status,
        createdAt: message.createdAt
      });
    } else {
      console.log(`No message found for code: ${sanitizedCode}`);
    }
    
    return castToType<Message>(message);
  }

  async updateMessage(id: string, updateData: Partial<Message>): Promise<Message | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const sanitizedData = SecuritySanitizer.sanitizeObject(updateData);
    const result = await db.collection<Message>('messages').findOneAndUpdate(
      { _id: objectId },
      { $set: { ...sanitizedData, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    return result ? castToType<Message>(result) : null;
  }

  async getMessageById(id: string): Promise<Message | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const message = await db.collection<Message>('messages').findOne({ _id: objectId });
    return castToType<Message>(message);
  }

  async deleteMessage(id: string): Promise<boolean> {
    const objectId = toObjectId(id);
    if (!objectId) return false;

    const db = await this.connect();
    const result = await db.collection<Message>('messages').deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  }

  async deleteMemoriesByMessageId(messageId: string): Promise<boolean> {
    const db = await this.connect();
    const result = await db.collection<Memory>('memories').deleteMany({ messageId: messageId });
    return result.deletedCount >= 0;
  }

  async deleteScreensByMessageId(messageId: string): Promise<boolean> {
    const db = await this.connect();
    const result = await db.collection<Screen>('screens').deleteMany({ messageId: messageId });
    return result.deletedCount >= 0;
  }

  async getMessages(userId?: string, limit = 10, offset = 0): Promise<{ messages: Message[]; total: number }> {
    const db = await this.connect();
    let query = {} as any;
    
    if (userId) {
      if (!SecuritySanitizer.validateObjectId(userId)) {
        throw new Error('Invalid user ID');
      }
      query = {
        $or: [
          { senderId: userId },
          { receiverId: userId }
        ]
      };
    }

    const [messages, total] = await Promise.all([
      db.collection<Message>('messages')
        .find(query)
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .toArray(),
      db.collection<Message>('messages').countDocuments(query)
    ]);

    return { 
      messages: castToTypeArray<Message>(messages),
      total 
    };
  }

  // Memory operations
  async addMemory(memoryData: Omit<Memory, '_id' | 'createdAt'>): Promise<Memory> {
    const db = await this.connect();
    const memory = {
      ...memoryData,
      createdAt: new Date(),
      _id: new ObjectId()
    } as Memory & { _id: ObjectId };

    await db.collection<Memory>('memories').insertOne(memory);
    return castToType<Memory>(memory)!;
  }

  async getMemoriesByMessageId(messageId: string): Promise<Memory[]> {
    const db = await this.connect();
    const sanitizedMessageId = SecuritySanitizer.sanitizeString(messageId);
    const memories = await db.collection<Memory>('memories')
      .find({ messageId: sanitizedMessageId })
      .sort({ order: 1 })
      .toArray();

    return castToTypeArray<Memory>(memories);
  }

  // AI Screen operations
  async addScreens(screens: Omit<AIScreen, '_id' | 'createdAt'>[]): Promise<AIScreen[]> {
    const db = await this.connect();
    const screensToInsert = screens.map(screen => ({
      ...screen,
      createdAt: new Date(),
      _id: new ObjectId()
    })) as (AIScreen & { _id: ObjectId })[];

    await db.collection<AIScreen>('screens').insertMany(screensToInsert);
    return screensToInsert.map(screen => castToType<AIScreen>(screen)!);
  }

  async getScreensByMessageId(messageId: string): Promise<AIScreen[]> {
    const db = await this.connect();
    const sanitizedMessageId = SecuritySanitizer.sanitizeString(messageId);
    const screens = await db.collection<AIScreen>('screens')
      .find({ messageId: sanitizedMessageId })
      .sort({ screenIndex: 1 })
      .toArray();

    return castToTypeArray<AIScreen>(screens);
  }

  // Reaction operations
  async addReaction(reactionData: Omit<Reaction, '_id' | 'createdAt'>): Promise<Reaction> {
    const db = await this.connect();
    const reaction = {
      ...reactionData,
      createdAt: new Date(),
      _id: new ObjectId()
    } as Reaction & { _id: ObjectId };

    await db.collection<Reaction>('reactions').insertOne(reaction);
    return castToType<Reaction>(reaction)!;
  }

  // Template operations
  async createTemplate(templateData: Omit<Template, '_id' | 'createdAt'>): Promise<Template> {
    const db = await this.connect();
    const template = {
      ...templateData,
      createdAt: new Date(),
      _id: new ObjectId()
    } as Template & { _id: ObjectId };

    await db.collection<Template>('templates').insertOne(template);
    return castToType<Template>(template)!;
  }

  async clearTemplates(): Promise<void> {
    const db = await this.connect();
    await db.collection<Template>('templates').deleteMany({});
  }

  async clearThemes(): Promise<void> {
    const db = await this.connect();
    await db.collection<Theme>('themes').deleteMany({});
  }

  async getTemplates(category?: string): Promise<Template[]> {
    const db = await this.connect();
    const query = category 
      ? { category: SecuritySanitizer.sanitizeString(category), isActive: true } 
      : { isActive: true };
    const templates = await db.collection<Template>('templates').find(query).toArray();
    return castToTypeArray<Template>(templates);
  }

  async getTemplateById(id: string): Promise<Template | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const template = await db.collection<Template>('templates').findOne({ _id: objectId });
    return castToType<Template>(template);
  }

  async updateTemplate(id: string, updateData: Partial<Template>): Promise<Template | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const result = await db.collection<Template>('templates').findOneAndUpdate(
      { _id: objectId },
      { $set: { ...updateData, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    return result ? castToType<Template>(result) : null;
  }

  async deleteTemplate(id: string): Promise<boolean> {
    const objectId = toObjectId(id);
    if (!objectId) return false;

    const db = await this.connect();
    const result = await db.collection<Template>('templates').deleteOne({ _id: objectId });
    return result.deletedCount === 1;
  }

  // Theme operations
  async createTheme(themeData: Omit<Theme, '_id' | 'createdAt'>): Promise<Theme> {
    const db = await this.connect();
    const theme = {
      ...themeData,
      createdAt: new Date(),
      _id: new ObjectId()
    } as Theme & { _id: ObjectId };

    await db.collection<Theme>('themes').insertOne(theme);
    return castToType<Theme>(theme)!;
  }

  async getThemes(category?: string): Promise<Theme[]> {
    const db = await this.connect();
    const query = category 
      ? { category: SecuritySanitizer.sanitizeString(category), isActive: true } 
      : { isActive: true };
    const themes = await db.collection<Theme>('themes').find(query).toArray();
    return castToTypeArray<Theme>(themes);
  }

  async getThemeById(id: string): Promise<Theme | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const theme = await db.collection<Theme>('themes').findOne({ _id: objectId });
    return castToType<Theme>(theme);
  }

  async updateTheme(id: string, updateData: Partial<Theme>): Promise<Theme | null> {
    const objectId = toObjectId(id);
    if (!objectId) return null;

    const db = await this.connect();
    const result = await db.collection<Theme>('themes').findOneAndUpdate(
      { _id: objectId },
      { $set: { ...updateData, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    return result ? castToType<Theme>(result) : null;
  }

  async deleteTheme(id: string): Promise<boolean> {
    const objectId = toObjectId(id);
    if (!objectId) return false;

    const db = await this.connect();
    const result = await db.collection<Theme>('themes').deleteOne({ _id: objectId });
    return result.deletedCount === 1;
  }

  // Analytics
  async getAnalytics(days = 30): Promise<{
    totalUsers: number;
    totalMessages: number;
    totalMemories: number;
    totalReactions: number;
    recentUsers: number;
    recentMessages: number;
    viewedMessages: number;
    viewRate: number;
  }> {
    const db = await this.connect();
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const [
      totalUsers,
      totalMessages,
      totalMemories,
      totalReactions,
      recentUsers,
      recentMessages,
      viewedMessages
    ] = await Promise.all([
      db.collection('users').countDocuments(),
      db.collection('messages').countDocuments(),
      db.collection('memories').countDocuments(),
      db.collection('reactions').countDocuments(),
      db.collection('users').countDocuments({ createdAt: { $gte: startDate } }),
      db.collection('messages').countDocuments({ createdAt: { $gte: startDate } }),
      db.collection('messages').countDocuments({ isViewed: true })
    ]);

    return {
      totalUsers,
      totalMessages,
      totalMemories,
      totalReactions,
      recentUsers,
      recentMessages,
      viewedMessages,
      viewRate: totalMessages > 0 ? (viewedMessages / totalMessages * 100) : 0
    };
  }

  // Content Session operations for uniqueness tracking
  async createContentSession(sessionData: any): Promise<any> {
    const db = await this.connect();
    const session = {
      ...sessionData,
      createdAt: new Date(),
      _id: new ObjectId()
    };

    await db.collection('contentSessions').insertOne(session);
    return castToType<any>(session);
  }

  async getContentSession(sessionId: string): Promise<any> {
    const db = await this.connect();
    const sanitizedSessionId = SecuritySanitizer.sanitizeString(sessionId);
    const session = await db.collection('contentSessions')
      .findOne({ sessionId: sanitizedSessionId });

    return castToType<any>(session);
  }

  async updateContentSession(sessionId: string, updateData: any): Promise<void> {
    const db = await this.connect();
    const sanitizedSessionId = SecuritySanitizer.sanitizeString(sessionId);
    
    await db.collection('contentSessions').updateOne(
      { sessionId: sanitizedSessionId },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );
  }

  async getAllContentSessions(): Promise<any[]> {
    const db = await this.connect();
    const sessions = await db.collection('contentSessions')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return castToTypeArray<any>(sessions);
  }
}

export const dbService = new DatabaseService();
