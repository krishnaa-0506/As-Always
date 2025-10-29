import { dbService } from '../lib/db/mongodb';
import { defaultTemplates } from '../lib/data/templates';
import { defaultThemes } from '../lib/data/themes';

async function seedTemplatesAndThemes() {
  try {
    console.log('Starting database seeding...');
    
    // Clear existing templates and themes
    console.log('Clearing existing data...');
    await dbService.clearTemplates();
    await dbService.clearThemes();
    
    // Seed templates
    console.log('Seeding templates...');
    for (const template of defaultTemplates) {
      await dbService.createTemplate({
        ...template,
        isActive: true,
        createdAt: new Date()
      });
    }
    console.log(`Seeded ${defaultTemplates.length} templates`);
    
    // Seed themes
    console.log('Seeding themes...');
    for (const theme of defaultThemes) {
      await dbService.createTheme({
        ...theme,
        isActive: true,
        createdAt: new Date()
      });
    }
    console.log(`Seeded ${defaultThemes.length} themes`);
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedTemplatesAndThemes();
