import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const AUDIO_SOURCES = {
  romantic: {
    'romantic-tune-1': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_1.mp3',
    'romantic-tune-2': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_2.mp3',
    'romantic-tune-3': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_3.mp3',
    'romantic-tune-4': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_4.mp3',
    'romantic-tune-5': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_5.mp3',
    'romantic-tune-6': 'https://archive.org/download/indian_bgm_collection/romantic/romantic_bgm_6.mp3'
  },
  emotional: {
    'emotional-tune-1': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_1.mp3',
    'emotional-tune-2': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_2.mp3',
    'emotional-tune-3': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_3.mp3',
    'emotional-tune-4': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_4.mp3',
    'emotional-tune-5': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_5.mp3',
    'emotional-tune-6': 'https://archive.org/download/indian_bgm_collection/emotional/emotional_bgm_6.mp3'
  },
  soulful: {
    'soulful-tune-1': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_1.mp3',
    'soulful-tune-2': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_2.mp3',
    'soulful-tune-3': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_3.mp3',
    'soulful-tune-4': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_4.mp3',
    'soulful-tune-5': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_5.mp3',
    'soulful-tune-6': 'https://archive.org/download/indian_bgm_collection/soulful/soulful_bgm_6.mp3'
  },
  classical: {
    'classical-tune-1': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_1.mp3',
    'classical-tune-2': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_2.mp3',
    'classical-tune-3': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_3.mp3',
    'classical-tune-4': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_4.mp3',
    'classical-tune-5': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_5.mp3',
    'classical-tune-6': 'https://archive.org/download/indian_bgm_collection/classical/classical_bgm_6.mp3'
  },
  soft: {
    'soft-tune-1': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_1.mp3',
    'soft-tune-2': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_2.mp3',
    'soft-tune-3': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_3.mp3',
    'soft-tune-4': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_4.mp3',
    'soft-tune-5': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_5.mp3',
    'soft-tune-6': 'https://archive.org/download/indian_bgm_collection/soft/soft_bgm_6.mp3'
  }
};

async function ensureDirectoryExists(directory) {
  try {
    await fs.promises.mkdir(directory, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

async function downloadFile(url, outputPath, maxRedirects = 5, retries = 3) {
  return new Promise((resolve, reject) => {
    const tryDownload = (attempt = 1) => {
      const handleResponse = (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          if (maxRedirects === 0) {
            if (attempt < retries) {
              console.log(`Retry attempt ${attempt} for ${url}...`);
              setTimeout(() => tryDownload(attempt + 1), 1000 * attempt);
              return;
            }
            reject(new Error('Too many redirects'));
            return;
          }
          // Follow redirect
          https.get(response.headers.location, (res) => {
            handleResponse(res);
          }).on('error', (err) => {
            if (attempt < retries) {
              console.log(`Retry attempt ${attempt} for ${url} after error: ${err.message}`);
              setTimeout(() => tryDownload(attempt + 1), 1000 * attempt);
            } else {
              reject(err);
            }
          });
          return;
        }

        if (response.statusCode !== 200) {
          if (attempt < retries) {
            console.log(`Retry attempt ${attempt} for ${url} after status ${response.statusCode}...`);
            setTimeout(() => tryDownload(attempt + 1), 1000 * attempt);
            return;
          }
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {
          if (attempt < retries) {
            console.log(`Retry attempt ${attempt} for ${url} after error: ${err.message}`);
            setTimeout(() => tryDownload(attempt + 1), 1000 * attempt);
          } else {
            reject(err);
          }
        });
      });
    };

    https.get(url, handleResponse).on('error', (err) => {
      if (attempt < retries) {
        console.log(`Retry attempt ${attempt} for ${url} after error: ${err.message}`);
        setTimeout(() => tryDownload(attempt + 1), 1000 * attempt);
      } else {
        reject(err);
      }
    });
    };
    
    tryDownload();
  });
}

async function downloadAudioFiles() {
  const baseDir = path.join(__dirname, '..', 'public', 'audio');

  for (const [category, songs] of Object.entries(AUDIO_SOURCES)) {
    console.log(`\nDownloading ${category} songs...`);
    const categoryDir = path.join(baseDir, category);
    await ensureDirectoryExists(categoryDir);

    for (const [name, url] of Object.entries(songs)) {
      const outputPath = path.join(categoryDir, `${name}.mp3`);
      console.log(`Downloading ${name}.mp3...`);
      
      try {
        await downloadFile(url, outputPath);
        console.log(`✓ Downloaded: ${name}.mp3`);
      } catch (error) {
        console.error(`✗ Failed to download ${name}.mp3:`, error.message);
      }
    }
  }
}

async function main() {
  try {
    console.log('Creating audio directories...');
    await ensureDirectoryExists(path.join(__dirname, '..', 'public', 'audio'));
    
    console.log('\nStarting audio downloads...');
    await downloadAudioFiles();
    
    console.log('\nAll downloads completed!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
