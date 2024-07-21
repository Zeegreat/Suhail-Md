upconst fs = require('fs-extra')
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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260763238694";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBvRkxPSjErd01selF2YTlZd09pbE10Z2R4NDNrY1UrT1hZSW1oZGFlMlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzYzMjM4Njk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NDA2QjRDQTAyMEVGMEFCRUQwNTI5NjNGRDM4N0E4MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NDYzMzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjA3NjMyMzg2OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4MTlEOUEwQzk1N0Q2NkE5NENBOTI4REQzMUEzM0NDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU0NjMzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MDc2MzIzODY5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzc3OThDQTQ3QTg4MjVEQ0VDNTYwN0UyN0ZERTc2MUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTQ2MzQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhuYzBkSno2U1hxSklKQVQ5S1JncVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmE0YmFjOWEtYjdmNS00NjRmLWI4NDgtMzlkMTc4ZGJmNmEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDE1OSxcbiAgICAgIDExLFxuICAgICAgMjE0LFxuICAgICAgNjIsXG4gICAgICA3NCxcbiAgICAgIDE1OCxcbiAgICAgIDUsXG4gICAgICA4MSxcbiAgICAgIDIzOCxcbiAgICAgIDI0LFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgMzMsXG4gICAgICA4MCxcbiAgICAgIDgzLFxuICAgICAgMjQsXG4gICAgICAxODcsXG4gICAgICAyMjYsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgNDEsXG4gICAgICA1LFxuICAgICAgMTY3LFxuICAgICAgMTQzLFxuICAgICAgNzksXG4gICAgICA0MixcbiAgICAgIDg2LFxuICAgICAgMTE3LFxuICAgICAgMjExLFxuICAgICAgMTcyLFxuICAgICAgMTIwLFxuICAgICAgMyxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgNzMsXG4gICAgICA4NixcbiAgICAgIDI0OCxcbiAgICAgIDE2LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzOEgxQkVaNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwNzYzMjM4Njk0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNDE0NDY2MTIxNzk4OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVvXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk9MNmVzSEVOcnM4clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtRkUybURFdUcxV213MC9UdEhxSkFVTHBCajFRaVRiazQySm5xQVI0clFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZIUkpSMVovdUxOWHlYQnZNQzh3MVZFeHI1QmRmNTJzOUFhSEJhRG1YaEdFMVNqb25KZUZTbXFmVkpjWEE3b0J3aWp0bkZERUI3ZnUzNmIzUlhYakNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhBSGdiNTRJcUZWTWFLUEJJMHA0Q3luQlFnVEloREprNmc3OEVqbXVYeHNDL2xaVzZGMGNQRlFHaFFHNTM0VytkNWNVQWZzazBXcCsyMGtLMllabUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDc2MzIzODY5NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU0NjMzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwzelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDN6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwia2hmb3NpaDYvM3NoZkdhOVQyazRESzJ6MlFROHBiYWlBaFpSNVBEeFBpZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA1MTY1MjY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NDYzMzUyNTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
