const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

const categoryColors = {
  romantic: { start: [255, 107, 107], end: [255, 167, 38] }, // Warm pink to orange
  anniversary: { start: [255, 215, 0], end: [218, 165, 32] }, // Gold gradients
  birthday: { start: [156, 39, 176], end: [233, 30, 99] }, // Purple to pink
  gratitude: { start: [76, 175, 80], end: [139, 195, 74] }, // Green gradients
  friendship: { start: [33, 150, 243], end: [3, 169, 244] }, // Blue gradients
  celebration: { start: [255, 193, 7], end: [255, 152, 0] }, // Yellow to orange
  seasonal: { start: [121, 85, 72], end: [141, 110, 99] }, // Brown gradients
  family: { start: [67, 160, 71], end: [38, 166, 154] }, // Green to teal
  modern: { start: [33, 33, 33], end: [66, 66, 66] }, // Gray gradients
  classic: { start: [141, 110, 99], end: [161, 136, 127] }, // Warm brown
  special: { start: [236, 64, 122], end: [171, 71, 188] }, // Pink to purple
  nature: { start: [76, 175, 80], end: [255, 158, 128] } // Green to coral
};

function getGradientForCategory(category) {
  return categoryColors[category] || categoryColors.romantic;
}

async function generatePreviewImage(name, category, outputPath) {
  const width = 1200;
  const height = 630;
  const padding = 40;
  
  // Get gradient colors for category
  const colors = getGradientForCategory(category);
  
  // Create base image with solid color
  const image = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: colors.start[0], g: colors.start[1], b: colors.start[2], alpha: 1 }
    }
  })
    .composite([
      // Add semi-transparent white overlay
      {
        input: {
          create: {
            width,
            height,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 0.15 }
          }
        }
      },
      // Add semi-transparent overlay
      {
        input: {
          create: {
            width,
            height,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 0.1 }
          }
        }
      },
      // Add template/theme name
      {
        input: {
          text: {
            text: name,
            width: width - padding * 2,
            height: Math.floor(height * 0.4),
            rgba: true,
            font: 'sans-serif',
            fontSize: 72,
            align: 'center'
          }
        },
        top: Math.floor(height * 0.3),
        left: padding
      },
      // Add category label
      {
        input: {
          text: {
            text: category.charAt(0).toUpperCase() + category.slice(1),
            width: width - padding * 2,
            height: Math.floor(height * 0.2),
            rgba: true,
            font: 'sans-serif',
            fontSize: 32,
            align: 'center'
          }
        },
        top: Math.floor(height * 0.6),
        left: padding
      }
    ])
    .flatten({ background: { r: colors.start[0], g: colors.start[1], b: colors.start[2] } })
    .jpeg({ quality: 90 });

  await image.toFile(outputPath);
  console.log(`Generated preview image: ${outputPath}`);
}

async function generateAllPreviews() {
  const { getDefaultTemplates, getDefaultThemes } = require('./data/templates-themes.js');
  const templates = getDefaultTemplates();
  const themes = getDefaultThemes();

  const publicDir = path.join(__dirname, '..', 'public');
  const templatesDir = path.join(publicDir, 'assets', 'templates');
  const themesDir = path.join(publicDir, 'assets', 'themes');

  // Ensure directories exist
  await ensureDirectoryExists(templatesDir);
  await ensureDirectoryExists(themesDir);

  // Generate template previews
  for (const template of templates) {
    const outputPath = path.join(templatesDir, `${template.id}.jpg`);
    await generatePreviewImage(template.name, template.category, outputPath);
  }

  // Generate theme previews
  for (const theme of themes) {
    const outputPath = path.join(themesDir, `${theme.id}.jpg`);
    await generatePreviewImage(theme.name, theme.category, outputPath);
  }
}

generateAllPreviews().catch(console.error);
