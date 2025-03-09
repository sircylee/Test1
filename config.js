//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/sircylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/purbus.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/lt92j5.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27615045572";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session-ll.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tIMjZEYXhYVHhJL2Z5VnUvN0JmWWZEcGhoaXpEc2tsWmNRVjJ0ckkycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktOTTdubTN3RnNRSVh2ZnNsWFRBdTJibmNFKzlnU0svSVdhZkVmbE1Yaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQlR6U1NKZ3FtTGdpRjdzZUFabDg5eC8yazlLS1hhRFpxRUxUKzg2TEdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITWJQZ1Bhb0graW16MWVGRndMb2Ywd2VIeHdsZzBDN2x0KzRjeVJmY25JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEaUIzNUZqeG0vNFNMYUpDcE9oOFdhcnJESTBIWk1JN0hTb2h1SlZsbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd2Q1BRUXBqRlRLRDdtQnMza2lHRGVQd2RscGFtWXRLNFNvbElKL2lwaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEQycG81aWhnZkRramdPVlRUMG1VQXhZekEwN0QzSy9mdHVaS0lGQlAxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pTR0RaTUZlb0t5eFBGRzVMU3RaeVNqWHdTSWlJR1ZMZGZNb1NtbWRGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMb29RSGpIdGlLekx0WXh6cUxMcFBpQ2FTYVNwdVBBaEtJczJPVTJoRWw2YjI0dzhxYUk4UVVzMFNKSHZGaVQrSlZSYW9sVDZOSjhURU5pbGkxakNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IjcyRlU5SU11RzRQc3lCeW1DeW9mb0JrK29JUmJhditmczRQbDhudjI4cTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxDS0J0X0RaUm9HbEVLb2lqOU9QeGciLCJwaG9uZUlkIjoiNDkxNmNhN2MtOGJmMS00MTBkLTk2NTAtYmU0NDUzMmFlMzE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZiVXpsMU02M2pkMlp2REUyY1oyZjcwU1RXST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZVZDSFBBNW1pU3hVQlpJS3JwRWZIUFlUME09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzFRUFE0M1ciLCJtZSI6eyJpZCI6IjI3NjQzNzc5MDY0OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic2lyY3lsZWVvYnNlc3NlZHdpdGhoaXN0ZWRkeWJlYXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2L29LQUhFSkQwdEw0R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhvQ0ZwTmJMbWdmb0ZVY0kxSHhQeXo4aUdBcS9Zc3NCMXF0SWhzZ3Y0Vk09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im83K1hsWXJXdmFKRFg0OWo1Q0MzajYydWpFTVZwU1QxRTUyRnRQTGhwcTJWSElxL2g4TS9XZ3BXRmYwZXNBWWpsWWFIVFgrdVVYNkpxSEpPWndRTEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPUnljdVRselByREdGd2pmS2k5Mk1INUpnU3RCTWtMYk5aaEtGalAvbXd3aEovUGRTUytycU43ZWNHRTA5K0tFeFgvLzl1aXlRblFlT084eC9OWHNBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjQzNzc5MDY0OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWFBaGFUV3k1b0g2QlZIQ05SOFQ4cy9JaGdLdjJMTEFkYXJTSWJJTCtGVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTUwMzAwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHaUsifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "sircylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
