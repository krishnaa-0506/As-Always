// download-25-tracks.js
import fs from "fs";
import https from "https";
import path from "path";

// 25 tracks from FreePD (Archive.org)
const tracks = [
  // Romantic (7)
  { url: "https://archive.org/download/freepd/RomanticInspiration.mp3", folder: "public/audio/romantic", filename: "romantic-inspiration.mp3" },
  { url: "https://archive.org/download/freepd/ShiningStars.mp3", folder: "public/audio/romantic", filename: "shining-stars.mp3" },
  { url: "https://archive.org/download/freepd/Pond.mp3", folder: "public/audio/romantic", filename: "pond.mp3" },
  { url: "https://archive.org/download/freepd/NostalgicPiano.mp3", folder: "public/audio/romantic", filename: "nostalgic-piano.mp3" },
  { url: "https://archive.org/download/freepd/LovelyPianoSong.mp3", folder: "public/audio/romantic", filename: "lovely-piano-song.mp3" },
  { url: "https://archive.org/download/freepd/AmazingGrace.mp3", folder: "public/audio/romantic", filename: "amazing-grace.mp3" },
  { url: "https://archive.org/download/freepd/NightInVenice.mp3", folder: "public/audio/romantic", filename: "night-in-venice.mp3" },

  // Ambient (6)
  { url: "https://archive.org/download/freepd/ChampDeTournesol.mp3", folder: "public/audio/ambient", filename: "champ-de-tournesol.mp3" },
  { url: "https://archive.org/download/freepd/LaCitadelle.mp3", folder: "public/audio/ambient", filename: "la-citadelle.mp3" },
  { url: "https://archive.org/download/freepd/Winter.mp3", folder: "public/audio/ambient", filename: "winter.mp3" },
  { url: "https://archive.org/download/freepd/ActionStrike.mp3", folder: "public/audio/ambient", filename: "action-strike.mp3" },
  { url: "https://archive.org/download/freepd/AfterTheEnd.mp3", folder: "public/audio/ambient", filename: "after-the-end.mp3" },
  { url: "https://archive.org/download/freepd/HorizonFlare.mp3", folder: "public/audio/ambient", filename: "horizon-flare.mp3" },

  // Celebration / Upbeat (6)
  { url: "https://archive.org/download/freepd/Motions.mp3", folder: "public/audio/celebration", filename: "motions.mp3" },
  { url: "https://archive.org/download/freepd/Funshine.mp3", folder: "public/audio/celebration", filename: "funshine.mp3" },
  { url: "https://archive.org/download/freepd/UkuleleSong.mp3", folder: "public/audio/celebration", filename: "ukulele-song.mp3" },
  { url: "https://archive.org/download/freepd/HappyWhistlingUkulele.mp3", folder: "public/audio/celebration", filename: "happy-whistling-ukulele.mp3" },
  { url: "https://archive.org/download/freepd/Limit70.mp3", folder: "public/audio/celebration", filename: "limit-70.mp3" },
  { url: "https://archive.org/download/freepd/CitySunshine.mp3", folder: "public/audio/celebration", filename: "city-sunshine.mp3" },

  // Classical / Peaceful (6)
  { url: "https://archive.org/download/freepd/PianoMagicMotive.mp3", folder: "public/audio/classical", filename: "piano-magic-motive.mp3" },
  { url: "https://archive.org/download/freepd/PatienceParty.mp3", folder: "public/audio/classical", filename: "patience-party.mp3" },
  { url: "https://archive.org/download/freepd/AveryBradySpecial.mp3", folder: "public/audio/classical", filename: "a-very-brady-special.mp3" },
  { url: "https://archive.org/download/freepd/StereotypeNews.mp3", folder: "public/audio/classical", filename: "stereotype-news.mp3" },
  { url: "https://archive.org/download/freepd/MenuSongdonotUse.mp3", folder: "public/audio/classical", filename: "menu-song.mp3" },
  { url: "https://archive.org/download/freepd/InventingFlight.mp3", folder: "public/audio/classical", filename: "inventing-flight.mp3" }
];

// Download utility
function downloadFile(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  https.get(url, res => {
    if (res.statusCode !== 200) return cb(`Error... ${res.statusCode}: ${url}`);
    res.pipe(file);
    file.on("finish", () => file.close(cb));
  }).on("error", err => {
    fs.unlink(dest, () => {});
    cb(err.message);
  });
}

// Run download
tracks.forEach(t => {
  fs.mkdirSync(t.folder, { recursive: true });
  const dest = path.join(t.folder, t.filename);
  console.log(`Downloading ${t.filename}...`);
  downloadFile(t.url, dest, err => err ? console.error(err) : console.log(`Saved ${dest}`));
});
