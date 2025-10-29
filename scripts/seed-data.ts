import { dbService } from '../lib/db/mongodb';
import { templates, themes } from '../lib/data/templates-and-themes';

async function seedTemplatesAndThemes() {
  try {
    // Clear existing data
    await dbService.clearTemplates();
    await dbService.clearThemes();
    
    // Seed Templates
    for (const template of templates) {
      await dbService.createTemplate(template);
    }
    console.log(`Created ${templates.length} templates`);

    // Seed Themes
    for (const theme of themes) {
      await dbService.createTheme(theme);
    }
    console.log(`Created ${themes.length} themes`);
    
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding templates and themes:', error);
    process.exit(1);
  }
}

seedTemplatesAndThemes();
