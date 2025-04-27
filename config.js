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
global.session = process.env.SESSION_ID || "";
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
