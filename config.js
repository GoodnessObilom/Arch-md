/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")

//======= Change settings =======\\
global.owner = ["2347061357640"]
global.botname = ["Arch Md"]
global.simbol = "♘"
global.typeMenu = 'v5' //don't change 
global.anticall = false // set true to turn anticall always on
global.xprefix = '.' // your desired prefix
global.presence = 'available' // available to show always online // unavailable to show not oniline //composing to show fake typing //recording to show fake recording audio
global.thumb = 'https://files.catbox.moe/9nrqqg.jpg' // your menu image
global.timezone = 'Africa/Lagos' // input timezone codrectly with continuent then / city if input wrongly might cause error
//======= Don't change =======\\

global.prefa = ['.']

//======= Don't touch =======\\
global.msg = {
    succes: 'Success',
    owner: 'This feature could be used by owner only',
	admin: 'This feature could be used by group admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    linkm: 'Where is the link?',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
