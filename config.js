yesconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_42_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlM3RUZySlROYXg4YUtHOWVwTkZsRkdXZWpza1VhUzJCUUQ0dWFWYlFrVzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzYzMjM4Njk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNTU2QzZCMTA0RkE0NEVEMUJEMEZDNjhENzlBMzI1MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NTEzNDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjA3NjMyMzg2OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRBOEVDNTc4OTUwQzRFQzNENDYzODNGQzk5M0ZBODYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU1MTM0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDYXpucjAwTVJEV0VpcXMzbWIwR0h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxNWNkZGZmLWM3ZWUtNDg5Yi05ZDg4LWY2YzM5MjlkNDk0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAyMjYsXG4gICAgICAxMTQsXG4gICAgICAxMjEsXG4gICAgICAxNzIsXG4gICAgICAxLFxuICAgICAgMjIwLFxuICAgICAgMixcbiAgICAgIDE0MixcbiAgICAgIDgyLFxuICAgICAgNzksXG4gICAgICAxMTYsXG4gICAgICAxODksXG4gICAgICA2OCxcbiAgICAgIDI5LFxuICAgICAgMjA2LFxuICAgICAgMTIsXG4gICAgICAyLFxuICAgICAgNDcsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDIxNCxcbiAgICAgIDE3NixcbiAgICAgIDIwNCxcbiAgICAgIDc4LFxuICAgICAgMTg0LFxuICAgICAgOTQsXG4gICAgICAyMDQsXG4gICAgICAxMDcsXG4gICAgICAyNDIsXG4gICAgICAxNDAsXG4gICAgICAxODQsXG4gICAgICAyMTksXG4gICAgICA0OSxcbiAgICAgIDE0MyxcbiAgICAgIDYyLFxuICAgICAgMjQzLFxuICAgICAgMjE4LFxuICAgICAgMjA2LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdZWldRM0E5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA3NjMyMzg2OTQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA0MTQ0NjYxMjE3OTg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZW9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOT0w2ZXNIRU9xVDg3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1GRTJtREV1RzFXbXcwL1R0SHFKQVVMcEJqMVFpVGJrNDJKbnFBUjRyUVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZVIrZzdUblY0OGNGTGo3YUxxVmtLRVhuakRUMStHbEVzNCtMQ0Q5alZvb25FeGUybUI5QlB0ejF1QVltWVV2THdKVUNwRStPWjhvOGQ2VUtra1ErQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEJGcTI2WEtxMmtiT2gyOXREQll0ZVF6MDVTS1NvenBjNVpVQkRRTC9MYkZ6Zk12S0RkSnlTbW1rdzdIR2pwdUk4d2RWV2xYd0ROWmNQMDlxck81RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwNzYzMjM4Njk0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTUxMzQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDN5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMM3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvdHlTRE1WVXZwZnpwcE1wTTFTSzZndFV5d2RlS2JEenM3MXdla3lMUVpjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDUxNjUyNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NDUwMjI1ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
