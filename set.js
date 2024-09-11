const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || ''eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01DQ0MxbkErK2ttckhhTXBEVGdUd1NieCtLcFRyc0pROWVkVldRRUFXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclJMNU11WmNCRmVTZGl2cE9OdndlRmxqYVRJMStsZ1RkM3Izd1EyQVNSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRUJVb3o3QTZZQWhVUHpDMlMrVXZHUDlVQkpuT2pCMStuMVgwcEdGQ0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1T2JobHRRUFNtNHhNdG02OG5uNDN4ZXZ3SDhDWHliQk5aYVFqNVlyd2c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJc0lRWk5CczdyckFjUmNIUHhZNzhHRUN2UkpQa09FMDdibmdHdGwvWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNUUWFhVE1sSkU4VlFqbkVMSDRRMm1UdXlrOThZb0FTUlJ0SG9ocktoUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VCTFJTRkkxcWtSdnJvWHFkc2dHSVRVTFIwVmFnTHZORGo1Z2NrazRWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lUc0xuUmFES0ovcUNkL3djWjQ0VHU3cDk1L2dKWm43SzFJRXZWUG9TZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTMWdFY2RHVVY0aUJyd1hWNUlTS0JFbnBpdzlENE5nc0VmYmR6RTdHTVRSRkxERHhjcWlHZEZnZmdkVjZneVBWdzhsRE0zc1pPVHd4aFdnNDkrWEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6InFFNU83MHVWV21SZXBkdnJhVmg4MSsxT21TbW5TdW8rcjhWOE1LU1Rvanc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRSZFJvQzFMVDgyNEdpdlBCaEZqUlEiLCJwaG9uZUlkIjoiZmFkZjc1ZWYtZjdhMi00MDkzLTgzMTQtODc1YWJhOTMxMDI4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDY3hhdTVJRS9Qdm1iMlAzRXJmRzNrZTV2bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1S3NDbTV5bXQrSVgwck5BalFSSzVmcGROY2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlM2VDU0R1kiLCJtZSI6eyJpZCI6IjkyMzI4NDY0NTE2OToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVBFeFBnR0VPMnppTGNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT3NKcHM4MEdZZnBRMy9CTGtWUEg5akU3a3hoVktrK20yYTNsRHVLbVJpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTjI5bldCNTdCK0VUc1Fhejlsd2IxTzZ3b1llRVpZS3VoS2x2YXJzVTZnSEZHWE43ckRSdnI4TSt4WFlmemdkelZWVkFHMnpSbmdzQmpyaUxpY0FNQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9YYVBqbGtUT3FGbVYrdU9rWEJ0Zzg1NmRXeTNwUk52Ty9mcUdubnZlSGxERDN0MXhpdEFLaXhtbEhldVhvNjBtR3VmSlRoOEJQa2pzS3Rhb0YwSURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjg0NjQ1MTY5OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRyQ2FiUE5CbUg2VU4vd1M1RlR4L1l4TzVNWVZTcFBwdG10NVE3aXBrWXAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYwOTM4MjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQm5uIn0=,
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "keithkeizzah",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " keithkeizzah",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '𝐀𝐋𝐏𝐇𝐀-𝐌𝐃',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/0c351a67f1dffd1f34cf5.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
