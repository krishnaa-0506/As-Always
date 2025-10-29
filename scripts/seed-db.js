const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://krishnaahari05:Harihk0506@cluster0.k4f5pec.mongodb.net/asalways?retryWrites=true&w=majority&maxPoolSize=5&minPoolSize=1&connectTimeoutMS=60000&socketTimeoutMS=60000&serverSelectionTimeoutMS=60000";

const options = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
  maxPoolSize: 5,
  minPoolSize: 1,
  connectTimeoutMS: 60000,
  socketTimeoutMS: 60000,
  serverSelectionTimeoutMS: 60000,
  tls: true,
  directConnection: false,
};

async function seedDatabase() {
  const client = new MongoClient(uri, options);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('asalways');

    // Clear existing data
    await db.collection('templates').deleteMany({});
    await db.collection('themes').deleteMany({});
    console.log('Cleared existing data');

    // Get default data
    const { defaultTemplates, defaultThemes } = require('./data-seed.js');

    // Insert templates
    const { ObjectId } = require('mongodb');
    const templates = defaultTemplates.map(template => ({
      ...template,
      _id: new ObjectId(),
      isActive: true,
      createdAt: new Date()
    }));
    await db.collection('templates').insertMany(templates);
    console.log(`Inserted ${templates.length} templates`);

    // Insert themes
    const themes = defaultThemes.map(theme => ({
      ...theme,
      _id: new ObjectId(),
      isActive: true,
      createdAt: new Date()
    }));
    await db.collection('themes').insertMany(themes);
    console.log(`Inserted ${themes.length} themes`);

    console.log('Database seeding complete!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);
