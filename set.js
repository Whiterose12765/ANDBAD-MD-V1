const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEx2akNvNnNrcHB4MEFMRk9selNTZVlPRmVmc3k5T0sxTlEranJONWFtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpQZ2wwUjhqcm40NmpCa2FjTVU5N1QvVkIraVl6WjZvSTY2eStyQy9Ycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSURlQ3BGekpqODJzNjlhanRmWXZDQ1dJRlpBRXNlYm44UG52WWYvS0g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVektSMUZTSkJlbC9zNDBZeXkreGVhNVpnSGhUeTNseVhaR3QrWGZqVnhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEcDVrMXdFamtWVmowSjdCZkFkajljbVREcFRTTHFhZ3BYNjNnM1hLblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIYzRRY1RHdW04ZXBQZ01WU0hDanVsTlovRnpMeUpkSmh1NklldTc0eVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09hZHBKa1VFKzFvRzZnSXJBeWk1Q0VUUVUvcGRlTjlaNnR4MnVXZEpIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lRYzh5SGdNMHpTMGRhVU5WVTdFSkpHQ3Z4MmtZVVBwSnRQa3hzdEtnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlPNmRsUFBKQVhKOWlkaC9wRVV5TTN6eGRyeFQ2eEdxenJ1OE9tN3pIS1BuTUNFWnhDYnlIRTlmdElOajhrT3VmcmdsbDQ3RnZGbkg2aTV4S2hzVURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6InBTUVZ4VWFCbjIrTUx3eFdRUVF5YTUrVG55b3M0aVBmNStSeWpkZWk5YTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktUVDF3TkVWU2F1bzNCZ1ZieG0tbXciLCJwaG9uZUlkIjoiNmQ4ZWE2YTQtZDg4Yy00ZGIxLThhYzAtODY4M2Y4NzM5MTNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis1TDdudFNOU2ZYclJOQzZYLzJKT0tJcWkrOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOWGxlWGJSa2prTmJtM09TSmZ3ZEx3RTZ2alE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVRaOEw3VkciLCJtZSI6eyJpZCI6IjYwMTExNzUwODUyNTozNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCZ8J2QgPCdkJjwnZCAIPCdkIXwnZCO8J2QlPCdkJEg8J2QhfCdkIjwnZCN8J2QhvCdkITwnZCR8J2QkiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0tYdFpFQ0VPR3E5NzBHR0JRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3BLRkk5c214RWloNEk1M1VycEoyMDBiWDZ4aSs3OWJ0THZBRzBEakVFZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWF0QmJMaFJ6dHI0c2RlQVBkeFVhV3RjMEUxUzI4QzJpOVpGaDZlTXhBTTFiZGFzS3BrYWhmS0drTDNMWG9VZDEwRFJYZ1E1azEwNENOWlBKbW1TQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9BV0dOdThQeFBnWVROdVFDWkNqOExsTFU1SkZXTlVTb2Z4bVR0M3pPWDMxcjdIZG5ydkNCc2tOM0xOVVNQclc2ZTV1Wm4vbHVoMGVsSzhJaGRQTURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjAxMTE3NTA4NTI1OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFxU2hTUGJKc1JJb2VDT2QxSzZTZHRORzErc1l2dS9XN1M3d0J0QTR4QkkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDA0OTQxODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHgwIn0=",
  'PREFIXE': process.env.PREFIX || '+',
  'OWNER_NAME': process.env.OWNER_NAME || "𝐂.𝚵.𝚯 𝚫𝚴𝐃𝚩𝚫𝐃",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "255783394967",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "𝚫𝚴𝐃𝚩𝚫𝐃-𝚳D",
  'URL': process.env.BOT_MENU_LINKS || "https://i.imgur.com/L4U2K76.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
