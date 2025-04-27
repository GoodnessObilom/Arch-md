/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = process.env.PREFIX || "!"; // your desired prefix symbol only
global.owner = process.env.OWNER_NUMBER || "2348022159244"; // owner number 
global.sudo = process.env.SUDO  || "2349061909726";
global.ownername = process.env.OWNER_NAME || "ᗰ😟ᖴᗴ 【𓍯】"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "αrch md🍀";
global.author = process.env.AUTHOR  || "ᗰ😟ᖴᗴ 【𓍯】";
global.packname = process.env.PACK_NAME  || "ᴀɴᴛɪsᴏᴄɪᴀʟ ʜᴜᴍɪᴅɪᴛʏ 🍀";
global.thumb = process.env.THUMB_IMAGE || 'https://files.catbox.moe/1uhvld.jpg';
global.footer = process.env.FOOTER || 'ᴀɴᴛɪsᴏᴄɪᴀʟ ʜᴜᴍɪᴅɪᴛʏ 🍀';
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"qI07XbCMNXIwZHcUhK/CuHn0xvyv8ZwmlYqcsdbiRl0="},"public":{"type":"Buffer","data":"D9i3BTwjaOBgOJYL5jk5tvJoxKZKxmL1m4riueuGw2k="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"INFO4llYnxLCduiTf6qEvRbmAuOttl5/oFpfO2R/knA="},"public":{"type":"Buffer","data":"KRbv6AAAEzCBZ5WKGljdF+6OShHWnPJ/194at9YBL08="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mKvHg46uLdx5x52pJRt1mdmCTXb9QvJ425/V/pI4Rns="},"public":{"type":"Buffer","data":"ntbf5lHnOVncDLcnX14tJ6sD5uY54+Y5TY4O+sym+2A="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2DKVFUaCdAhuauUhCzdWoXJOWY68fdtdu7i5e8MFcUU="},"public":{"type":"Buffer","data":"SFtplzUk6Kbzzvi+Yuy6q8Zf1U6k8xmyQEMjT4YlpRQ="}},"signature":{"type":"Buffer","data":"QvBFL+9+zk20iiDkyQ1cDgmOQZ2OO+nGiXVDbwfnKskIJpUjjOZaIF48Biycxh9sDFWJG/tf9vqrtOmYEds7jQ=="},"keyId":1},"registrationId":122,"advSecretKey":"OH2sIy/Sp1ptxVgzwvPomdonOpAeyqG/KP0W8pJrdlM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"Y3QYRS3G","me":{"id":"2348022159244:12@s.whatsapp.net","lid":"117334798790754:12@lid"},"account":{"details":"CMmCtUQQq5e2wAYYAiAAKAA=","accountSignatureKey":"DErSTNNs5K7qYAatkxV5XmmX8eqp2KmyObycX3L1OEM=","accountSignature":"KWpgtVvWaxQRJl3hmOkCcHQhQ3E2NJ8/vEm4uAtOHybfQLpPpfNwnXlBtgB2V8yg3NoxDyEc9q7Ym7iwPP+iBw==","deviceSignature":"QUit3t+HSr6hHEuSOAh9oAXxyBxaclqHdDCiYgcD9zsDEbSZZYbHyJq2nUuPjsJIM75j14biRuqhQl3zxE1SiA=="},"signalIdentities":[{"identifier":{"name":"2348022159244:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQxK0kzTbOSu6mAGrZMVeV5pl/Hqqdipsjm8nF9y9ThD"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1745718199,"lastPropHash":"2G4Amu","myAppStateKeyId":"AAAAAKkF"}";
global.simbol = process.env.SYMBOL || '🍀';
global.menutype = process.env.MENU_TYPE  || "v2";
global.warn = process.env.WARN || "3";
global.goodbye = process.env.GOODBYE === 'false';
global.welcome = process.env.WELCOME === 'false';
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.startup = process.env.START_MSG === 'false';
global.scan = 'https://arch-session.onrender.com';
global.api = '';


//======= Don't touch =======\\
global.msg = {
    succes: '_Success_',
    owner: '_This feature could be used by owner only_',
	admin: '_This feature could be used by group admin only_',
	botAdmin: '_This feature could be used when the bot is an admin only_',
    group: '_Features Used Only For Groups!_',
    private: '_Features Used Only For Private Chat!_',
    bot: '_This feature could be used by bot only_',
    wait: '_processing.._',
    ban: '_Sorry you have been banned from using command contact owner to unban_'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
