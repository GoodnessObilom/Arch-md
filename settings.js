/* 

   Contact: https://wa.me/2347036214381
   Telegram: https://t.me/Ednut_x    
   Developer : https://wa.me/2348102487241
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")


//======= Change settings =======\\
global.owner = "2347036214381"
global.botname = "αrch md"
global.ownername = ""
global.simbol = "♘"
global.typeMenu = 'v1' //don't change 
global.anticall = false // set true to turn anticall always on
global.prefix = '.' // your desired prefix symbol only
global.channel = ''
global.timezone = 'Africa/Lagos'
global.author = 'Ednut'
global.packname = 'Arch Md ²⁵'

global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = false // if deploying on panel set true if on any other platform leave it false
global.startup = true

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/bj888g.jpg", 
reply: "https://files.catbox.moe/9nrqqg.jpg", 
}

// Message Command 
global.mess = {
	owner: "*Access Denied* This feature is for bot owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the bot is an admin.!",
	group: "*Access Denied* This feature is for groups only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
