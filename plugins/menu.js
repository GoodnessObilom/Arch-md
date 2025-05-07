const run  = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
let { getDevice } = require('baileys')
let fs = require("fs")
let os = require('os');
let speed = require('performance-now');
let moment = require('moment-timezone');
let nou = require("node-os-utils");
let { sizeFormatter } = require('human-readable');
const timestamp = speed()
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
const mark = "0@s.whatsapp.net"
var tot = nou.drive.info();
const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('en').format(format)
	} else {
		return moment.tz(`${global.timezone}`).locale('en').format(format)
	}
}
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { ednut, ednutdev, reply4 }) => {
let timestampe = speed()
let latensi = speed() - timestampe
let me = m.sender
let { getDevice } = require('baileys')
  if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)
let archmenu = `┏━《 ${botname} 》━━━
♞ User: ${m.pushName}
♞ Ping: ${latensi.toFixed(4)}
♞ Time: ${getTime().split("T")[1].split("+")[0]}
♞ Date: ${welDate}
♞ Platform: ${nou.os.type()}
♞ Memory: ${formatp(os.totalmem() - os.freemem())}
♞ Runtime: ${run(process.uptime())}
┗━━━━━━━━━━━━━━━

┏━━《ᴏᴡɴᴇʀ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}mode
┃${global.simbol} ${global.prefix}Areact
┃${global.simbol} ${global.prefix}Setbio
┃${global.simbol} ${global.prefix}Restart
┃${global.simbol} ${global.prefix}Advertise 
┃${global.simbol} ${global.prefix}Delete
┃${global.simbol} ${global.prefix}Join
┃${global.simbol} ${global.prefix}Leave
┃${global.simbol} ${global.prefix}Logout
┃${global.simbol} ${global.prefix}Unblock
┃${global.simbol} ${global.prefix}Block
┃${global.simbol} ${global.prefix}Setsudo
┃${global.simbol} ${global.prefix}Delsudo
┃${global.simbol} ${global.prefix}Getsudo
┃${global.simbol} ${global.prefix}Listblock
┃${global.simbol} ${global.prefix}listgroup
┃${global.simbol} ${global.prefix}Ban
┃${global.simbol} ${global.prefix}setppbot
┃${global.simbol} ${global.prefix}delppbot
┃${global.simbol} ${global.prefix}Unban
┃${global.simbol} ${global.prefix}save
┃${global.simbol} ${global.prefix}status
┗━━━━━━━━━━━━━━━━

┏━━《ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}Play <query>
┃${global.simbol} ${global.prefix}Video <query>
┃${global.simbol} ${global.prefix}igdl <link>
┃${global.simbol} ${global.prefix}Fb <link>
┃${global.simbol} ${global.prefix}Tiktok <link>
┃${global.simbol} ${global.prefix}tiktokmp3 <link>
┃${global.simbol} ${global.prefix}Mediafire <link>
┃${global.simbol} ${global.prefix}Gitclone <link>
┃${global.simbol} ${global.prefix}Ytmp4 <link>
┃${global.simbol} ${global.prefix}Ytmp3 <link>
┃${global.simbol} ${global.prefix}img <query>
┃${global.simbol} ${global.prefix}Yts <query>
┃${global.simbol} ${global.prefix}Xvideodl <link>
┃${global.simbol} ${global.prefix}Shortlink-dl <link>
┃${global.simbol} ${global.prefix}twitter <link>
┗━━━━━━━━━━━━━━━━

┏━━《ɴᴇᴡ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}setcmd <text>
┃${global.simbol} ${global.prefix}delcmd <text>
┃${global.simbol} ${global.prefix}update
┃${global.simbol} ${global.prefix}update <now>
┃${global.simbol} ${global.prefix}filter <text>
┃${global.simbol} ${global.prefix}delfilter <text>
┃${global.simbol} ${global.prefix}listfilter <text>
┗━━━━━━━━━━━━━━━━

┏━━《ɢᴀᴍᴇ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}Truth
┃${global.simbol} ${global.prefix}dare 
┗━━━━━━━━━━━━━━━━

┏━━《ғᴀᴋᴇ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}autostatus
┃${global.simbol} ${global.prefix}online
┃${global.simbol} ${global.prefix}autotyping 
┃${global.simbol} ${global.prefix}autorecording 
┃${global.simbol} ${global.prefix}autoread
┃${global.simbol} ${global.prefix}unavailable 
┃${global.simbol} ${global.prefix}autobio
┃${global.simbol} ${global.prefix}autosend
┃${global.simbol} ${global.prefix}anticall
┃${global.simbol} ${global.prefix}antidelete
┃${global.simbol} ${global.prefix}autolevelup
┃${global.simbol} ${global.prefix}autostatuslike
┗━━━━━━━━━━━━━━━━

┏━━《ʙᴏᴛ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}Ping
┃${global.simbol} ${global.prefix}Runtime
┃${global.simbol} ${global.prefix}Ai
┃${global.simbol} ${global.prefix}Test
┃${global.simbol} ${global.prefix}Alive
┗━━━━━━━━━━━━━━━━

┏━━《ɢʀᴏᴜᴘ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}Hidetag
┃${global.simbol} ${global.prefix}gcinfo
┃${global.simbol} ${global.prefix}Tagall
┃${global.simbol} ${global.prefix}Tagadmin
┃${global.simbol} ${global.prefix}Grouplink
┃${global.simbol} ${global.prefix}Revoke
┃${global.simbol} ${global.prefix}Add
┃${global.simbol} ${global.prefix}Kick
┃${global.simbol} ${global.prefix}Promote
┃${global.simbol} ${global.prefix}Demote
┃${global.simbol} ${global.prefix}Mute
┃${global.simbol} ${global.prefix}Antilink
┃${global.simbol} ${global.prefix}Antibot
┃${global.simbol} ${global.prefix}Unmute
┃${global.simbol} ${global.prefix}Closetime
┃${global.simbol} ${global.prefix}Opentime
┃${global.simbol} ${global.prefix}Stoptime
┃${global.simbol} ${global.prefix}Welcome
┃${global.simbol} ${global.prefix}Goodbye
┃${global.simbol} ${global.prefix}setwelcome
┃${global.simbol} ${global.prefix}setgoodbye
┃${global.simbol} ${global.prefix}pdm
┃${global.simbol} ${global.prefix}Request
┃${global.simbol} ${global.prefix}approve
┃${global.simbol} ${global.prefix}warn
┃${global.simbol} ${global.prefix}delwarn
┃${global.simbol} ${global.prefix}resetwarn
┃${global.simbol} ${global.prefix}Antitag
┃${global.simbol} ${global.prefix}kickall
┃${global.simbol} ${global.prefix}banchat
┃${global.simbol} ${global.prefix}unbanchat
┗━━━━━━━━━━━━━━━━

┏━━《ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}sticker
┃${global.simbol} ${global.prefix}toimg
┃${global.simbol} ${global.prefix}tomp3
┃${global.simbol} ${global.prefix}tomp4
┃${global.simbol} ${global.prefix}tovn
┃${global.simbol} ${global.prefix}tovv
┃${global.simbol} ${global.prefix}Write
┃${global.simbol} ${global.prefix}shorturl
┃${global.simbol} ${global.prefix}Ssweb
┃${global.simbol} ${global.prefix}tourl
┃${global.simbol} ${global.prefix}bass
┃${global.simbol} ${global.prefix}robot
┃${global.simbol} ${global.prefix}nightcore
┃${global.simbol} ${global.prefix}fat
┃${global.simbol} ${global.prefix}fast
┃${global.simbol} ${global.prefix}earrape
┃${global.simbol} ${global.prefix}reverse
┃${global.simbol} ${global.prefix}slow
┃${global.simbol} ${global.prefix}smooth
┃${global.simbol} ${global.prefix}squirrel
┃${global.simbol} ${global.prefix}blown
┃${global.simbol} ${global.prefix}deep
┗━━━━━━━━━━━━━━━━

┏━━《sᴇᴀʀᴄʜ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}stickersearch <query>
┃${global.simbol} ${global.prefix}xnxxsearch <query>
┃${global.simbol} ${global.prefix}xvideosearch <query>
┃${global.simbol} ${global.prefix}npmsearch <query>
┃${global.simbol} ${global.prefix}githubsearch <query>
┃${global.simbol} ${global.prefix}tiktoksearch <query>
┗━━━━━━━━━━━━━━━━

┏━━《ʟᴏɢᴏ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}writetext
┃${global.simbol} ${global.prefix}advancedglow
┃${global.simbol} ${global.prefix}typographytext
┃${global.simbol} ${global.prefix}pixelglitch
┃${global.simbol} ${global.prefix}neonglitch
┃${global.simbol} ${global.prefix}flagtext
┃${global.simbol} ${global.prefix}flag3dtext
┃${global.simbol} ${global.prefix}deletingtext
┃${global.simbol} ${global.prefix}blackpinkstyle
┃${global.simbol} ${global.prefix}glowingtext
┃${global.simbol} ${global.prefix}underwatertext
┃${global.simbol} ${global.prefix}logomaker
┃${global.simbol} ${global.prefix}cartoonstyle
┃${global.simbol} ${global.prefix}papercutstyle
┃${global.simbol} ${global.prefix}watercolortext
┃${global.simbol} ${global.prefix}effectclouds
┃${global.simbol} ${global.prefix}blackpinklogo
┃${global.simbol} ${global.prefix}gradienttext
┃${global.simbol} ${global.prefix}summerbeach
┃${global.simbol} ${global.prefix}luxurygold
┃${global.simbol} ${global.prefix}multicoloredneon
┃${global.simbol} ${global.prefix}sandsummer
┃${global.simbol} ${global.prefix}galaxywallpaper
┃${global.simbol} ${global.prefix}1917style
┃${global.simbol} ${global.prefix}makingneon
┃${global.simbol} ${global.prefix}royaltext
┃${global.simbol} ${global.prefix}freecreate
┃${global.simbol} ${global.prefix}galaxystyle
┃${global.simbol} ${global.prefix}lighteffects
┗━━━━━━━━━━━━━━━━

┏━━《ᴏᴛʜᴇʀ ᴍᴇɴᴜ》━━
┃${global.simbol} ${global.prefix}getdevice
┃${global.simbol} ${global.prefix}Owner
┃${global.simbol} ${global.prefix}Say
┃${global.simbol} ${global.prefix}Trackip
┃${global.simbol} ${global.prefix}readmore
┃${global.simbol} ${global.prefix}Vv
┃${global.simbol} ${global.prefix}Vv2
┃${global.simbol} ${global.prefix}Fancy
┃${global.simbol} ${global.prefix}Charge
┃${global.simbol} ${global.prefix}Support
┃${global.simbol} ${global.prefix}Take
┃${global.simbol} ${global.prefix}Getpp
┃${global.simbol} ${global.prefix}Weather
┃${global.simbol} ${global.prefix}Translate
┃${global.simbol} ${global.prefix}Get
┃${global.simbol} ${global.prefix}Repo
┃${global.simbol} ${global.prefix}Lyrics
┃${global.simbol} ${global.prefix}jid
┗━━━━━━━━━━━━━━━━`
if (menutype === 'v1') {
                    ednut.sendMessage(m.chat, {
                        text: archmenu,
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: '𝓔𝓭𝓷𝓾𝓽 𝓭𝓮𝓿',
                                thumbnailUrl: `${global.thumb}`,
                                sourceUrl: ' ',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
} else if (menutype === 'v2' ) {
                    ednut.sendMessage(m.chat, { text: archmenu }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
reply4(archmenu)
}
}

handler.command = ["menu"]

module.exports = handler