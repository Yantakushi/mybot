const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const hx = require('hxz-api')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')	
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();


// LIB FUNCTION
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { webp2mp4File } = require('./lib/webp2mp4')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
//Function RPG & LEVEL By Pebri Ori
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addAyam, sellAyam, getAyam, addSapi, sellSapi, getSapi, addBurung, sellBurung, getBurung } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//Database RPG Mode By Pebri!! Ori 
let _RPG = JSON.parse(fs.readFileSync('./database/user/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./database/user/rpg/inventori.json'))
let _limit = JSON.parse(fs.readFileSync('./database/user/rpg/limit.json'))
const afk = require("./lib/afk");
const premium = require("./lib/premium")
// setting
const set = JSON.parse(fs.readFileSync('./src/setting2.json'))
const tes = JSON.parse(fs.readFileSync('./src/settingsymbol.json'))
const api = JSON.parse(fs.readFileSync('./src/apikey.json'))
//Biarin
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//Storage
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
undef2 = fs.readFileSync('./tag1.webp')
petik = '```'
readGc = true 
readPc = true
autovn = set.autovn
autoketik = set.autoketik
antical = set.antical
publik = set.publik
fake = set.FakeText
limitawal = '200'
limitCount = 100

// Biarin Udh Nyambung Ke setting yg di src

NamaBot = set.NamaBot
NamaOwner = set.NamaOwner
NOwner = set.NomorOwner
NomorOwnz = set.NomorOwnz
NomorOwnc = set.NomorOwnc
ytown = set.YtOwn
GrubBot = set.GrubBot
GrubBot2 = set.GrubBot2
FakePdf = set.FakePdf
FakeYt = set.FakeYt
FakeText = set.FakeText
FakeLoc = set.FakeReply
TextDiButton = set.TextDiButton
HargaPermanen = set.HargaPermanen
HargaPerbulan = set.HargaPerbulan
HargaPerminggu = set.HargaPerminggu
HargaPremium = set.HargaPremium
NomorGopay = set.NomorGopay
NomorDana = set.NomorDana
NomorOvo = set.NomorOvo
NomorPulsa = set.NomorPulsa
// Symbol
atas = tes.Atas
bawah = tes.Bawah
bates = tes.Bates
buletan = tes.Buletan
garis = tes.Garis
kecil = tes.Kecil
in_fake = tes.Infake
kotak = tes.Kotak
ownerl = tes.Ownerl
adminl = tes.Adminl
freel = tes.freel
//apikey
apidapa = api.ApiDapa
apivinz = api.ApiZeks
//Vcard
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN: ${NamaOwner}\n` 
+ `ORG: Contact ${NamaOwner};\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwnz}:${NomorOwnc}\n`
+ 'END:VCARD'


// === GAME DATABASE

let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))

// === GROUP DATABASE

let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))        
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));    

// === USER DATABASE
let _register = JSON.parse(fs.readFileSync('./database/bot/register.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/ban.json'));
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let balance = JSON.parse(fs.readFileSync('./database/user/rpg/balance.json'));

/// === BOT DATABASE

let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const setik = JSON.parse(fs.readFileSync('./temp/setik.json'))
const vien = JSON.parse(fs.readFileSync('./temp/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./temp/imagi.json'))

// === TIME  BOT 
 
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){var tampilUcapan = '🌃Malam Kak'}
if(time2 < "19:00:00"){var tampilUcapan = '🌇Petang Kak'}
if(time2 < "18:00:00"){var tampilUcapan = '🌁️Sore Kak'}
if(time2 < "15:00:00"){var tampilUcapan = '🌅Siang Kak'}
if(time2 < "11:00:00"){var tampilUcapan = '🌄Pagi Kak'}
if(time2 < "05:00:00"){var tampilUcapan = '🌃Malam Kak'}

// === LIMIT USER
        const getLimt = (sender) => {
        	let position = false
              Object.keys(_limit).forEach ((i) => {
              	if (_limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return _limit[position].limit
            }
        }


            const limitAd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 20
                fs.writeFileSync('./database/user/rpg/limit.json', JSON.stringify(_limit))
            }
        }
	     // === REGISTER USER
        const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
	    const getRegisteredRandomId = () => {
        return register[Math.floor(Math.random() * register.length)].id}

        const addRegisteredUser = (sender) => {
        const obj = { id: sender}
        _register.push(obj)
        fs.writeFileSync('./database/bot/register.json', JSON.stringify(_register))}
        
        const checkRegisteredUser = (sender) => {
        let status = false
        Object.keys(_register).forEach((i) => {
        if (_register[i].id === sender) {
        status = true
        }
        })
        return status
        }






        // === Sticker Cmd
        const addCmd = (id, command) => {
        const obj = { id: id, chats: command }
        _scommand.push(obj)
        fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))}
        
        const getCommandPosition = (id) => {
        let position = null
        Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {position = i}})
        if (position !== null) {
        return position}}

        const getCmd = (id) => {
        let position = null
        Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {position = i}})
        if (position !== null) {
        return _scommand[position].chats}}
 

        const checkSCommand = (id) => {
        let status = false
        Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {status = true}})
        return status}
        
        // START SCRIPT
        
        module.exports = dha = async (dha, mek) => {
	    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	    const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar()
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar()
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
	    const query = (teks) => {dha.sendMessage(from, `Kasih Query Woy`, text, {quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}        
        const botNumber = dha.user.jid
        const _0x4d3f68=_0x4fb8;function _0x4fb8(_0x89c676,_0x5890dd){const _0x50fa84=_0x50fa();return _0x4fb8=function(_0x4fb8eb,_0x5d69b6){_0x4fb8eb=_0x4fb8eb-0x127;let _0x1b8eae=_0x50fa84[_0x4fb8eb];return _0x1b8eae;},_0x4fb8(_0x89c676,_0x5890dd);}(function(_0x417ce9,_0x222362){const _0x41adb5=_0x4fb8,_0x187800=_0x417ce9();while(!![]){try{const _0x41a7fe=-parseInt(_0x41adb5(0x134))/0x1*(-parseInt(_0x41adb5(0x12e))/0x2)+parseInt(_0x41adb5(0x12d))/0x3*(parseInt(_0x41adb5(0x12f))/0x4)+-parseInt(_0x41adb5(0x12c))/0x5*(parseInt(_0x41adb5(0x130))/0x6)+parseInt(_0x41adb5(0x135))/0x7*(parseInt(_0x41adb5(0x128))/0x8)+parseInt(_0x41adb5(0x133))/0x9+-parseInt(_0x41adb5(0x12a))/0xa*(-parseInt(_0x41adb5(0x129))/0xb)+parseInt(_0x41adb5(0x131))/0xc*(-parseInt(_0x41adb5(0x12b))/0xd);if(_0x41a7fe===_0x222362)break;else _0x187800['push'](_0x187800['shift']());}catch(_0x5c79c9){_0x187800['push'](_0x187800['shift']());}}}(_0x50fa,0x76eb6));const ownerNumber=[''+NOwner,'6282132242606@s.whatsapp.net','62881036247469@s.whatsapp.net'],isGroup=from[_0x4d3f68(0x127)](_0x4d3f68(0x132));function _0x50fa(){const _0xd5ea20=['7150617xOfGAk','43gFGKSV','606858NzEEXP','endsWith','48FsaTqp','11xmREQW','7979780oIqWIm','17771tZPfNS','37735YZvtwU','18oWSFWz','16084uBSHlI','495056jzPGTS','96ReHluR','22764nmXnlW','@g.us'];_0x50fa=function(){return _0xd5ea20;};return _0x50fa();}
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
	    const more = String.fromCharCode(8206)
	    const readd = more.repeat(4001)
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)}
	    // is
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isRegister = checkRegisteredUser(sender)
        const isRpg = checkPetualangUser(sender)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        // load img
		const dfrply = fs.readFileSync(`./media/canss.jpg`)
		const fake = fs.readFileSync(`./media/canss.jpg`)
		const thbfake = fs.readFileSync(`./media/yt.jpg`)
		// random
		const mekla1 = ['1','2','3','4','5','6','7','8','9']
        const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
        const random1 = ['1','2','3','4','5','6','7','8','9'] 
        const random2 = ['1','2','3','4','5','6','7','8','9'] 
        const random3 = ['1','2','3','4','5','6','7','8','9'] 
        const random4 = ['1','2','3','4','5','6','7','8','9'] 
        const random5 = ['1','2','3','4','5','6','7','8','9'] 
        const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
        const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
        const random6 = random1[Math.floor(Math.random() * (random1.length))]      
        const random7 = random2[Math.floor(Math.random() * (random5.length))]      
        const random8 = random3[Math.floor(Math.random() * (random5.length))]      
        const random9 = random4[Math.floor(Math.random() * (random5.length))]      
        const random10 = random5[Math.floor(Math.random() * (random5.length))]   
        const randomkoin = `${random7}${random6}`

        var date = new Date();

		var tahun = date.getFullYear();

		var bulan = date.getMonth();
		var tanggal = date.getDate();
		var hari = date.getDay();
		var jams = date.getHours();
		var menit = date.getMinutes();
		var detik = date.getSeconds();


		switch(hari) {
		 case 0: hari = "Minggu"; break;
		 case 1: hari = "Senin"; break;
		 case 2: hari = "Selasa"; break;
		 case 3: hari = "Rabu"; break;
		 case 4: hari = "Kamis"; break;
		 case 5: hari = "Jum'at"; break;
		 case 6: hari = "Sabtu"; break;
		}
		switch(bulan) {
		 case 0: bulan = "Januari"; break;
		 case 1: bulan = "Februari"; break;
		 case 2: bulan = "Maret"; break;
		 case 3: bulan = "April"; break;
		 case 4: bulan = "Mei"; break;
		 case 5: bulan = "Juni"; break;
		 case 6: bulan = "Juli"; break;
		 case 7: bulan = "Agustus"; break;
		 case 8: bulan = "September"; break;
		 case 9: bulan = "Oktober"; break;
		 case 10: bulan = "November"; break;
		 case 11: bulan = "Desember"; limitAdd(sender, _limit);
		}
		tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
        // fakee loc
        const floc3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `Runtime : ${runtime(process.uptime())}\n*Command* : ${command}`} } }
        // TROLI
        const ftroli = {key : {participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${NamaBot}`,orderTitle: `© ${NamaOwner}`,thumbnail: thbfake,sellerJid: '0@s.whatsapp.net'}}} 

//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\        
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'Master Gg'
			}
						//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronze'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     }
        //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            const limitNya = limitawal - lmt.limit
                            if (limitNya <= 0) return dha.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                          //  dha.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
                           if (!isRpg) return
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`👤 Profile User Rpg
👤 Nama : ${pushname}
📊 Rank : ${role}
📛 Status : ${elit}
💸 Uang : $${(getBalance(sender, balance))}
⭐ Xp : ${getLevelingXp(sender)}/${reqXp}
😄 Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :

🪙 Uang : ${(getBalance(sender, balance))}💰
🏅 Emas : ${getEmas(sender)}🪙
⛓️ Besi : ${getBesi(sender)}⛓️
💎 Berlian : ${getDm(sender)}💎
🐟 Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚

${kotak} #mining
${kotak} #mancing
${kotak} #adventure
${kotak} #myinventori
${kotak} #leaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆


${kotak} #sellikan
${kotak} #sellbesi
${kotak} #sellemas
${kotak} selldiamond

Rpg ini di buat oleh FEBZABOTZ https://youtu.be/4EWisOAkI2A`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, pp, 'rpg game', but)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/rpg/limit.json', JSON.stringify(_limit))
                        dha.sendMessage(from, `${limitNya}`, text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender, isOwner) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let healts = i.limit
              if (healts >= limitawal ) {
              	  position = true
                    dha.sendMessage(from, 'Limit Kamu Habis', text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/rpg/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
     	
     	const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                if (_limit[position].limit >= 0) return reply('limit kmu dh maximal')
                fs.writeFileSync('./database/user/rpg/limit.json', JSON.stringify(_healt))
            }
        }

     
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        //By nayla / rimurubotz
		const reply = (teks) => {
		const B1C = {contentText: teks, footerText: `${TextDiButton}`, headerType: 1}      
		dha.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:floc3,contextInfo: {forwardingScore: 508, isForwarded: true}})}		

		const replyz = (teks) => {
		const B1C = {contentText: teks, footerText: `${TextDiButton}`, headerType: 1}      
		dha.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:ftroli,contextInfo: {forwardingScore: 508, isForwarded: true}})}		

        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
        function monospace(string) {
        return '```' + string + '```'}   
        function jsonformat(string) {
        return JSON.stringify(string, null, 2)}
        function randomNomor(angka){
        return Math.floor(Math.random() * angka) + 1}
        
        const sendMess = (hehe, teks) => {
        dha.sendMessage(hehe, teks, text)}
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? dha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })}
 		
        const sendText = (from, text) => {
        dha.sendMessage(from, text, MessageType.text)}
        
        const textImg = (teks) => {
        return dha.sendMessage(from, teks, text, {quoted: mek})}
        
        const math = (teks) => {
        return Math.floor(teks)}
       
        const kick = function(from, orangnya){
	    for (let i of orangnya){
	    dha.groupRemove(from, [i])}}
        
        const daftar1 = `Hai kak  *${pushname}* ${tampilUcapan}\nSebelum Mengakses Fitur *${command}* Dan Fitur Lainnya Alangkah Baiknya Kakak Daftar Dulu`
        const daftar2 = `${petik}Ketik Tombol Di Bawah Untuk Verify\nBagi User Wa Mod Ketik ${prefix}verify${petik}`
        const daftar3 = [{buttonId: `#verify`,buttonText: {displayText: `𝘋𝘢𝘧𝘵𝘢𝘳 シ︎`,},type: 1,},]
         
        const kickMember = async(id, target = []) => {
        let group = await dha.groupMetadata(id)
        let owner = group.owner.replace("c.us", "s.whatsapp.net")
        let me = dha.user.jid
        for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
        await dha.groupRemove(to, [i])
        } else {
        await dha.sendMessage(id, "Not Premited!", "conversation")
        break}}}

        const add = function(from, orangnya){
	    dha.groupAdd(from, orangnya)}

        const sendKontak = (from, nomor, nama, org = "") => {
	    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	    dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})}

        const hideTag = async function(from, text){
	    let anu = await dha.groupMetadata(from)
	    let members = anu.participants
	    let ane = []
	    for (let i of members){
	    ane.push(i.jid)}
	    dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})}  

        const katalog = (teks) => {
        res = dha.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 2021, "message": teks, "footerText": "*BY YERIKO*", "thumbnail":fs.readFileSync(`./media/canss.jpg`), "surface": 'CATALOG' }}, {quoted:mek})
        dha.relayWAMessage(res)}
        
        const sendWebp = async(from, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)})}
        download(url, './temp' + names + '.png', async function () {
        console.log('selesai');
        let ajg = './temp' + names + '.png'
        let palak = './temp' + names + '.webp'
        exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
        let media = fs.readFileSync(palak)
        dha.sendMessage(from, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(ajg)
        fs.unlinkSync(palak)})})}
        
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if (mids.length > 0){text = normalizeMention(to, text, mids)}
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)})}
        download(url, filename, async function () {
        console.log('SUCCES');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if (mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif}
        if (mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio}
        dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
        fs.unlinkSync(filename)})}

        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
	    dha.sendMessage(from, hasil, type, options).catch(e => {
	    fetch(link).then((hasil) => {
	    dha.sendMessage(from, hasil, type, options).catch(e => {
	    dha.sendMessage(from, { url : link }, type, options).catch(e => {
	    reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	    console.log(e)})})})})}

        const promoteAdmin = async function(to, target=[]){
        if(!target.length > 0) { return  reply("No target..") }
        let g = await dha.groupMetadata(to)
        let owner = g.owner.replace("c.us","s.whatsapp.net")
        let me = dha.user.jid
        for (i of target){
        if (!i.includes(me) && !i.includes(owner)){
        const res = await dha.groupMakeAdmin(to, [i])
        reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)}}}

        const demoteAdmin = async function(to, target=[]){
        if(!target.length > 0) { return  reply("No target..") }
        let g = await dha.groupMetadata(to)
        let owner = g.owner.replace("c.us","s.whatsapp.net")
        let me = dha.user.jid
        for (i of target){
        if (!i.includes(me) && !i.includes(owner)){
        const res = await dha.groupDemoteAdmin(to, [i])
        reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)}}}
        
        let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
        if (authorname != undefined) { } else { authorname = groupName }	
        function addMetadata(packname, author) {	
        if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
        let name = `${author}_${packname}`
        if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
        const json = {	
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,}
        const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
        const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
        let len = JSON.stringify(json).length	
        let last	
        if (len > 256) {	
        len = len - 256	
        bytes.unshift(0x01)	
        } else {	
        bytes.unshift(0x00)}	
        if (len < 16) {	
        last = len.toString(16)	
        last = "0" + len	
        } else {	
        last = len.toString(16)}	
        const buf2 = Buffer.from(last, "hex")	
	    const buf3 = Buffer.from(bytes)	
   	    const buf4 = Buffer.from(JSON.stringify(json))	
	    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	    fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	    return `./sticker/${name}.exif`})}
        // ==== BUTTOND MESSAGE
	    ///Button Text
	    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
	    const buttonMessage = {
	    contentText: text1,
	    footerText: desc1,
	    buttons: but,
	    headerType: 1
	    }
	    dha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
	    }
	    ///Button Images
	    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
	    kma = gam1
	    mhan = await dha.prepareMessage(from, kma, image)
	    const buttonMessages = {
	    imageMessage: mhan.message.imageMessage,
	    contentText: text1,
	    footerText: desc1,
	    buttons: but,
	    headerType: 4
	    }
	    dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	    }
	    ///Button Video
	    const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
	    kma = vid1
	    mhan = await dha.prepareMessage(from, kma, video)
	    const buttonMessages = {
	    videoMessage: mhan.message.videoMessage,
	    contentText: text1,
	    footerText: desc1,
	    buttons: but,
	    headerType: 5
	    }
	    dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	    }
	    ///Button Location
	    const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
	    kma = gam1
	    mhan = await dha.prepareMessage(from, kma, location)
	    const buttonMessages = {
	    locationMessage: mhan.message.locationMessage,
	    contentText: text1,
	    footerText: desc1,
	    buttons: but,
	    headerType: 6
	    }
	    dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	    }
	    /// BY PEMUDA TEKNOLOGI TQ YA:v
	    const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
	    media = file1
	    kma = doc1
	    mhan = await dha.prepareMessage(from, media, document, kma)
	    const buttonMessages = {
	    documentMessage: mhan.message.documentMessage,
	    contentText: text1,
	    footerText: desc1,
	    buttons: but,
	    headerType: "DOCUMENT"
	    }
	    dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	    }
        // MODE
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return}
		
		// Auto Read Group 
		var chats = await dha.chats.array.filter(v => v.jid.endsWith('g.us'))
		chats.map( async ({ jid }) => {
		if (readGc === false) return
		await dha.chatRead(jid)
		})
		// Auto Read Private 
		var chatss = await dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		chatss.map( async ({ jid }) => {
		if (readPc === false) return
		await dha.chatRead(jid)
		})
		
        //Auto Vn+Ktk
        if (autovn) {
	    if (autovn === false) return
        await dha.updatePresence(from, Presence.recording)
        } else if (autoketik) {
	    if (autoketik === false) return
        await dha.updatePresence(from, Presence.composing)}

        antical = true
        dha.on("CB:Call", json => {
        if (antical === false) return
        let call        
        calling = JSON.parse(JSON.stringify(json))
        call = calling[1].from
        dha.sendMessage(call, `*Sorry can't receive calls.*\n*Call = Block!*`, MessageType.text)
        .then(() => dha.blockUser(call, "add"))
        })
        
        // GG

        const replyfakelink = (teks) => {
        dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
        "forwardingScore": 1000000000,
        isForwarded: false,
        sendEphemeral: false,
        "externalAdReply": {
        "title": `Bot By ${NamaOwner}`,
        "body": "",
        "previewType": "PHOTO",
        "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
        "thumbnail": fake,
        "sourceUrl": ``
        },mentionedJid:[sender]}, quoted : mek})
        }
        const replywa = (teks) => {
        dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
        "forwardingScore": 1000000000,
        isForwarded: false,
        sendEphemeral: false,
        "externalAdReply": {
        "title": `${NamaBot}`,
        "body": `${FakePdf}`,
        "mediaType": "10",
        "mediaUrl": `${GrubBot}`,
        "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
        "thumbnail": fake,
        "sourceUrl": `${GrubBot}`,
        },mentionedJid:[sender]}, quoted : mek})
        }
        const fakeyt = (teks) => {
        dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
        "forwardingScore": 1000000000,
        isForwarded: false,
        sendEphemeral: false,
        "externalAdReply": {
        "title": `${FakeYt}` ,
        "body": `${FakeYt}`,
        "mediaType": "2",
        "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
        "mediaUrl": "https://youtu.be/uygjD8rqVLE",
        "thumbnail": fs.readFileSync('./media/canss.jpg'),
        "sourceUrl": "",
        },mentionedJid:[sender]}, quoted : mek})
        }
        
        // WARNA

        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		/////// ANTI LINK:)
        if (budy.includes("https://chat.whatsapp.com/")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return reply ('Admin Mah Bebas')
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(` *「 GROUP LINK DETECTOR 」*\nAwokawok Ngemis Member Gc😍\nByee ${sender.split("@")[0]}`)
        setTimeout(() => {
        dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
        }, 3000)
	    }
        // ANTI VRTX
        if (isGroup && isAntiVirtex && !mek.key.fromMe) {
        if (budy.length > 10000) {
        if (isGroupAdmins) return reply('Admin Mah Bebas Bwang:v')
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK")
        dha.groupRemove(from, sender);
        }}
        // VERIFY CODE
     
        //// CHAT
       const getpc = async function(totalchat){
       let pc = []
       let a = []
       let b = []
       for (c of totalchat){
       a.push(c.jid)}
       for (d of a){
       if (d && !d.includes('g.us')){
       b.push(d)}}
       return b
       }

      const getGroup = async function(totalchat){
      let grup = []
      let a = []
      let b = []
      for (c of totalchat){
      a.push(c.jid)
      }
      for (d of a){
      if (d && d.includes('g.us')){
      b.push(d)
      }
      }
      for (e of b){
      let ingfo = await dha.groupMetadata(e)
      grup.push(ingfo)
      }
      return grup
      } 
 
      const getWin = (userId) => {
      let position = false
      Object.keys(_win).forEach((i) => {
      if (_win[i].jid === userId) {position = i}})
      if (position !== false) {
      return _win[position].win
      }}
      
      // AUTO RESPON TEXT NAMA STORAGE MU
      for (let anji of setik){
      if (budy === anji){
      result = fs.readFileSync(`./temp/sticker/${anji}.webp`)
      dha.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})}}
      
	  for (let anju of vien){
      if (budy === anju){
      result = fs.readFileSync(`./temp/vn/${anju}.mp3`)
      dha.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})}}
      
	  for (let anjh of imagi){
      if (budy === anjh){
      result = fs.readFileSync(`./temp/image/${anjh}.jpg`)
      dha.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})}}
       
	  let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      await dha.setStatus(`Mode Bot Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
       }
      
      //AUTO RESPON
      stod = `${sender}`
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      dha.sendMessage(from, commandsDB[i].balasan, text, {sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 600, isForwarded: true, mentionedJid : [stod]}})}}
     
       // AFK
	  if (isGroup) {
	  if (!mek.key.fromMe && mek.key.fromMe) return
	  for (let x of mentionUser) {
	  if (afk.checkAfkUser(x, _afk)) {
      const getId = afk.getAfkId(x, _afk)
	  const getReason = afk.getAfkReason(getId, _afk)
	  const getTime = afk.getAfkTime(getId, _afk)
	  const cptl = `Ssst Ganggu Aja Dia Lagi ${getReason} Sejak ${getTime}`
      mentions(cptl, x, true)}}
      
      if (afk.checkAfkUser(sender, _afk) && !isCmd) {
	  const getTime = afk.getAfkTime(sender, _afk)
	  const getReason = afk.getAfkReason(sender, _afk)
      const ittung = ms(await Date.now() - getTime)
	  const pep = `*${pushname}* Telah Kembali Online`
	  reply(pep)
	  _afk.splice(afk.getAfkPosition(sender, _afk), 1)
	  fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))}}
	  
	  // GAMEE WIN
	  if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      kuis = true
      const money = Math.ceil(Math.random() * 1000)		
      addBalance(sender, money, balance)
      jawaban = tebakgambar[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await reply(`*_🎮 Tebak Gambar  🎮_*\n*•* *Jawaban Benar🎉*\n\n🎁 *Hadiah* 🎁\n💸Koin : ${money}\nIngin bermain lagi? kirim\n*${prefix}tebakgambar*`)
      delete tebakgambar[sender.split('@')[0]]
      fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))}}
      
      if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      kuis = true
      const money = Math.ceil(Math.random() * 1000)		
      addBalance(sender, money, balance)
      jawaban = caklontong[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await reply(`*_🎮 Cak Lontong 🎮_*\n*•* *Jawaban Benar🎉*\n\n🎁 *Hadiah* 🎁\n💸Koin : ${money}\nIngin bermain lagi? kirim\n*${prefix}caklontong*`)
      delete caklontong[sender.split('@')[0]]
      fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))}}

        	        //function leveling
            if (isRpg) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = monospace(`╭───「 Level Up 」
│
├ • 👤Nama : ${pushname}
├ • 📊Rank : ${role}
├ • 📛Status : ${elit}
├ • 🥇Xp : ${getLevelingXp(sender)}
├ • 🥈Level : ${getLevelingLevel(sender)}
│
╰───「 ${NamaBot} 」`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, lvlup, 'Level Up', but)

                }
            } catch (err) {
                console.error(err)
            }
        }        
    
      // CLOCK
	  function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":")}

      // CONSOLE LOG CMD
      if (isCmd && !isGroup)	      
      console.log(color('[ PC ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname))        
      if (isCmd && isGroup)
      console.log(color('[ GC ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
      
      // START CASE          
      switch(command){
          case 'joinrpg':
        //  if (!isGroup) return reply(mess.only.group)  
		  if (isRpg) return reply('Kamu sudah menjadi petualang')
	   	  _petualang.push(sender)
		  fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_petualang))
		  capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}rpgmenu`
		  dha.sendMessage(from, capt, text, {quoted: mek})		
		  addInventori(sender)
	      addLevelingId(sender)
		  break
case 'verify': case 'daftar':
if (isRegister) return reply('Lu Dh Dftr Ffk')
addRegisteredUser(sender)
try {
ppimg = await dha.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ppimg2 = await getBuffer(ppimg)
capti =`┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* ${sender.split('@')[0]}
││◦➛ *SN :* ${createSerial(19)}
││◦➛ *Total Pengguna :* ${_register.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│└────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Tanggal :* ${tampilTanggal}
│ *Jam :* ${wib} Wib
├───────────────
│ *Silahkan Ketik ${prefix}menu*
│ *Untuk Melanjutkan*
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ${NamaBot} 」*`
sendButImage(from, capti, `${kotak} © ${NamaOwner}`, ppimg2, [{buttonId: `${prefix}menu`,buttonText: {displayText: `🌚LIST MENU ️`,},type: 1,},{buttonId: `${prefix}owner`,buttonText: {displayText: `👤OWNER BOT`,},type: 1,},])
limitAdd(sender, _limit)
break
case 'menu': case 'help': case 'allmenu': case 'command':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await dha.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
stst = await dha.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status       
anunya = fs.readFileSync("./temp/musik.mp3")
ptod = `${NOwner}`
utod = `${botNumber}`
stod = `${sender}`
allmenuuu =`
${tampilUcapan} *${pushname}*  



${atas} 
${bates} 🌹 _Bot & Owner Info_ 
${garis}
${garis} *🤖Nama Bot* : ${NamaBot}
${garis} *👤Owner* : ${NamaOwner}
${garis} *🟢Tag Owner* : @${ptod.split('@')[0]}
${garis} *🔵Tag Bot* : @${utod.split('@')[0]}
${garis} *🪀Total Pc* : ${privat.length}
${garis} *🪀Total Gc* : ${groups.length}
${garis} *🪀Total Chat* : ${totalchat.length}
${garis} *🎯Total Hit* : ${totalhit}
${garis} *🚀Speed* : ${latensie.toFixed(4)} _sec_
${garis} *⏳Runtime* : ${runtime(process.uptime())}
${garis} *⚠️Mode* : ${publik ? 'Public✔️' : 'Self✔️'}
${garis} *🔋Baterai* : ${baterai}
${garis} *🔋Cas* : ${charger}
${garis} *🥇Wa Version* : ${dha.user.phone.wa_version}
${garis} *🥈Hostname* : ${os.hostname()}
${garis} *🥉Platform* : ${os.platform()}
${garis}
${bates} 👤 _User Info_
${garis}
${garis} *📛Nama* : ${pushname}
${garis} *🔢Nomor* : wa.me/${stod.split('@')[0]}
${garis} *#️⃣Tag* : @${stod.split('@')[0]}
${garis} *🎥Bio* : ${stst}
${garis} *🪙Koin* : ${(getBalance(sender, balance))}💰
${garis} *🌚User Type* : ${isOwner ? 'OwnerBot' : 'Free'}
${garis} *✔️Terdaftar* : ${isRegister ? 'Terdaftar' : 'Belum Daftar'}
${garis} *🏇Petualang* : ${isRpg ? 'Joined' : 'Not Joined'}
${garis}
${bates} 🗓️ _Today Info_
${garis}
${garis} *📆Tanggal* : ${tampilTanggal} 
${garis} *🕐Wib* : ${wib} 
${garis} *🕑Wit* : ${wit}
${garis} *🕒Wita* : ${wita}
${garis}
${bawah}  
${atas}
${bates} 🌹 _Big Thanks To_
${garis}
${garis} *Tuhan Ku* 
${garis} *Orang Tua Ku*  
${garis} *Bailyes*
${garis} *Heroku* [ WEB RUN BOT ]
${garis} *Yudha* [ BASE NYA ]
${garis} *DhaniGans* [ REST API ]
${garis} *Febzabotz* [ RPG ]
${garis} *Nayla* [ TQ CASE NYA ]
${garis} *Zeeone Ofc* [ TQ CASE NYA ] 
${garis} *Dapuhy* [ REST API ]
${garis} *Rey* [ REST API ]
${garis} *Zeks* [ REST API ]
${garis} *Yeriko* [ PEMBUAT BOT ]
${garis} *${NamaOwner}* [ PENGEMBANG BOT ]
${bawah}   
`
sendButLocation(from, allmenuuu, `${atas}
${bates} *ADMIN MENU* 🤴
${garis}
${garis + kotak} ${prefix}antilink < on/off >
${garis + kotak} ${prefix}kickall
${garis + kotak} ${prefix}promote < @tag >
${garis + kotak} ${prefix}demote < @tag >
${garis + kotak} ${prefix}listonline
${garis + kotak} ${prefix}tagall *teks*
${garis + kotak} ${prefix}leave
${garis + kotak} ${prefix}kick *reply*
${garis + kotak} ${prefix}add *+62xxxxxx*
${garis + kotak} ${prefix}setnamegc
${garis + kotak} ${prefix}setppgc
${garis + kotak} ${prefix}setdeskgc
${garis + kotak} ${prefix}sider *reply chat bot*
${garis + kotak} ${prefix}hidetag *teks/reply teks*
${garis + kotak} ${prefix}linkgc
${garis + kotak} ${prefix}closetime
${garis + kotak} ${prefix}opentime
${garis}
${bawah}

${atas}
${bates} *OWNER MENU* 👑
${garis}
${garis + kotak} ${prefix}self
${garis + kotak} ${prefix}public
${garis + kotak} ${prefix}autoread
${garis + kotak} ${prefix}autovn
${garis + kotak} ${prefix}autoketik
${garis + kotak} ${prefix}bcnowm
${garis + kotak} ${prefix}bc
${garis + kotak} ${prefix}bc2
${garis + kotak} ${prefix}bcgc
${garis + kotak} ${prefix}bcgc2
${garis + kotak} ${prefix}join < link >
${garis + kotak} ${prefix}leaveall
${garis + kotak} ${prefix}restart
${garis + kotak} ${prefix}start
${garis + kotak} ${prefix}shutdown
${garis + kotak} ${prefix}clearall
${garis + kotak} ${prefix}setcmd
${garis + kotak} ${prefix}delcmd
${garis + kotak} ${prefix}premium add/del
${garis + kotak} ${prefix}addrespon < key|balasan >
${garis + kotak} ${prefix}delrespon < key >
${garis + kotak} ${prefix}term
${garis}
${bawah}

${atas}
${bates} *STAY HALAL* 💯
${garis}
${garis + kotak} ${prefix}kisahnabi < nama nabi >
${garis + kotak} ${prefix}asmaulhusna
${garis + kotak} ${prefix}doaharian
${garis + kotak} ${prefix}niatshalat
${garis + kotak} ${prefix}randomquran
${garis}
${bawah}

${atas}
${bates} *DOWNLOAD MENU* 📥
${garis}
${garis + kotak} ${prefix}play < query >
${garis + kotak} ${prefix}playmp4 < query >
${garis + kotak} ${prefix}playmp3 < query >
${garis + kotak} ${prefix}ytmp3 < Link >
${garis + kotak} ${prefix}ytmp4 < Link >
${garis + kotak} ${prefix}mediafire < Link >
${garis + kotak} ${prefix}ttnowm < link >
${garis + kotak} ${prefix}ttwm < link >
${garis + kotak} ${prefix}igdl < link >
${garis}
${bawah}

${atas}
${bates} *SEARCHING MENU* 🔎
${garis}
${garis + kotak} ${prefix}herolist
${garis + kotak} ${prefix}herodetail < nama hero >
${garis + kotak} ${prefix}pinterest < Query >
${garis + kotak} ${prefix}playstore < nama apk >
${garis + kotak} ${prefix}gsmarena < Merk Hp >
${garis + kotak} ${prefix}linkwa < nama gc >
${garis + kotak} ${prefix}lirik < judul lagu >
${garis + kotak} ${prefix}wikipedia < query >
${garis + kotak} ${prefix}kbbi < query >
${garis + kotak} ${prefix}kodepos < nama kota >
${garis + kotak} ${prefix}sfile < query >
${garis + kotak} ${prefix}ytsearch < judul >
${garis}
${bawah}

${atas}
${bates} *FILM MENU* 🎞️
${garis}
${garis + kotak} ${prefix}searchkartun < Judul >
${garis + kotak} ${prefix}bioskopkeren < Judul >
${garis + kotak} ${prefix}sobatnonton < Judul >
${garis + kotak} ${prefix}comingsoon
${garis + kotak} ${prefix}jadwalbioskop
${garis}
${bawah}

${atas}
${bates} *TO MENU* 🔘
${garis}
${garis + kotak} ${prefix}img2url < Reply Foto >
${garis + kotak} ${prefix}tourl < Reply Foto >
${garis + kotak} ${prefix}tovideo < ReplyStikerGif >
${garis + kotak} ${prefix}toimg < ReplyStiker >
${garis + kotak} ${prefix}tomp3 < ReplyVideo >
${garis + kotak} ${prefix}emoji2png < Emoji >
${garis}
${bawah}

${atas}
${bates} *MUSIC EDIT* 🎶
${garis}
${garis + kotak} ${prefix}bass < ReplyAudio/Vn >
${garis + kotak} ${prefix}balik < ReplyAudio/Vn >
${garis + kotak} ${prefix}gemuk < ReplyAudio/Vn >
${garis + kotak} ${prefix}robot < ReplyAudio/Vn >
${garis}
${bawah}

${atas}
${bates} *MAKER MENU* 🖼️
${garis}
${garis + kotak} ${prefix}blackpink _Teks_
${garis + kotak} ${prefix}halloween _Teks_
${garis + kotak} ${prefix}halloween2 _Teks_
${garis + kotak} ${prefix}3dgradient _Teks_
${garis + kotak} ${prefix}naturalleaves _Teks_
${garis + kotak} ${prefix}dropwater _Teks_
${garis + kotak} ${prefix}blood _Teks_
${garis + kotak} ${prefix}blood2 _Teks_
${garis + kotak} ${prefix}snow _Teks_
${garis + kotak} ${prefix}cloud _Teks_
${garis + kotak} ${prefix}neondevil _Teks_
${garis + kotak} ${prefix}neon _Teks_
${garis + kotak} ${prefix}glowingneonlight _Teks_
${garis + kotak} ${prefix}neonlightglitch _Teks_
${garis + kotak} ${prefix}neonlightonbrickwall _Teks_
${garis + kotak} ${prefix}neonlight _Teks_
${garis + kotak} ${prefix}neonlight2 _Teks_
${garis + kotak} ${prefix}neonlight3 _Teks_
${garis + kotak} ${prefix}greenneon _Teks_
${garis + kotak} ${prefix}toxic _Teks_
${garis + kotak} ${prefix}matrix _Teks_
${garis + kotak} ${prefix}thunder _Teks_
${garis + kotak} ${prefix}thunder2 _Teks_
${garis + kotak} ${prefix}bokeh _Teks_
${garis + kotak} ${prefix}carbontext _Teks_
${garis + kotak} ${prefix}christmas _Teks_
${garis + kotak} ${prefix}breakwall _Teks_
${garis + kotak} ${prefix}roadwarning _Teks_
${garis + kotak} ${prefix}engraved3d _Teks_
${garis + kotak} ${prefix}embossed _Teks_
${garis + kotak} ${prefix}3dstone _Teks_
${garis + kotak} ${prefix}futuristic _Teks_
${garis + kotak} ${prefix}sketch _Teks_
${garis + kotak} ${prefix}bluecircuit _Teks_
${garis + kotak} ${prefix}space _Teks_
${garis + kotak} ${prefix}magmahot _Teks_
${garis + kotak} ${prefix}artpapercut _Teks_
${garis + kotak} ${prefix}3dluxurygold _Teks_
${garis + kotak} ${prefix}robotr2d2 _Teks_
${garis + kotak} ${prefix}harrypotter _Teks_
${garis + kotak} ${prefix}glitch3 _Teks_
${garis + kotak} ${prefix}greenhorror _Teks_
${garis + kotak} ${prefix}horrorgift _Teks_
${garis + kotak} ${prefix}erodedmetal _Teks_
${garis + kotak} ${prefix}3dglowingmetal _Teks_
${garis + kotak} ${prefix}blackmetal _Teks_
${garis + kotak} ${prefix}bluemetal _Teks_
${garis + kotak} ${prefix}shynimetal _Teks_
${garis + kotak} ${prefix}rustymetal _Teks_
${garis + kotak} ${prefix}metalpurple _Teks_
${garis + kotak} ${prefix}metalrainbow _Teks_
${garis + kotak} ${prefix}metaldarkgold _Teks_
${garis + kotak} ${prefix}colorfullluxurymetal _Teks_
${garis + kotak} ${prefix}glossybluemetal _Teks_
${garis + kotak} ${prefix}3dglossymetal _Teks_
${garis + kotak} ${prefix}3ddeepseametal _Teks_
${garis + kotak} ${prefix}leddisplayscreen _Teks_
${garis + kotak} ${prefix}metallic _Teks_
${garis + kotak} ${prefix}glossymetallic _Teks_
${garis + kotak} ${prefix}christmastree _Teks_
${garis + kotak} ${prefix}sparklesmerrychristmas _Teks_
${garis + kotak} ${prefix}countryflag3d _Teks_
${garis + kotak} ${prefix}americanflag3d _Teks_
${garis + kotak} ${prefix}3dscfi _Teks_
${garis + kotak} ${prefix}3drainbow _Teks_
${garis + kotak} ${prefix}3dwaterpipe _Teks_
${garis + kotak} ${prefix}3dchrome _Teks_
${garis + kotak} ${prefix}bluegem _Teks_
${garis + kotak} ${prefix}purplegem _Teks_
${garis + kotak} ${prefix}pinkcandy _Teks_
${garis + kotak} ${prefix}transformer _Teks_
${garis + kotak} ${prefix}berry _Teks_
${garis + kotak} ${prefix}brokenglass _Teks_
${garis + kotak} ${prefix}3drealistic _Teks_
${garis + kotak} ${prefix}3dunderwater _Teks_
${garis + kotak} ${prefix}writeinsandsummerbeach _Teks_
${garis + kotak} ${prefix}sandwriting _Teks_
${garis + kotak} ${prefix}foilballoon _Teks_
${garis + kotak} ${prefix}3dglue _Teks_
${garis + kotak} ${prefix}1917 _Teks_
${garis + kotak} ${prefix}minion _Teks_
${garis + kotak} ${prefix}doubleexposure _Teks_
${garis + kotak} ${prefix}holographic3d _Teks_
${garis + kotak} ${prefix}deluxegold _Teks_
${garis + kotak} ${prefix}deluxesilver _Teks_
${garis + kotak} ${prefix}glossycarbon _Teks_
${garis + kotak} ${prefix}fabric _Teks_
${garis + kotak} ${prefix}xmascards3d _Teks_
${garis + kotak} ${prefix}wicker _Teks_
${garis + kotak} ${prefix}fireworksparkle _Teks_
${garis + kotak} ${prefix}skeleton _Teks_
${garis + kotak} ${prefix}ultragloss _Teks_
${garis + kotak} ${prefix}denim _Teks_
${garis + kotak} ${prefix}decorategreen _Teks_
${garis + kotak} ${prefix}peridot _Teks_
${garis + kotak} ${prefix}rock _Teks_
${garis + kotak} ${prefix}lava _Teks_
${garis + kotak} ${prefix}rainbowequalizer _Teks_
${garis + kotak} ${prefix}purpleglass _Teks_
${garis + kotak} ${prefix}decorativeglass _Teks_
${garis + kotak} ${prefix}chocolatecake _Teks_
${garis + kotak} ${prefix}strawberry _Teks_
${garis + kotak} ${prefix}koifish _Teks_
${garis + kotak} ${prefix}bread _Teks_
${garis + kotak} ${prefix}3dbox _Teks_
${garis + kotak} ${prefix}freeadvancedglow _Teks_
${garis + kotak} ${prefix}honey _Teks_
${garis + kotak} ${prefix}marble _Teks_
${garis + kotak} ${prefix}marbleslabs _Teks_
${garis + kotak} ${prefix}icecold _Teks_
${garis + kotak} ${prefix}fruitjuice _Teks_
${garis + kotak} ${prefix}abstragold _Teks_
${garis + kotak} ${prefix}biscuit _Teks_
${garis + kotak} ${prefix}bagel _Teks_
${garis + kotak} ${prefix}wood _Teks_
${garis + kotak} ${prefix}hexagolden _Teks_
${garis + kotak} ${prefix}wonderfulgraffitiart _Teks_
${garis + kotak} ${prefix}8bit _Teks1&Teks2_
${garis + kotak} ${prefix}pornhub _Teks1&Teks2_
${garis + kotak} ${prefix}glitch _Teks1&Teks2_
${garis + kotak} ${prefix}glitch2 _Teks1&Teks2_
${garis + kotak} ${prefix}layered _Teks1&Teks2_
${garis + kotak} ${prefix}3dsteel _Teks1&Teks2_
${garis + kotak} ${prefix}realistic _Teks1&Teks2_
${garis + kotak} ${prefix}lionlogo _Teks1&Teks2_
${garis + kotak} ${prefix}ninjalogo _Teks1&Teks2_
${garis + kotak} ${prefix}wolf _Teks1&Teks2_
${garis + kotak} ${prefix}wolf2 _Teks1&Teks2_
${garis + kotak} ${prefix}halloween3 _Teks1&Teks2_
${garis + kotak} ${prefix}marvel _Teks1&Teks2_
${garis + kotak} ${prefix}marvel2 _Teks1&Teks2_
${garis + kotak} ${prefix}cinematichorror _Teks1&Teks2_
${garis + kotak} ${prefix}avengers _Teks1&Teks2_
${garis + kotak} ${prefix}graffiti3 _Teks1&Teks2_
${garis + kotak} ${prefix}captainamerica _Teks1&Teks2_
${garis + kotak} ${prefix}girlneko _Teks1&Teks2_
${garis + kotak} ${prefix}sadboy _Teks1&Teks2_
${garis + kotak} ${prefix}makerkaneki _Teks1&Teks2_
${garis + kotak} ${prefix}rem _Teks1&Teks2_
${garis + kotak} ${prefix}lolimaker _Teks1&Teks2_
${garis + kotak} ${prefix}gura _Teks1&Teks2_
${garis}
${bawah}

${atas}
${bates} *NSFW MENU* 🔐
${garis}
${garis + kotak} ${prefix}ass
${garis + kotak} ${prefix}ahegao
${garis + kotak} ${prefix}bdsm
${garis + kotak} ${prefix}blowjob
${garis + kotak} ${prefix}cuckold
${garis + kotak} ${prefix}cum
${garis + kotak} ${prefix}ero
${garis + kotak} ${prefix}femdom
${garis + kotak} ${prefix}foot
${garis + kotak} ${prefix}gangbang
${garis + kotak} ${prefix}galsses
${garis + kotak} ${prefix}hentai
${garis + kotak} ${prefix}jahy
${garis + kotak} ${prefix}masturbation
${garis + kotak} ${prefix}neko
${garis + kotak} ${prefix}orgy
${garis + kotak} ${prefix}panties
${garis + kotak} ${prefix}pussy
${garis + kotak} ${prefix}thighs
${garis + kotak} ${prefix}yuri
${bawah}

${atas}
${bates} *ASUPAN MENU* 🗿
${garis}
${garis + kotak} ${prefix}vietnam
${garis + kotak} ${prefix}malaysia
${garis + kotak} ${prefix}korea
${garis + kotak} ${prefix}japan
${garis + kotak} ${prefix}indonesia
${garis + kotak} ${prefix}thailand
${garis + kotak} ${prefix}china
${garis + kotak} ${prefix}hijaber
${garis + kotak} ${prefix}santuy
${garis + kotak} ${prefix}ukhti
${garis + kotak} ${prefix}bocil
${garis + kotak} ${prefix}ghea
${garis + kotak} ${prefix}rika
${garis}
${bawah}

${atas}
${bates} *RANDOM FOTO* 🖼️
${garis}
${bates} *WALLPAPER*
${garis}
${garis + kotak} ${prefix}trans
${garis + kotak} ${prefix}jeni
${garis + kotak} ${prefix}jiso
${garis + kotak} ${prefix}cecan2
${garis + kotak} ${prefix}cogan2
${garis + kotak} ${prefix}satanic
${garis + kotak} ${prefix}katakata
${garis + kotak} ${prefix}pentol
${garis + kotak} ${prefix}kartun
${garis + kotak} ${prefix}tatasurya
${garis + kotak} ${prefix}cyberspace
${garis + kotak} ${prefix}gaming
${garis + kotak} ${prefix}islami
${garis + kotak} ${prefix}programing
${garis + kotak} ${prefix}teknologi
${garis + kotak} ${prefix}mountain
${garis + kotak} ${prefix}anime
${garis + kotak} ${prefix}wallhp
${garis + kotak} ${prefix}wallpaperhacker
${garis + kotak} ${prefix}wallpaperhacker2
${garis + kotak} ${prefix}wallpaperharley
${garis + kotak} ${prefix}wallpaperjoker
${garis + kotak} ${prefix}wallpaperpubg
${garis + kotak} ${prefix}wallpaperhp
${garis + kotak} ${prefix}wallpaperhp2
${garis + kotak} ${prefix}wallpaperkpop
${garis + kotak} ${prefix}wallpaperblackpink
${garis + kotak} ${prefix}wallpapergame
${garis}
${bates} *FOTO LAINNYA*
${garis}
${garis + kotak} ${prefix}darkjokes [ GELAP ]
${garis + kotak} ${prefix}ryujin
${garis + kotak} ${prefix}rose
${garis + kotak} ${prefix}justina
${garis + kotak} ${prefix}blackpink
${garis + kotak} ${prefix}doraemon
${garis + kotak} ${prefix}kpop
${garis + kotak} ${prefix}hekel
${garis + kotak} ${prefix}pubg
${garis + kotak} ${prefix}cecan
${garis + kotak} ${prefix}cogan
${garis + kotak} ${prefix}aesthetic
${garis + kotak} ${prefix}kucing
${garis + kotak} ${prefix}anjing
${garis}
${bawah}

${atas}
${bates} *RANDOM VIDEO* 🎥
${garis}
${garis + kotak} ${prefix}beatvn
${garis + kotak} ${prefix}jedagjedugff
${garis + kotak} ${prefix}jedagjedugml
${garis + kotak} ${prefix}jedagjedugpubg
${garis + kotak} ${prefix}storyanime
${garis + kotak} ${prefix}storywa
${garis + kotak} ${prefix}storygalau
${garis + kotak} ${prefix}storytruk
${garis + kotak} ${prefix}storybus
${garis}
${bawah}

${atas}
${garis}
${bates} *ANIME MENU* 🌚
${garis}
${garis + kotak} ${prefix}akira
${garis + kotak} ${prefix}akiyama
${garis + kotak} ${prefix}waifu2
${garis + kotak} ${prefix}onepiece
${garis + kotak} ${prefix}rize
${garis + kotak} ${prefix}tsunade
${garis + kotak} ${prefix}shota
${garis + kotak} ${prefix}elaina
${garis + kotak} ${prefix}waifu
${garis + kotak} ${prefix}hestia
${garis + kotak} ${prefix}mikasa
${garis + kotak} ${prefix}boruto
${garis + kotak} ${prefix}nezuko
${garis + kotak} ${prefix}doraemon
${garis + kotak} ${prefix}gremory
${garis + kotak} ${prefix}megumin
${garis + kotak} ${prefix}nekonime
${garis + kotak} ${prefix}akiyama
${garis + kotak} ${prefix}sakura
${garis + kotak} ${prefix}sagiri
${garis + kotak} ${prefix}shinka
${garis + kotak} ${prefix}isuzu
${garis + kotak} ${prefix}kurumi
${garis + kotak} ${prefix}itachi
${garis + kotak} ${prefix}emilia
${garis + kotak} ${prefix}kaori
${garis + kotak} ${prefix}asuna
${garis + kotak} ${prefix}naruto
${garis + kotak} ${prefix}sasuke
${garis + kotak} ${prefix}shizuka
${garis + kotak} ${prefix}kaga
${garis + kotak} ${prefix}akira
${garis + kotak} ${prefix}chitoge
${garis + kotak} ${prefix}madara
${garis + kotak} ${prefix}yuki
${garis + kotak} ${prefix}ayuzawa
${garis + kotak} ${prefix}ezra
${garis + kotak} ${prefix}minato
${garis + kotak} ${prefix}hinata
${garis + kotak} ${prefix}kagura
${garis + kotak} ${prefix}miku
${garis + kotak} ${prefix}kakasih
${garis + kotak} ${prefix}keneki
${garis + kotak} ${prefix}toukachan
${garis + kotak} ${prefix}kotori
${garis + kotak} ${prefix}inori
${garis + kotak} ${prefix}ana
${garis + kotak} ${prefix}shina
${garis + kotak} ${prefix}itori
${garis + kotak} ${prefix}deidara
${garis}
${bawah}

${atas}
${bates} *RANDOM TEXT* 🅰️
${garis}
${garis + kotak} ${prefix}pantun
${garis + kotak} ${prefix}puisi
${garis + kotak} ${prefix}faktaunik
${garis + kotak} ${prefix}katabijak
${garis + kotak} ${prefix}katailham
${garis + kotak} ${prefix}katasindiran
${garis + kotak} ${prefix}katabucin
${garis + kotak} ${prefix}katabucin2
${garis + kotak} ${prefix}kataml
${garis + kotak} ${prefix}katagalau
${garis + kotak} ${prefix}katagombal
${garis + kotak} ${prefix}quotes
${garis + kotak} ${prefix}quoteskanye
${garis + kotak} ${prefix}quotesislami
${garis + kotak} ${prefix}quotesanime
${garis + kotak} ${prefix}quotesdilan
${garis + kotak} ${prefix}quotesff
${garis + kotak} ${prefix}quotespubg
${garis + kotak} ${prefix}quoteshacker
${garis + kotak} ${prefix}truth
${garis + kotak} ${prefix}dare
${garis}
${bawah}

${atas}
${garis}
${bates} *SOUND MENU* 🎶
${garis}
${garis + kotak} ${prefix}sound1
${garis + kotak} ${prefix}sound2
${garis + kotak} ${prefix}sound3
${garis + kotak} ${prefix}sound4
${garis + kotak} ${prefix}sound5
${garis + kotak} ${prefix}sound6
${garis + kotak} ${prefix}sound7
${garis + kotak} ${prefix}sound8
${garis + kotak} ${prefix}sound9
${garis + kotak} ${prefix}sound10
${garis + kotak} ${prefix}sound11
${garis + kotak} ${prefix}sound12
${garis + kotak} ${prefix}sound13
${garis + kotak} ${prefix}sound14
${garis + kotak} ${prefix}sound15
${garis + kotak} ${prefix}sound16
${garis + kotak} ${prefix}sound17
${garis + kotak} ${prefix}sound18
${garis + kotak} ${prefix}sound19
${garis + kotak} ${prefix}sound20
${garis + kotak} ${prefix}sound21
${garis + kotak} ${prefix}sound22
${garis + kotak} ${prefix}sound23
${garis + kotak} ${prefix}sound24
${garis + kotak} ${prefix}sound25
${garis + kotak} ${prefix}sound26
${garis + kotak} ${prefix}sound27
${garis + kotak} ${prefix}sound28
${garis + kotak} ${prefix}sound29
${garis + kotak} ${prefix}sound30
${garis + kotak} ${prefix}sound31
${garis + kotak} ${prefix}sound32
${garis + kotak} ${prefix}sound33
${garis + kotak} ${prefix}sound34
${garis + kotak} ${prefix}sound35
${garis + kotak} ${prefix}sound36
${garis + kotak} ${prefix}sound37
${garis + kotak} ${prefix}sound38
${garis + kotak} ${prefix}sound39
${garis + kotak} ${prefix}sound40
${garis + kotak} ${prefix}sound41
${garis + kotak} ${prefix}sound42
${garis + kotak} ${prefix}sound43
${garis + kotak} ${prefix}sound44
${garis + kotak} ${prefix}sound45
${garis + kotak} ${prefix}sound46
${garis + kotak} ${prefix}sound47
${garis + kotak} ${prefix}sound48
${garis + kotak} ${prefix}sound49
${garis + kotak} ${prefix}sound50
${garis + kotak} ${prefix}sound51
${garis + kotak} ${prefix}sound52
${garis + kotak} ${prefix}sound53
${garis + kotak} ${prefix}sound54
${garis + kotak} ${prefix}sound56
${garis + kotak} ${prefix}sound57
${garis + kotak} ${prefix}sound58
${garis + kotak} ${prefix}sound59
${garis + kotak} ${prefix}sound60
${garis + kotak} ${prefix}sound61
${garis + kotak} ${prefix}sound62
${garis + kotak} ${prefix}sound63
${garis + kotak} ${prefix}sound64
${garis + kotak} ${prefix}sound65
${garis + kotak} ${prefix}sound66
${garis + kotak} ${prefix}sound67
${garis + kotak} ${prefix}sound68
${garis + kotak} ${prefix}sound69
${garis + kotak} ${prefix}sound70
${garis}
${bawah}

${atas}
${bates} *FUN MENU* 🎮
${garis}
${garis + kotak} ${prefix}fitnah < @tag|pesan|balasan bot >
${garis + kotak} ${prefix}fitnahpc < 62xx|pesan|balasan bot >
${garis + kotak} ${prefix}artinama < nama >
${garis + kotak} ${prefix}artimimpi < mimpi mu >
${garis + kotak} ${prefix}caklontong
${garis + kotak} ${prefix}tebakgambar
${garis + kotak} ${prefix}family100
${garis + kotak} ${prefix}tictactoe @tag lawan
${garis + kotak} ${prefix}gelud @tag lawan
${garis + kotak} ${prefix}delsesittt
${garis + kotak} ${prefix}delsesigelud
${garis}
${bawah}

${atas}
${bates} *RANDOM TAG MENU* 🎰
${garis}
${garis + kotak} ${prefix}ganteng
${garis + kotak} ${prefix}cantik
${garis + kotak} ${prefix}jelek
${garis + kotak} ${prefix}goblok
${garis + kotak} ${prefix}bego
${garis + kotak} ${prefix}pinter
${garis + kotak} ${prefix}jago
${garis + kotak} ${prefix}babi
${garis + kotak} ${prefix}beban
${garis + kotak} ${prefix}baik
${garis + kotak} ${prefix}jahat
${garis + kotak} ${prefix}anjing
${garis + kotak} ${prefix}monyet
${garis + kotak} ${prefix}haram
${garis + kotak} ${prefix}kontol
${garis + kotak} ${prefix}pakboy
${garis + kotak} ${prefix}pakgirl
${garis + kotak} ${prefix}sadboy
${garis + kotak} ${prefix}sadgirl
${garis + kotak} ${prefix}wibu
${garis + kotak} ${prefix}nolep
${garis + kotak} ${prefix}hebat
${garis}
${bawah}

${atas}
${bates} *V MENU* 👥
${garis}
${garis + kotak} ${prefix}vsadboy
${garis + kotak} ${prefix}vpakboy
${garis + kotak} ${prefix}vbaik
${garis + kotak} ${prefix}vjago
${garis + kotak} ${prefix}vjelek
${garis + kotak} ${prefix}vcantik
${garis + kotak} ${prefix}vpinter
${garis + kotak} ${prefix}vbeban
${garis + kotak} ${prefix}vkontol
${garis + kotak} ${prefix}vhebat
${garis + kotak} ${prefix}vwibu
${garis + kotak} ${prefix}vharam
${garis + kotak} ${prefix}vbabi
${garis + kotak} ${prefix}vbego
${garis + kotak} ${prefix}vganteng
${garis + kotak} ${prefix}vanjing
${garis + kotak} ${prefix}vmonyet
${garis + kotak} ${prefix}vsadgirl
${garis + kotak} ${prefix}vpakgirl
${garis + kotak} ${prefix}vjahat
${garis + kotak} ${prefix}vnolep
${garis + kotak} ${prefix}vgoblok
${garis}
${bawah}

${atas}
${bates} *X MENU* 👥
${garis}
${garis + kotak} ${prefix}xsadboy <@tag>
${garis + kotak} ${prefix}xpakboy <@tag>
${garis + kotak} ${prefix}xbaik <@tag>
${garis + kotak} ${prefix}xjago <@tag>
${garis + kotak} ${prefix}xjelek <@tag>
${garis + kotak} ${prefix}xcantik <@tag>
${garis + kotak} ${prefix}xpinter <@tag>
${garis + kotak} ${prefix}xbeban <@tag>
${garis + kotak} ${prefix}xkontol <@tag>
${garis + kotak} ${prefix}xhebat <@tag>
${garis + kotak} ${prefix}xwibu <@tag>
${garis + kotak} ${prefix}xharam <@tag>
${garis + kotak} ${prefix}xbabi <@tag>
${garis + kotak} ${prefix}xbego <@tag>
${garis + kotak} ${prefix}xganteng <@tag>
${garis + kotak} ${prefix}xanjing <@tag>
${garis + kotak} ${prefix}xmonyet <@tag>
${garis + kotak} ${prefix}xsadgirl <@tag>
${garis + kotak} ${prefix}xpakgirl <@tag>
${garis + kotak} ${prefix}xjahat <@tag>
${garis + kotak} ${prefix}xnolep <@tag>
${garis + kotak} ${prefix}xgoblok <@tag>
${garis}
${bawah}

${atas}
${bates} *Z MENU* 👥
${garis}
${garis + kotak} ${prefix}zsadboy
${garis + kotak} ${prefix}zpakboy
${garis + kotak} ${prefix}zbaik
${garis + kotak} ${prefix}zjago
${garis + kotak} ${prefix}zjelek
${garis + kotak} ${prefix}zcantik
${garis + kotak} ${prefix}zpinter
${garis + kotak} ${prefix}zbeban
${garis + kotak} ${prefix}zkontol
${garis + kotak} ${prefix}zhebat
${garis + kotak} ${prefix}zwibu
${garis + kotak} ${prefix}zharam
${garis + kotak} ${prefix}zbabi
${garis + kotak} ${prefix}zbego
${garis + kotak} ${prefix}zganteng
${garis + kotak} ${prefix}zanjing
${garis + kotak} ${prefix}zmonyet
${garis + kotak} ${prefix}zsadgirl
${garis + kotak} ${prefix}zpakgirl
${garis + kotak} ${prefix}zjahat
${garis + kotak} ${prefix}znolep
${garis + kotak} ${prefix}zgoblok
${garis}
${bawah}

${atas}
${bates} *CEK MENU* ✔️
${garis}
${garis + kotak} ${prefix}gantengcek
${garis + kotak} ${prefix}cantikcek
${garis + kotak} ${prefix}jelekcek
${garis + kotak} ${prefix}goblokcek
${garis + kotak} ${prefix}begocek
${garis + kotak} ${prefix}pintercek
${garis + kotak} ${prefix}jagocek
${garis + kotak} ${prefix}nolepcek
${garis + kotak} ${prefix}babicek
${garis + kotak} ${prefix}bebancek
${garis + kotak} ${prefix}baikcek
${garis + kotak} ${prefix}jahatcek
${garis + kotak} ${prefix}anjingcek
${garis + kotak} ${prefix}haramcek
${garis + kotak} ${prefix}kontolcek
${garis + kotak} ${prefix}pakboycek
${garis + kotak} ${prefix}pakgirlcek
${garis + kotak} ${prefix}sangecek
${garis + kotak} ${prefix}bapercek
${garis}
${bawah}

${atas}
${bates} *STICKER MENU* 📌
${garis}
${garis + kotak} ${prefix}pmeme < reply foto text1|text2 >
${garis + kotak} ${prefix}smeme < reply stiker text1|text2 >
${garis + kotak} ${prefix}sticker < ReplyFoto >
${garis + kotak} ${prefix}sgif < ReplyVideo >
${garis + kotak} ${prefix}take < author|pack name >
${garis + kotak} ${prefix}delwm
${garis + kotak} ${prefix}emoji2png < Emoji >
${garis}
${bawah}

${atas}
${bates} *STORAGE MENU* 🗃️
${garis}
${garis + kotak} ${prefix}addvn
${garis + kotak} ${prefix}addfoto
${garis + kotak} ${prefix}addsticker
${garis + kotak} ${prefix}delvn
${garis + kotak} ${prefix}delfoto
${garis + kotak} ${prefix}delsticker
${garis}
${bawah}

${atas}
${bates} *OTHER MENU* 🔓
${garis}
${garis + kotak} ${prefix}getbio < @tag > 
${garis + kotak} ${prefix}getdesk
${garis + kotak} ${prefix}getpic < @tag >
${garis + kotak} ${prefix}donasi
${garis + kotak} ${prefix}script
${garis + kotak} ${prefix}runtime
${garis + kotak} ${prefix}premiumcheck
${garis + kotak} ${prefix}listpremium
${garis + kotak} ${prefix}listrespon
${garis + kotak} ${prefix}speed
${garis + kotak} ${prefix}afk < alasan >
${garis + kotak} ${prefix}rules
${garis + kotak} ${prefix}snk
${garis}
${bawah}

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

`, {jpegThumbnail:fake}, [{buttonId:`${prefix}credit`,buttonText:{displayText:'©️ Credit︎'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤 Owner Bot︎'},type:1},{buttonId:`${prefix}sewabot`,buttonText:{displayText:'📖 Sewa Bot︎'},type:1}], {contextInfo: { mentionedJid: [ptod,utod,stod]}})
dha.sendMessage(from, anunya, audio, { mimetype: 'audio/mp4', quoted: ftroli})
limitAdd(sender, _limit)
break

case 'credit': case 'credits': case 'tqto':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
replywa(`[ *BIG THANKS* ]
${kotak} TUHAN YANG MAHA ESA
${kotak} Orang Tua Ku

[ *THANKS TO* ]
${kotak} *Yudha* [ Base Bot ]
- https://youtube.com/c/DHABOTZ

${kotak} *DhaniGans* [ REST API ]
-https://youtube.com/channel/UCcnWMxH0nUbArCCkqubUeHA

${kotak} *FebzaBotz* [ Rpg Menu ] 
- https://youtube.com/c/FEBZABOTZ

${kotak} *Nayla* [ Maker ]
- https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw

${kotak} *Zeeone Ofc* [ Auto Bio ]
- https://youtube.com/c/ZEEONEOFC

${kotak} *Dapuhy* [ Rest Api ] 
- https://dapuhy.xyz
 
${kotak} *Rey* [ Rest Api ] 
- https://server-api-rey.herokuapp.com

${kotak} *Zeks* [ Rest Api ]
- https://zeks.me


${kotak} *Yeriko Nata*
- https://youtube.com/channel/UCrDbOl8d46n9XI884qSAVrg

${kotak} *${NamaOwner}*
- ${ytown}

[ *PESAN* ]
Terimakasih Buat Nama Nama Yang Tersebut Di Atas🌚

© ${NamaBot}`)
limitAdd(sender, _limit) 
break
//═════════════════════════ [ RPG MENU ] ═════════════════════════
//═════════════════════════ [ BY FEBRIANSYAH ] ════════════════════════
//═════════════════════════ [ YT : FEBZBOT ] ═════════════════════════
case 'profile': case 'rpgmenu':
 stod = `${sender}`
 listMsg = {
 buttonText: 'Klik Di Sini',
 footerText: `© ${NamaOwner}`,
 description: `👤 Profile User Rpg
👤 Nama : ${pushname}
📊 Rank : ${role}
📛 Status : ${elit}
💸 Uang : $${(getBalance(sender, balance))}
⭐ Xp : ${getLevelingXp(sender)}/${reqXp}
😄 Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :

🪙 Uang : ${(getBalance(sender, balance))}💰
🏅 Emas : ${getEmas(sender)}🪙
⛓️ Besi : ${getBesi(sender)}⛓️
💎 Berlian : ${getDm(sender)}💎
🐟 Ikan : ${getFish(sender)}🎣`,
 sections: [
                     {
                      "title": `*${tampilTanggal}*`,
 rows: [
                          {
                              "title": "Mining🧑‍🔧",
                              "rowId": "#mining"
                           },
                           {
                              "title": "Mancing🎣",
                              "rowId": "#mancing"
                           },
                           {
                              "title": "Adventure 🚢",
                              "rowId": "#adventure"
                           },
                           {
                              "title": "Rpg Lainnya",
                              "rowId": "#rpg2"
                           }
                        ]
                     }],
 listType: 1
}
dha.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'rpg2':
reply(`👤 Profile User Rpg
👤 Nama : ${pushname}
📊 Rank : ${role}
📛 Status : ${elit}
💸 Uang : $${(getBalance(sender, balance))}
⭐ Xp : ${getLevelingXp(sender)}/${reqXp}
😄 Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :

🪙 Uang : ${(getBalance(sender, balance))}💰
🏅 Emas : ${getEmas(sender)}🪙
⛓️ Besi : ${getBesi(sender)}⛓️
💎 Berlian : ${getDm(sender)}💎
🐟 Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚

${kotak} #myinventori
${kotak} #leaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆


${kotak} #sellikan
${kotak} #sellbesi
${kotak} #sellemas
${kotak} #selldiamond`)
case 'mybag':
case 'cekinven': case 'myinventori':
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`👤 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n 📛 Nama : ${pushname}\n 🏠 Rank : ${role}\n ✔️ Status : ${elit}\n 📊 Xp : ${getLevelingXp(sender)}/${reqXp}\n 📊 Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n 🪙 Emas : ${getEmas(sender)}\n 💸 Uang : $${(getBalance(sender, balance))}\n ⛓️ Besi : ${getBesi(sender)}️\n 💎 Berlian : ${getDm(sender)}\n 🐟 Ikan : ${getFish(sender)}`)
but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButMessage(from, done, 'Inventori User', but)
break
 				case 'leaderboard':
				case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				//uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
               // let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
                break

    case 'sellikan':
        //  if (!isGroup) return reply(mess.only.group)
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp =  25 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥 𝗜𝗞𝗔𝗡 \n 👤 Penjual : ${pushname}\n 👥 Pembeli : Admin\n 🏷️ Harga/Ikan : 25\n ✔️ Status : Sukses\n 🐟 Sisa Ikan : ${getFish(sender)}\n 💸 Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'PASAR IKAN', but)          
          break
    case 'sellbesi':
    //    if (!isGroup) return reply(mess.only.group)
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 50 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥 𝗕𝗘𝗦𝗜\n 👤 Penjual : ${pushname}\n 👥 Pembeli : Admin\n 🏷️ Harga/Besi : 50\n ✔️ Status : Sukses\n ⛓️ Sisa Besi : ${getBesi(sender)}\n 💸 Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'PASAR BESI', but)                    
          break          
    case 'sellemas':
      //    if (!isGroup) return reply(mess.only.group)
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 100 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥 𝗘𝗠𝗔𝗦\n 👤 Penjual : ${pushname}\n 👥 Pembeli : Admin\n 🏷️ Harga/Emas : 100\n ✔️ Status : Sukses\n 🪙 Sisa Emas : ${getEmas(sender)}\n 💸 Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'PASAR EMAS', but)                    
          break 
    case 'selldiamond':
        //  if (!isGroup) return reply(mess.only.group)
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 200 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥 𝗗𝗜𝗔𝗠𝗢𝗡𝗗 \n 👤 Penjual : ${pushname}\n 👥 Pembeli : Admin\n 🏷️ Harga/Dm : 200\n ✔️ Status : Sukses\n 💎 Sisa Diamond : ${getDm(sender)}\n 💸 Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'PASAR DIAMOND', but)                    
          break                                     

 
    case 'mancing':
          if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 500)          
	      coin = randomNomor(100)	    
	      ditangkap = Math.ceil(Math.random() * 60)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n 🐟 Tangkapan : ${ikannya}\n 🐟 Total Dapat : ${ditangkap} Ikan\n 🪙 MONEY : $${coin}\n 📊 EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButImage(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  dha.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  dha.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  dha.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, _limit)         
	      break
    case 'adventure':
          if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')		
	      ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
	      const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./database/user/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 5000)          
	      const money = Math.ceil(Math.random() * 1000)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n🏠 Tempat  ${ad}\n 💸 MONEY : $${money}\n 📊 EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButImage(from, caption, 'Adventure', hasm, but, {quoted: mek})   
          }, 29000)
          setTimeout( () => {
		  dha.sendMessage(from, `Awass`, text) 
		  }, 19000) // 1000 = 1s,
	      setTimeout( () => {
		  dha.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  dha.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1000) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, _limit) 
          break
   	case 'mining':   
   	      if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
          if (!isRpg) return reply('Daftar Rpg Dulu Banh ketik #joinrpg')
          pp = randomNomor(100)
          emas = randomNomor(20)
          dm = randomNomor(5)
          besi = randomNomor(70)
          done = monospace(`🚧Selesai Mining🚧\n📛list hasil📛 :\n🪙Emas : ${emas}🪙\n💸Uang : $${pp}💰\n⛓️Besi : ${besi}⛓️\n💎Berlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          reply(`${done}`)
		  }, 40000) 
		  setTimeout( () => {
		  dha.sendMessage(from, '🚧 selesai menguli. . .🪙👷\nKembali Ke Rumah 🏡', text) 
		  }, 30000) 
	      setTimeout( () => {
		  dha.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 20000) 
		  setTimeout( () => {
		  dha.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 10000) 
		  setTimeout( () => {
		  dha.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) 
		  limitAdd(sender, _limit) 
	      break




//═════════════════════════ [ DOWNLOAD MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'ytplay':
case 'play':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
reply(mess.wait)
gett = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=NisaaCantik`)
yt1 =`*🏷️Judul :* ${gett.title}\n\n*👤Author :* ${gett.channel}\n*📆Dipublikasikan :* ${gett.published}\n*👀Views :*\n${gett.views}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = await getBuffer(gett.thumb)
but = [
{ buttonId: `${prefix}play4 ${args.join(" ")}`, buttonText: { displayText: 'MP4 [ VIDEO ]' }, type: 1 },
{ buttonId: `${prefix}paly3 ${args.join(" ")}`, buttonText: { displayText: '️MP3 [ MUSIC ]' }, type: 1 }
]
sendButImage(from, yt1, yt2, ytg, but)
limitAdd(sender, _limit) 
break
case 'play4':
case 'playmp4':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length ==0)return reply('Judul nya Mana Kak?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=NisaaCantik`)
p4 = await getBuffer(ini.url)
dha.sendMessage(from, p4, video)

break
case 'play3':
case 'playmp3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length ==0)return reply('Judul nya Mana Kak?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=NisaaCantik`)
p3 = await getBuffer(ini.url)
dha.sendMessage(from, p3, audio)
limitAdd(sender, _limit) 
break
case 'ytmp4':
try {
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${ini_link}&apikey=NisaaCantik`)
anu = ini.result
ini_txt =`*🏷️Judul* : ${anu.title}\n*👤Author* : ${anu.channel}\n*📆Publis* : ${anu.published}\n*👀Views* : ${anu.views}`
yt4 = await getBuffer(anu.thumb)
dha.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
dha.sendMessage(from, res, video)
limitAdd(sender, _limit) 
} catch (e) { 
reply(`${e}`)
}
break
case 'ytmp3':
try {
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${ini_link}&apikey=NisaaCantik`)
get = ini.result
ini_txt =`*🏷️Judul* : ${get.title}\n*👤Author* : ${get.channel}\n*📆Publis* : ${get.published}\n*👀Views* : ${get.views}`
yt3 = await getBuffer(get.thumb)
dha.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
dha.sendMessage(from, res, audio)
limitAdd(sender, _limit) 
} catch (e) { 
reply(`${e}`)
}
break
case 'mediafire':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
if (!q) return
reply(mess.wait)
awokkk = await fetchJson(`https://rest2yeriko.herokuapp.com/api/mediafire/?url=${q}&apikey=Yuzzu`)
sendFileFromUrl(awokkk.result.link, document, {mimetype: awokkk.result.mime, filename: awokkk.result.nama, quoted: mek})
limitAdd(sender, _limit)
break
case 'ttnowm': 
case 'tiktoknowm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan\nUntuk Download Tiktok User Free Hanya Bisa Akses TiktokWm')
if (!q) return
reply(mess.wait)
tiktok1 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok4 = await getBuffer(tiktok1.result.nowatermark)
dha.sendMessage(from, tiktok4, video, {quoted: mek, caption:'Done'})
limitAdd(sender, _limit)
break
case 'ttwm':
case 'tiktokwm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
tiktok3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok5 = await getBuffer(tiktok3.result.watermark)
dha.sendMessage(from, tiktok5, video, {quoted: mek, caption:'Done'})
limitAdd(sender, _limit)
break
case 'igdl':
case 'ig':
case 'instagram':
try {
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
ig = await fetchJson(`https://apidhani.herokuapp.com/api/download/igdl?url=${q}&apikey=NisaaCantik`)
ig1 = await getBuffer(ig.result.url)
dha.sendMessage(from, ig1, image, {quoted: mek, caption: `${ig.result.desc}`})
limitAdd(sender, _limit) 
} catch (e) { 
reply(`${e}`)
}
break
//═════════════════════════ [ ISLAMI MENU ] ═════════════════════════
//═════════════════════════ [ CASE BY YERIKO ] ═════════════════════════
//═════════════════════════ [ API YOGI PW ] ═════════════════════════

case 'kisahnabi':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply(`Example : ${prefix + command} Muhammad`)
reply(mess.wait)
fitur = await fetchJson(`https://api-yogipw.herokuapp.com/api/muslim/kisahnabi?nabi=${q}`)
fitur1 = fitur.result
fitur2 =`Nama : ${fitur1.name}\nKelahiran : ${fitur1.kelahiran}\nWafat Usia : ${fitur1.wafat_usia}\nSinggah : ${fitur1.singgah}\nKisah : ${fitur1.kisah}`
reply(fitur2)
limitAdd(sender, _limit)
break
case 'asmaulhusna':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
fitur3 = await fetchJson(`https://api-yogipw.herokuapp.com/api/muslim/asmaulhusna`)
fitur4 = '*ASMAULHUSNA*\n\n'
for (let fitur5 of fitur3.result) {
fitur4 +=`*Nomor* : ${fitur5.number}\n`
fitur4 +=`*Latin* : ${fitur5.latin}\n`
fitur4 +=`*Arab* : ${fitur5.arab}\n`
fitur4 +=`*Indonesia* : ${fitur5.translate_id}\n`
fitur4 +=`*Inggris* : ${fitur5.translate_en}\n\n`
}
reply(fitur4)
limitAdd(sender, _limit)
break
case 'doaharian':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
fitur9 = await fetchJson(`https://api.dapuhy.xyz/api/islam/doaharian?apikey=${apidapa}`)
fitur10 = '*DOA HARIAN*\n\n*'
for (let h of fitur9.result) {
fitur10 +=`*${h.title}*\n`
fitur10 +=`*Arab* : ${h.arabic}\n`
fitur10 +=`*Latin* : ${h.latin}\n`
fitur10 +=`*Arti* : ${h.translation}\n\n`
}
reply(fitur10)
limitAdd(sender, _limit)
break
case 'niatshalat':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
fitur11 = await fetchJson(`https://api.dapuhy.xyz/api/islam/niatshalat?apikey=${apidapa}`)
fitur13 = '*NIAT SHALAT*\n\n'
for (let h of fitur11.result) {
fitur13 +=`*${h.name}*\n`
fitur13 +=`*Arab* : ${h.arabic}\n`
fitur13 +=`*Latin* : ${h.latin}\n`
fitur13 +=`*Arti* : ${h.terjemahan}\n\n`
}
reply(fitur13)
limitAdd(sender, _limit)
break
case 'randomquran':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
fitur14 = await fetchJson(`https://api.zeks.me/api/randomquran?apikey=${apizeks}`)
fitur15 = fitur14.result
fitur16 =`Arti : ${fitur15.arti}\nAsma : ${fitur15.asma}\nAyat : ${fitur15.ayat}\nKeterangan : ${fitur15.keterangan}\nNama : ${fitur15.nama}\nNomor : ${fitur15.nomor}\nRukuk : ${fitur15.rukuk}\nType : ${fitur15.type}\nUrut : ${fitur15.urut}\n`
reply(fitur16)
lguny = await getBuffer(fitur15.audio)
dha.sendMessage(from, lguny, audio, {quoted: mek})
limitAdd(sender, _limit)
break
//═════════════════════════ [ SEARCH MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════



case 'herolist':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
limitAdd(sender, _limit)
break
case 'herodetail':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
limitAdd(sender, _limit)
break
case 'sfile':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
fitur7 = await fetchJson(`https://api.dapuhy.xyz/api/search/sfile?query=${q}&apikey=fxU5dy6rm7`)
fitur8 = 'SFILE SEARCH\n\n'
for (let ftr of fitur7.result) {
fitur8 += `JUDUL : ${ftr.title}\n`
fitur8 +=`THUMB : ${ftr.thumb}\n`
fitur8 +=`LINK : ${ftr.link}\n\n`
}
reply(fitur8)

case 'playstore':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n[ *PLAY STORE* ]\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
limitAdd(sender, _limit)
break
case 'ytsearch':
case 'yts':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Nyri Apa?')
reply(mess.wait)
yutub = await fetchJson(`https://api.zeks.me/api/yts?apikey=${apivinz}&q=${q}`)
yutub1 = '*YOUTUBE SEARCH\n\n'
for (let y of yutub.result) {
yutub1 +=`*Judul* : ${y.video.title}\n`
yutub1 +=`*Uploader* : ${y.uploader.usermame}\n`
yutub1 +=`*Views* : ${y.video.views}\n`
yutub1 +=`*Dursasi* : ${y.video.duration}\n`
yutub1 +=`*Url* : ${y.video.url}\n\n`
}
reply(yutub1)
limitAdd(sender, _limit)
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '「 *GC WA* 」\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
limitAdd(sender, _limit)
break 
case 'pinterest':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
foto = await fetchJson(`https://rest2yeriko.herokuapp.com/api/pinterest/?text=${q}&apikey=Yuzzu`)
fotoget = await getBuffer(foto.result)
sendButImage(from, `Foto *${q}* Nya Kak`, `Lagi? Klik Button Nya Kak⬇️`, fotoget, [{buttonId: `${prefix}pinterest ${q}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
limitAdd(sender, _limit)
break
case 'gsmarena': case 'gsm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Masukan Merk Hp')
reply(mess.wait)
cari1 = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
cari2 = await getBuffer(cari1.thumb)
cari3 = `Judul : ${cari1.judul}\nUkuran : ${cari1.ukuran}\nType : ${cari1.type}\nStorage : ${cari1.storage}\nDisplay : ${cari1.display}\nInchi : ${cari1.inchi}\nPixel : ${cari1.pixel}\nVideo Pixel : ${cari1.videoPixel}\nRam : ${cari1.ram}\nChipset : ${cari1.chipset}\nBatrai : ${cari1.batrai}\nMerek Batrai : ${cari1.merek_batre}\n\n*Detail* : \n\n${cari1.detail}`
dha.sendMessage(from, cari2, image, {quoted: mek, caption: cari3})
limitAdd(sender, _limit)
break
case 'wiki': case 'wikipedia':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
ilmu = await fetchJson(`https://rest2yeriko.herokuapp.com/api/wikipedia?search=${q}&apikey=Yuzzu`)
ilmu2 = `*Nama* : ${q}\n*Hasil* : ${ilmu.result.result}`
reply(ilmu2)
limitAdd(sender, _limit)
break
case 'kbbi':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
ilmu3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kbbi?kata=${q}&apikey=Yuzzu`)
ilmu4 =`*Nama* : ${q}\n*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
limitAdd(sender, _limit)
break
case 'kodepos': case 'codepos':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return
reply(mess.wait)
ilmu5 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kodepos?kota=${q}&apikey=Yuzzu`)
ilmu6 = 'KODE POS\n' 
for (let nyz of ilmu5.result.data) {
ilmu6 += `${buletan} *PROVINCE* : ${nyz.province}\n`
ilmu6 += `${buletan} *CITY* : ${nyz.city}\n`
ilmu6 += `${buletan} *SUBDISTRICT* : ${nyz.subdistrict}\n`
ilmu6 += `${buletan} *URBAN* : ${nyz.urban}\n`
ilmu6 += `${buletan} *POSTALCODE* : ${nyz.postalcode}\n\n`
}
reply(ilmu6)
limitAdd(sender, _limit)
break


//═════════════════════════ [ FILM MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API DAPA ] ═════════════════════════

case 'jadwalbioskop':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
film1 = await fetchJson(`https://api.dapuhy.xyz/api/movie/jadwalbioskop?apikey=${apidapa}`)
film2 = '*JADWAL BIOSKOP*\n' 
for (let film3 of film1.result) {
film2 += `${kotak} *Judul* : ${film3.title}\n`
film2 += `${kotak} *Link* : ${film3.url}\n`
film2 += `${kotak} *Thumb* : ${film3.thumb}\n\n`
}
reply(film2)
limitAdd(sender, _limit)
break
case 'comingsoon':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
film4 = await fetchJson(`https://api.dapuhy.xyz/api/movie/comingsoon?apikey=${apidapa}`)
film5 = '*COOMING SOON*\n\n'
for (let film6 of film4.result) {
film5 += `${kotak} *Judul* ${film6.title}\n`
film5 += `${kotak} *Link* ${film6.url}\n`
film5 += `${kotak} *Thumb* : ${film6.thumb}\n\n`
}
reply(film5)
limitAdd(sender, _limit)
break
case 'sobatnonton':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Judul Flm Nya?')
reply(mess.wait)
film6 = await fetchJson(`https://api.dapuhy.xyz/api/movie/sobatnonton?query=${q}&apikey=${apidapa}`)
film7 = '*SOBAT NONTON*\n\n'
for (let film8 of film6.result) {
film7 += `${kotak} *Judul* ${film8.title}\n`
film7 += `${kotak} *Link* ${film8.url}\n`
film7 += `${kotak} *Rilis* ${film8.release}\n`
film7 += `${kotak} *Qualitas* ${film8.quality}\n`
film7 += `${kotak} *Thumb* : ${film8.thumb}\n\n`
}
reply(film7)
limitAdd(sender, _limit)
break
case 'bioskopkeren':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply ('Jdl Flm Ny?')
reply(mess.wait)
film8 = await fetchJson(`https://api.dapuhy.xyz/api/movie/bioskopkeren?query=${q}&apikey=${apidapa}`)
film9 = '*BIOSKOP KEREN*\n\n'
for (let film10 of film8.result) {
film9 += `${kotak} *Judul* ${film10.title}\n`
film9 += `${kotak} *Link* ${film10.url}\n`
film9 += `${kotak} *Thumb* : ${film10.thumb}\n\n`
}
reply(film9)
limitAdd(sender, _limit)
break
case 'searchkartun':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Judul Kartun Nya?')
reply(mess.wait)
film11 = await fetchJson(`https://api.dapuhy.xyz/api/kartun/searchkartun?query=${q}&apikey=${apidapa}`)
film12 =`${kotak} *Judul* : ${film11.result.title}\n${kotak} *Status* : ${film11.result.status}\n${kotak} *Type* : ${film11.result.type}\n${kotak} *Episode* : ${film11.result.episode}\n${kotak} *Link* : ${film11.result.url}\n${kotak} *Sinopsis* : ${film11.result.synopsis}`
reply(film12)
limitAdd(sender, _limit)
break
//═════════════════════════ [ ADMIN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


case 'antilink':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args[0] == 'on') {
if (isAntiLink) return reply('Sudah aktif!!')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan antilink!')
} else if (args[0] == 'off') {
antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mematikan antilink!')
} else if (!q) {
sendButMessage(from, `FORMAT SALAH BANG!!!`, `Kalo Button Nya Gaada/Udah Di Klik Orang Gini :\nAktif : ${prefix}antilink on\nMati : ${prefix}antilink off\n\n\nKalo Bkn Admin Gwsh Banyak Tingkah Kalo Ga Bakalan Ke Kick!`, [{
buttonId: `${prefix}antilink on`,
buttonText: {
displayText: `AKTIF`,
},
type: 1,
},
{
buttonId: `${prefix}antilink off`,
buttonText: {
displayText: `NON-AKTIF`,
},
type: 1,},])}
limitAdd(sender, _limit)
break
case 'linkgc':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
linkgc = await dha.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
dha.sendMessage(from, yeh, text, {quoted: mek})
limitAdd(sender, _limit)
break
case 'kick':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
kick(from, mentionUser)
limitAdd(sender, _limit)
break
case 'add':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
dha.groupAdd(from, [entah])
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
dha.groupAdd(from, [entah])
}
limitAdd(sender, _limit)
break
case 'demote':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = mek.message.extendedTextMessage.contextInfo.participant
dha.groupDemoteAdmin(from, [demote])
reply('Sukses demote admin')
limitAdd(sender, _limit)
break
case 'promote':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = mek.message.extendedTextMessage.contextInfo.participant
dha.groupMakeAdmin(from, [promote])
reply('Sukses promote member')
limitAdd(sender, _limit)
break
case 'setgrupname':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return 
if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
dha.groupUpdateSubject(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
limitAdd(sender, _limit)
break
case 'setdesc':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
dha.groupUpdateDescription(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
limitAdd(sender, _limit)
break
case 'setppgrup':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await dha.downloadMediaMessage(encmedia)
dha.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
limitAdd(sender, _limit)
break
case 'tagall':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
let arr = [];
let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
limitAdd(sender, _limit)
break
case 'kickall':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
for (let i of groupMembers) {
await kickMember(from, [i.jid])
}
limitAdd(sender, _limit)
break
case 'leave':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
setTimeout( () => {
dha.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee...')
}, 0)
limitAdd(sender, _limit)
break
case 'online':
case 'listonline':
case 'here':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(`Only group`)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) { 
reply(`${e}`)
}
limitAdd(sender, _limit)
break
case 'hidetag':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
limitAdd(sender, _limit)
break
case 'sider':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if(!isGroup) return reply(mess.only.group)
try {
infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `*• Dibaca oleh:*\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
teks += `*• Tersampaikan pada:*\n\n`
for(let i of infom.deliveries){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (e) {
console.log(color(e))
reply('Reply chat bot!')
}
limitAdd(sender, _limit)
break
case 'closetime':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
limitAdd(sender, _limit)
break
case 'opentime':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return 
if (!isGroupAdmins) return 
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
limitAdd(sender, _limit)
break


//═════════════════════════ [ OWNER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════

      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'start':
             if (!isOwner) return 
             reply(`OTEWE MENGHIDUPKAN MESIN😗`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = dha.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             dha.groupLeave(id)
}
             break

case 'public':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
publik = true
replyz('Sukses mengubah mode self ke public\nSekarang Semua User Dapat Mengakses Bot')
limitAdd(sender, _limit)
break
case 'self':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
publik = false
replyz('Sukses mengubah mode public ke self\nSekarang Bot Hanya Bisa Di Akses Owner Dan Bot')
limitAdd(sender, _limit)
break
case 'bcnowm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
dha.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await dha.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
}
reply('')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}`)
}
reply('*Done*')
}
limitAdd(sender, _limit)
break
case 'bc':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
dha.updatePresence(from, Presence.composing)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
anu = await dha.chats.all()
num = '0@s.whatsapp.net'
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
buttons = [{buttonId: `yoi`, buttonText: {displayText: 'OKEE'}, type: 1},{buttonId: `jjj`, buttonText: {displayText: 'SIPP'}, type: 1}]
const btnbc = {
contentText: `${body.slice(4)}`,
footerText: '*BROADCAST*',
buttons: buttons,
headerType: 1
}
await dha.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftroli})
}
reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
}
limitAdd(sender, _limit)
break
case 'bc2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
dha.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await dha.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`})
}
reply('')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`)
}
reply('*Done*')
}
limitAdd(sender, _limit)
break
case 'bcgc':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya mana bosku >_<')
anu = await groupMembers
nom = mek.participant
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`})
}
reply('*Done')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`)
}
reply('Done')
}
limitAdd(sender, _limit)
break
case 'bcgc2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya mana bosku >_<')
anu = await groupMembers
nom = mek.participant
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await dha.downloadMediaMessage(encmedia)
for (let _ of anu) {
dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
}
reply('Done')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}`)
}
reply('Done')
}
limitAdd(sender, _limit)
break
case 'addcmd': 
case 'setcmd':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg("Done!")
} else {
reply('tag stickenya')
}
limitAdd(sender, _limit)
break
case 'delcmd':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
textImg("Done!")
limitAdd(sender, _limit)
break
case 'clearall':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner) return reply(mess.only.owner)
anu = await dha.chats.all()
dha.setMaxListeners(25)
for (let _ of anu) {
dha.deleteChat(_.jid)
}
reply('Succes')
limitAdd(sender, _limit)
break
case 'addrespon':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
{
if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input1 = body.slice(11)
if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input = input1.split("|")
if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
addCommands(input[0], input[1], sender, commandsDB) 
reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
}
limitAdd(sender, _limit)
break
case 'dellrespon':
case 'delrespon':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
{
if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
deleteCommands(body.slice(11), commandsDB)
reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)}
limitAdd(sender, _limit)
break
case 'premium':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return 
if (!isOwner) return reply(mess.only.owner)
if (args[0] === 'add') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
} else {
premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
} else if (args[0] === 'del') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
} else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
}
} else {
reply(mess.wrongFormat)
}
limitAdd(sender, _limit)
break
case 'join':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
 if (args.length < 1) return reply('Link nya mana?')
dha.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
limitAdd(sender, _limit)
break
case 'autovn':
if (!mek.key.fromMe && !isOwner) return
if (args[0] === "on") {
if (autovn === true) return reply('Sudah Aktif')
autovn = true
reply('Sudah On')
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`${command} Non Actived✖️`)
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autoketik':
if (!mek.key.fromMe && !isOwner) return 
if (args[0] === "on") {
if (autoketik === true) return reply('Dah Aktif Banh')
autoketik = true
reply('Sudah On')
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply('Sudah Off')
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On✔️`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off✖️`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoread':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break


//═════════════════════════ [ EDIT MUSIC MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


case 'robot':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await dha.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply('Ulangi Kak Tadi Error')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break
case 'gemuk':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await dha.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break
case 'balik':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await dha.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break
case 'bass':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await dha.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break

//═════════════════════════ [ CONVERT MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


case 'tourl':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await dha.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
limitAdd(sender, _limit)
break
case 'imgtourl':
case 'img2url':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait) 
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  dha.downloadAndSaveMediaMessage(encmedia)
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
dha.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
.catch(err => {
throw err
})
limitAdd(sender, _limit)
break
case 'tovideo':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
limitAdd(sender, _limit)
break
case 'tomp3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply (mess.only.premium)
dha.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Reply Video Nya Kak')
reply(mess.wait)
encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediad = await dha.downloadAndSaveMediaMessage(encmediad)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
fs.unlinkSync(mediad)
if (err) return reply('Ulangi Kak Tadi Error')
mhee = fs.readFileSync(ran)
dha.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break
case 'emoji2png':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
bufferg = await getBuffer(`https://api/dapuhy.xyz/api/maker/emojitopng?emoji=${emoji}&apikey=${apidapa}`)
dha.sendMessage(from, bufferg, image, {quoted: mek})
limitAdd(sender, _limit)
break
case 'potomeme': case 'pmeme':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
try {
if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
reply(mess.wait)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
var imgbb = require('imgbb-uploader')
var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await dha.downloadAndSaveMediaMessage(enmedia)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
dha.sendMessage(from, resu, image, {quoted: mek})
fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
console.log(e)
}
limitAdd(sender, _limit)
break
case 'smeme': case 'stickmeme': case 'sm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
 {
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  dha.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendWebp(from, `${anu1}`)
} else {
reply('Gunakan foto!')
} 
}
limitAdd(sender, _limit)
break
case 'take':
case 'colong':
case 'delwm':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isQuotedSticker) return reply('Stiker aja om')
encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo;
media = await dha.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : ``
dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
require('./lib/fetch.js').createExif(satu, dua)
require('./lib/fetch.js').modStick(media, dha, mek, from)
limitAdd(sender, _limit)
break
case 'stiker': 
case 'sticker':
case 's':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ind.stikga())
})
.on('end', function () {
console.log('Succes Gan')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
}
limitAdd(sender, _limit)
break
case 'toimg':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isQuotedSticker) return reply('Reply/tag sticker !')
reply (mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Eror Kak')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
fs.unlinkSync(ran)
})
limitAdd(sender, _limit)
break
case 'togif':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
dha.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
limitAdd(sender, _limit)
break
case 'stickergif':
case 'stikergif':
case 'sgif':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.stick)
})
.on('end', function () {
console.log('Subrek Fernazer')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(`Wait Kak ${pushname}`)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
dha.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
}
limitAdd(sender, _limit)
break


//═════════════════════════ [ MAKER MENU ] ═════════════════════════
//═════════════════════════ [ Thx DhaniBotz ] ═════════════════════════
//═════════════════════════ [ ] ═════════════════════════

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlightglitch':
case 'neonlightonbrickwall':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=NisaaCantik&text=${teks}`)
oke = await getBuffer(anu.result)
dha.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
limitAdd(sender, _limit) 
break
case 'hartatahta': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=NisaaCantik&text=${teks}`)
dha.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
limitAdd(sender, _limit) 
break

//----> 2 TEXT <----//

case '8bit':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'pornhub':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'glitch':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'glitch2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'layered':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case '3dsteel':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'realistic':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'lionlogo':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'ninjalogo':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'wolf':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'wolf2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'halloween3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'marvel':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'marvel2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'cinematichorror':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'avengers':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'graffiti3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'captainamerica':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
dha.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'girlneko':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'sadboy':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'makerkaneki':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'rem':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'lolimaker':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break
case 'gura':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
dha.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, _limit) 
break

//═════════════════════════ [ 18+ MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API GW ] ═════════════════════════

case 'ass': case 'ahegao': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'glasses': case 'hentai': case 'jahy': case 'masturbation': case 'neko': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
reply(mess.wait)
bikep = await fetchJson(`https://rest2yeriko.herokuapp.com/api/nsfw/${command}?apikey=Yuzzu`)
bokep = await getBuffer(bikep.result)
sendButImage(from, `JANGAN KE WC DULU BRO\nDOSA TANGGUNG USER SENDIRI`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, bokep, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
limitAdd(sender, _limit)
break

//═════════════════════════ [ ASUPAN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════


case 'vietnam': case 'malaysia': case 'korea': case 'indonesia': case 'japan': case 'thailand': case 'china':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
cantik = await fetchJson(`https://rest2yeriko.herokuapp.com/api/cewe/${command}?apikey=Yuzzu`)
cantok = await getBuffer(cantik.result.url)
sendButImage(from, `Cewe *${command}* Wangy Wangy`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantok, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
limitAdd(sender, _limit)
break

case 'hijaber': case 'santuy': case 'ukhti': case 'bocil': case 'ghea': case 'rikagusriani':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
ini = await fetchJson(`https://kagoya-api.herokuapp.com/api/asupan/hijaber`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
sendButVideo(from, `*${command}* Mantaf:v`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
limitAdd(sender, _limit)
break

//═════════════════════════ [ RANDOM MENU ] ═════════════════════════
//═════════════════════════ [ COPAS SJ ] ════════════════════════
//═════════════════════════ [ API REYY ] ═════════════════════════

// WALLPAPER
case 'trans': case 'jeni': case 'jiso': case 'cecan2': case 'cogan2': case 'satanic': case 'katakata': case 'pentol': case 'kartun': case 'tatasurya': case 'cyberspace': case 'gaming': case 'islami': case 'programing': case 'teknologi': case 'mountain': case 'wallhp': case 'anime': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
randomft1 = await getBuffer(`https://server-api-rey.herokuapp.com/api/wallpaper/${command}?apikey=apirey`)
dha.sendMessage(from, randomft1, image, {quoted: mek, caption: `Wallpaper *${command}*`})
limitAdd(sender, _limit)
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
])
limitAdd(sender, _limit) 
break
// TEXT
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
case 'truth':
case 'dare':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=NisaaCantik`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},])
limitAdd(sender, _limit) 
break;
case 'quotes':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=NisaaCantik`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
limitAdd(sender, _limit) 
break;
case 'quoteskanye':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=NisaaCantik`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
limitAdd(sender, _limit) 
break
// RANDOM FOTO
case 'ryujin': case 'rose': case 'justina': case 'blackpink': case 'doraemon': case 'kpop': case 'hekel': case 'pubg': case 'cogan': case 'cecan': case 'aesthetic': case 'kucing': case 'anjing':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
randomft1 = await getBuffer(`https://server-api-rey.herokuapp.com/api/wallpaper/${command}?apikey=apirey`)
dha.sendMessage(from, randomft1, image, {quoted: mek, caption: `Foto *${command}*`})
limitAdd(sender, _limit)
break
case 'darkjokes':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
// if (!isGroup) return reply(mess.only.group)
let data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT⏩'}, type: 1}]
pto =await dha.prepareMessage(from, hasil, image)
gbuttonan = {
imageMessage: pto.message.imageMessage,
contentText: `Gelap Kek Masa Depanlu`,
footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
buttons: gbutsan,
headerType: 4
}
await dha.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
limitAdd(sender, _limit)
break

// RAND VIDEO
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

// Rand anime
case 'akira':
case 'akiyama':
case 'waifu2':
case 'onepiece':
case 'rize':
case 'tsunade':
case 'shota':
case 'elaina':
case 'waifu':
case 'hestia':
case 'mikasa':
case 'boruto':
case 'nezuko':
case 'doraemon':
case 'gremory':
case 'megumin':
case 'nekonime':
case 'akiyama':
case 'sakura':
case 'sagiri':
case 'shinka':
case 'isuzu':
case 'kurumi':
case 'itachi':
case 'emilia':
case 'kaori':
case 'asuna':
case 'naruto':
case 'sasuke':
case 'shizuka':
case 'kaga':
case 'akira':
case 'chitoge':
case 'madara':
case 'yuki':
case 'ayuzawa':
case 'ezra':
case 'minato':
case 'hinata':
case 'kagura':
case 'miku':
case 'kakasih':
case 'keneki':
case 'toukachan':
case 'kotori':
case 'inori':
case 'ana':
case 'shina':
case 'itori':
case 'deidara':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
reply(mess.wait)
data1 = fs.readFileSync(`./lib/randomlib/random_anime/${command}.json`)
jsonData1 = JSON.parse(data1);
randIndex1 = Math.floor(Math.random() * jsonData1.length);
randKey1 = jsonData1[randIndex1];
animee = await getBuffer(randKey1)
sendButImage(from, `${ytown}`, `👀📸`, animee, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `AGAIN,🗣️`,
},
type: 1,
},
])
limitAdd(sender, _limit) 
break
break

//═════════════════════════ [ OTHER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


case 'admin':  
case 'owner':
case 'creator':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
const icontact = fs.readFileSync('./media/contact.jpg')
dha.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
dha.sendMessage(from, icontact, image, {quoted: mek, caption: 'Tuhh Kak Kontak Owner Ku >_<'})
limitAdd(sender, _limit)
break
case 'grubbot':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
gcm =`
Grub 1 : ${GrubBot}
Grub 2 : ${GrubBot2}
Jangan Lupa Join Yahh *${pushname}*
`
reply(gcm)
limitAdd(sender, _limit)
break
case 'script':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
const isc = fs.readFileSync('./media/sc.jpg')
mastahb =`LINK SC MINTA KE 
wa.me/6282132242606
`
dha.sendMessage(from, isc, image, {quoted: mek, caption: mastahb})
limitAdd(sender, _limit)
break
case 'donasi':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi Kah?🤗*
*│*⬡ *GOPAY :  ${NomorGopay}*
*│*⬡ *DANA : ${NomorDana}*
*│*⬡ *OVO : ${NomorOvo}*
*└───────────────────*
1Perak Donasi Kalian Juga Membantu Perkembangan Bot Kami:)`
dha.sendMessage(from, dona, image, { quoted: floc3, thumbnail: dona, caption: doni })
limitAdd(sender, _limit)
break
case 'runtime':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
run = process.uptime()
teks = `${kyun(run)}`
reply(teks)
limitAdd(sender, _limit)
break
case 'speed':
case 'ping':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8")
const ssd = child.replace(/Memory:/, "Ram:")
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`
reply(pingnya)
})
limitAdd(sender, _limit)
break
case 'listcmd':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
limitAdd(sender, _limit)
break
case 'premiumcheck':
case 'cekpremium':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.premium)
const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
limitAdd(sender, _limit)
break
case 'listprem':
case 'listpremium':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
let txt = `「 *PREMIUM USER LIST* 」\n\n`
let men = [];
for (let i of _premium){
men.push(i.id)
const checkExp = ms(i.expired - Date.now())
txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
mentions(txt, men, true)
limitAdd(sender, _limit)
break
case 'responlist':
case 'listrespon':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
{
let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
for (let i = 0; i < commandsDB.length; i++){
txt += `❏ Key : ${commandsDB[i].pesan}`
}
reply(txt)
}
limitAdd(sender, _limit)
break
case 'delete':
case 'del':
case 'd':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
limitAdd(sender, _limit)
break
case 'afk':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
const reason = q ? q : 'Nothing.'
afk.addAfkUser(sender, time, reason, _afk)
const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n☞ *Username*: ${pushname}\n☞ *Alasan*: ${reason}`
reply(aluty)
limitAdd(sender, _limit)
break
case 'bug':
case 'report':
case 'bugreport':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`Ex : ${prefix + command} [ Fitur Apa ] [ Error Gmn ]`)
teks = args.join(' ')
reply(`Done Send Report Bug To Owner ${NamaOwner}`)
dha.sendMessage(`${NOwner}`,`*Bug Report:* ${teks}`, text)
limitAdd(sender, _limit)
break
case 'request':
case 'saran':
case 'req':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`Ex : ${prefix + command} [ Saran ]`)
teks = args.join(' ')
reply(`Done Send Request To Owner ${NamaOwner}`)
dha.sendMessage(`${NOwner}`,`*Request*\n\n*${teks}*`, text)
limitAdd(sender, _limit)
break
case 'rate': case 'rating':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sendButMessage(from, `Hai Makasih Udah Mau Berikan Kami Rating Silahkan Di Klik Bintang Yang Ada Di Bawah Sesuai Pendapat Anda`, `Berikan Rating Sesuai *Pendapat Anda* Terhadap Bot Kami`, [
{
buttonId: `${prefix}rate5`,
buttonText: {
displayText: `⭐⭐⭐⭐⭐`,
},
type: 1,
},
{
buttonId: `${prefix}rate3`,
buttonText: {
displayText: `⭐⭐⭐`,
},
type: 1,
},
{
buttonId: `${prefix}rate1`,
buttonText: {
displayText: `⭐`,
},
type: 1,
},
])
limitAdd(sender, _limit)
break
case 'rate5':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sendButMessage(from, `Widih Makasih Bintang 5 Nya Kak Yaaa`, `Makasih Bintang 5 Nya Kak ${pushname}`, [
{
buttonId: `${prefix}satujddjduaa`,
buttonText: {
displayText: `Sama Sama`,
},
type: 1,
},
{
buttonId: `${prefix}ajahdhd`,
buttonText: {
displayText: `Yoi Bro🗿👍`,
},
type: 1,
},
])
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *5* Dari ${pushname}`, text)
limitAdd(sender, _limit)
break
case 'rate3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sendButMessage(from, `Makasih Bintang 3 Nya Kak Yaaa\n_Ada Saran Nggak Kak Buat Bot Kami??_\n\nKalo Ada Ketik\n*${prefix}request* < Apa Yang Mau Di Request In >`, `Makasih Bintang 3 Nya Kak ${pushname}`, [
{
buttonId: `${prefix}satujddjduaa`,
buttonText: {
displayText: `Sama Sama`,
},
type: 1,
},
{
buttonId: `${prefix}ajahdhd`,
buttonText: {
displayText: `Yoi Bro🗿👍`,
},
type: 1,
},
])
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *3* Dari ${pushname}\n\nAwokaowk Rate 3`, text) 
limitAdd(sender, _limit)
break
case 'rate1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sendButMessage(from, `Makasih Bintang 1 Nya Kak`, `Ada Saran Nggak Kak Buat Bot Kami??Kalo Ada Krim\n*${prefix}request* < Apa Yang Mau Di Request In >\nAda Keluh Kesah Buat Bot Kami?Kirim\n${prefix}report < Keluh Kesah Anda >`, [
{
buttonId: `${prefix}satujddjduaa`,
buttonText: {
displayText: `Sama Sama`,
},
type: 1,
},
{
buttonId: `${prefix}ajahdhd`,
buttonText: {
displayText: `Yoi Bro🗿👍`,
},
type: 1,
},
])
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *1* Dari ${pushname}\n\n\nAwolawok Rate 1 Makanya Bot Nya On In 24Jam Biar Kek Rumah Sakit`, text) 
limitAdd(sender, _limit)
break
case 'rate5':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = args.join(' ')
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *5* Dari ${pushname}`, text)
limitAdd(sender, _limit)
break
case 'rate3':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = args.join(' ')
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *3* Dari ${pushname}\n\nAwokaowk Rate 3`, text)
limitAdd(sender, _limit)
break 
case 'rate1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = args.join(' ')
dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *1* Dari ${pushname}\n\n\nAwolawok Rate 1 Makanya Bot Nya On In 24Jam Biar Kek Rumah Sakit`, text)
limitAdd(sender, _limit)
break 
// SEWA
case 'sewabot':
case 'sewa':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*PRICE SEWA*\n• Permanen : ${HargaPermanen}\n•Perbulan : ${HargaPerbulan}\nPerminggu : ${HargaPerminggu}\nnPayment : Gopay,Dana,Ovo\nMinat? Lanjutkan Transaksi Anda!`
but = [{ buttonId: '!permanen', buttonText: { displayText: 'Sewa Permanen' }, type: 1 },{ buttonId: '!bulan', buttonText: { displayText: 'Sewa Perbulan' }, type: 1 },{ buttonId: '!minggu', buttonText: { displayText: 'Sewa Perminggu' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Salah Satu!', but)          
limitAdd(sender, _limit)
break
// Per Manen
case 'permanen':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*PERMANEN ACCEPT*\n• Harga : ${HargaPermanen}\nSilahkan Pilih Payment Di Sini`
but = [{ buttonId: '!gopay1', buttonText: { displayText: 'Gopay💵' }, type: 1 },{ buttonId: '!dana1', buttonText: { displayText: 'Dana 💶' }, type: 1 },{ buttonId: '!ovo1', buttonText: { displayText: 'Ovo 💷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Payment Nya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'gopay1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Gopay\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomorg', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrg', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'dana1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Dana\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomord', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrd', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'ovo1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Ovo\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomoro', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qro', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'nomorg':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*ACCEPT SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n•Payment : Gopay\nNomor : ${NomorGopay}\nMetode : Nomor Gopay\nJika Minat Hubungi Owner Dan Segera Selesaikan Pembayaran Anda `
but = [{ buttonId: '!cancel', buttonText: { displayText: 'Batal✖️' }, type: 1 },{ buttonId: '!owner', buttonText: { displayText: 'owner' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Di Lanjutkan Klik Cancel Jika Batal Klik Owner Jika Lanjut!', but)          
limitAdd(sender, _limit)
break

// Per Bulan
case 'bulan':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*PERBULAN ACCEPT*\n• Harga : ${HargaPerbulan}\nSilahkan Pilih Payment Di Sini`
but = [{ buttonId: '!gopay2', buttonText: { displayText: 'Gopay💵' }, type: 1 },{ buttonId: '!dana2', buttonText: { displayText: 'Dana 💶' }, type: 1 },{ buttonId: '!ovo2', buttonText: { displayText: 'Ovo 💷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Payment Nya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'gopay2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Gopay\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomorg', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrg', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'dana2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Dana\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomord', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrd', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'ovo2':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Ovo\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomoro', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qro', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'nomorg':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*ACCEPT SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n•Payment : Gopay\nNomor : ${NomorGopay}\nMetode : Nomor Gopay\nJika Minat Hubungi Owner Dan Segera Selesaikan Pembayaran Anda `
but = [{ buttonId: '!cancel', buttonText: { displayText: 'Batal✖️' }, type: 1 },{ buttonId: '!owner', buttonText: { displayText: 'owner' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Di Lanjutkan Klik Cancel Jika Batal Klik Owner Jika Lanjut!', but)          
limitAdd(sender, _limit)
break
// Perminggu
case 'minggu':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*PERMANEN ACCEPT*\n• Harga : ${HargaPermanen}\nSilahkan Pilih Payment Di Sini`
but = [{ buttonId: '!gopay1', buttonText: { displayText: 'Gopay💵' }, type: 1 },{ buttonId: '!dana1', buttonText: { displayText: 'Dana 💶' }, type: 1 },{ buttonId: '!ovo1', buttonText: { displayText: 'Ovo 💷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Payment Nya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'gopay1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Gopay\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomorg', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrg', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'dana1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Dana\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomord', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qrd', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'ovo1':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n• Payment : Ovo\nSilahkan Pilih Type Pembayaran Anda`
but = [{ buttonId: '!nomoro', buttonText: { displayText: 'Nomor 🔢' }, type: 1 },{ buttonId: '!qro', buttonText: { displayText: 'Qr 📷' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Pilih Metodenya 1Aja!', but)          
limitAdd(sender, _limit)
break
case 'nomorg':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
sewa =`*ACCEPT SEWA PERMANEN*\n• Harga : ${HargaPermanen}\n•Payment : Gopay\nNomor : ${NomorGopay}\nMetode : Nomor Gopay\nJika Minat Hubungi Owner Dan Segera Selesaikan Pembayaran Anda `
but = [{ buttonId: '!cancel', buttonText: { displayText: 'Batal✖️' }, type: 1 },{ buttonId: '!owner', buttonText: { displayText: 'owner' }, type: 1 }]
sendButMessage(from, sewa, 'Silahkan Di Lanjutkan Klik Cancel Jika Batal Klik Owner Jika Lanjut!', but)          
limitAdd(sender, _limit)
break
// Qr
case 'qrg':
case 'qro':
case 'qrd':
reply('Fitur Ini Soon!\nGunakan Pembayaran Via Nomor Terlebih Dahulu')
break
// NEXT
case 'getpp':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
anu = from
if (`${anu}@s.whatsapp.net`) {
try {
ppimg = await dha.getProfilePicture(anu)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ano = await dha.getProfilePicture(anu)
buffer = await getBuffer(ano)
dha.sendMessage(from, buffer, image, {quoted: mek})
} else {
}
limitAdd(sender, _limit)
break
case 'getdesk':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
anu = from
metadete = await dha.groupMetadata(anu)
dha.sendMessage(from, metadete.desc, text, {quoted:mek})
limitAdd(sender, _limit)
break
case 'getbio':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await dha.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
limitAdd(sender, _limit)
break
case 'getname':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = dha.contacts[ambl] != undefined ? dha.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : dha.contacts[ambl].notify || dha.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
limitAdd(sender, _limit)
break
case 'getpict':
case 'getpic':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
pictt = await dha.getProfilePicture(mentioned)
pict = await getBuffer(pictt)
dha.sendMessage(from, pict, image, {quoted: mek})
limitAdd(sender, _limit)
break 
//═════════════════════════ [ FUN MENU ] ═════════════════════════
//═════════════════════════ [ CASE BY NAYLA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════
case 'xkontol':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK') 
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 
limitAdd(sender, _limit)
break 	
case 'xganteng': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 
limitAdd(sender, _limit)
break 	
case 'xcantik': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 
limitAdd(sender, _limit)
break 	
case 'xjelek': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 
limitAdd(sender, _limit)
break 	
case 'xgoblok': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 
limitAdd(sender, _limit)
break
case 'xbego': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xpintar': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xjago': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xnolep': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xmonyet':		 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	 
case 'xbabi': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xbeban': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xbaik': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xjahat': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xanjing':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 
case 'xharam': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 
case 'xpakboy': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xpakgirl':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 
case 'xwibu': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xhebat': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xsadboy': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break 	
case 'xsadgirl': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUB")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')
dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} }) 		
limitAdd(sender, _limit)
break
case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':
case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':
case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply("ONLY GRUP")
jds = []
const AS1 = groupMembers
const CS1 = AS1[Math.floor(Math.random() * AS1.length)]
const vcardd = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:${command1}\n` 
+ `ORG: Yang Ter ${command1};\n`
+ `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
+ 'END:VCARD' 
dha.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: mek})
reply(`dia yang *ter${command1}* disini`)
limitAdd(sender, _limit)
break 
case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':
case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':
case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
nyy = fs.readFileSync('./ztag.webp')
if (!isGroup) return reply("ONLY GRUB") 	 
const AS11 = groupMembers		 
const CS21 = AS11[Math.floor(Math.random() * AS11.length)]		 
dha.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang *ter${command1}* disini` }}})
limitAdd(sender, _limit)
break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':
case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':
case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(`Ini Bukan Grub Ya Ajg🌹🤙`)
jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}` 
jds.push(C1.jid)
mentions(D1, jds, true)
limitAdd(sender, _limit)
break
case 'gantengcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *GANTENGAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😎`
reply(N)
limitAdd(sender, _limit)
break 
case 'cantikcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *CANTIKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}% 😁*`
reply(N)
limitAdd(sender, _limit)
break
case 'jelekcek': 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *J3L3K4N* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
reply(N)
limitAdd(sender, _limit)
break 
case 'goblokcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *GOBLOKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
reply(N)
limitAdd(sender, _limit)
break 
case 'begocek':	 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *BEGO* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😂`
reply(N)
limitAdd(sender, _limit)
break 
case 'pintercek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *PINTARAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😗`
reply(N)
limitAdd(sender, _limit)
break 
case 'jagocek':	 
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *JAGOAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 💪`
reply(N)
limitAdd(sender, _limit)
break 
case 'nolepcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *NOLEPAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
reply(N)
limitAdd(sender, _limit)
break 
case 'babicek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *BABIAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
reply(N)
limitAdd(sender, _limit)
break 
case 'bebancek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *BEBANAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
reply(N)
limitAdd(sender, _limit)
break 
case 'baikcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *BAIKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😇`
reply(N)
limitAdd(sender, _limit)
break 
case 'jahatcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *JAHATAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😈`
reply(N)
limitAdd(sender, _limit)
break 
case 'anjingcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return 
N = `KE *ANJINGAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 👀`
reply(N)
limitAdd(sender, _limit)
break
case 'haramcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *HARAMAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
reply(N)
limitAdd(sender, _limit)
break
case 'kontolcek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return 
N = `KE *KOMTOLAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
reply(N)
limitAdd(sender, _limit)
break 
case 'pakboycek':	
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return 
N = `KE *PAKBOYZ* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😏`
reply(N)
limitAdd(sender, _limit)
break 
case 'pakgirlcek':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
N = `KE *PAKGILR* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😏`
reply(N)
limitAdd(sender, _limit)
break 
case 'sangecek':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return	
N = `JIWA *SANGE* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
reply(N)
limitAdd(sender, _limit)
break
case 'bapercek':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return	  
N = `JIWA *BEPERAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😘`
reply(N)
limitAdd(sender, _limit)
break 


//═════════════════════════ [ FUN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'artinama':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Nama Nya?')
fun1 = await fetchJson(`https://api.dapuhy.xyz/api/fun/artinama?nama=${q}&apikey=${apidapa}`)
reply(`${fun1.result}`)
limitAdd(sender, _limit)
break
case 'artimimpi':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!q) return reply('Mimpi Apa?')
fun2 = await fetchJson(`https://api.dapuhy.xyz/api/fun/artimimpi?mimpi=${q}&apikey=${apidapa}`)
reply(`${fun2.result}`)
limitAdd(sender, _limit)
break
case 'fitnahpc':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
dha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
limitAdd(sender, _limit)
break
case 'fitnah':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
cr = body.slice(4)
cs = cr.split('|')
taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
const target = {
contextInfo: {
participant: taged,
quotedMessage: {
extendedTextMessage: {
text: cs[1]
}}}}
dha.sendMessage(from, cs[2], MessageType.text, target)
limitAdd(sender, _limit)
break
case 'gelud':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)

gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

dha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
limitAdd(sender, _limit)
break
case 'delsesigelud':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./media/' + from + '.json')) {
fs.unlinkSync('./media/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
} else {
reply('Tidak ada sesi yang berlangsung')
}
limitAdd(sender, _limit)
break
case 'delsesittt':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
limitAdd(sender, _limit)
break
case 'tictactoe':
case 'ttt':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
dha.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
limitAdd(sender, _limit)
break
case 'caklontong':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
get_result = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kuis/caklontong?apikey=Yuzzu`)
jawaban = get_result.result.result.jawaban
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
console.log(color("Jawaban: " + jawaban))
dha.sendMessage(from, `_Cak Lontong_\n\nSoal : ${get_result.result.result.soal}\n\nKisi Kisi : ${kisi_kisi}\n\nWaktu 60Detik`, text, { quoted: mek}).then(() => {
console.log(color("Jawaban: " + jawaban))
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
await sleep(60000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("_WAKTU HABIS_\n\n*Jawaban*: " + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
limitAdd(sender, _limit)
break
case 'tebakgambar':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
get_result = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kuis/tebakgambar?apikey=Yuzzu`)
jawaban = get_result.result.result.jawaban
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
ini_buffer = await getBuffer(get_result.result.result.soalImg)
dha.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 60s' }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("_WAKTU HABIS_\n\n*Jawaban*: " + jawaban)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
limitAdd(sender, _limit)
break
case 'family100':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
game4 = await fetchJson(`https://api.zeks.me/api/family100?apikey${apivinz}`)
setTimeout ( () => {
reply(`${kotak}Pertanyaan : ${game4.data.pertanyaan}`)
}, 0)
setTimeout ( () => {
reply(`_WAKTU HABIS_\nJawaban : ${game4.data.jawaban.string}`)
}, 60000)
limitAdd(sender, _limit)
break
//═════════════════════════ [ STORAGE MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════

case 'addsticker':
case 'addstiker':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stiker')
nm = body.slice(12)
if (!nm) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await dha.downloadMediaMessage(boij)
setik.push(`${nm}`)
fs.writeFileSync(`./temp/sticker/${nm}.webp`, delb)
fs.writeFileSync('./temp/setik.json', JSON.stringify(setik))
dha.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
limitAdd(sender, _limit)
break
case 'delsticker':
case 'delstiker':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(12)
wanu = setik.indexOf(nmm)
setik.splice(wanu, 1)
fs.unlinkSync(`./temp/sticker/${nmm}.webp`)
reply(`Sukses menghapus sticker ${body.slice(12)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
limitAdd(sender, _limit)
break
case 'addvn':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audio')
nm = body.slice(7)
if (!nm) return reply('Nama vn nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await dha.downloadMediaMessage(boij)
vien.push(`${nm}`)
fs.writeFileSync(`./temp/vn/${nm}.mp3`, delb)
fs.writeFileSync('./temp/vien.json', JSON.stringify(vien))
dha.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
limitAdd(sender, _limit)
break
case 'delvn':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(7)
wanu = vien.indexOf(nmm)
vien.splice(wanu, 1)
fs.unlinkSync(`./temp/vn/${nmm}.mp3`)
reply(`Sukses menghapus vn ${body.slice(7)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
limitAdd(sender, _limit)
break
case 'addimage':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply('Reply image')
nm = body.slice(10)
if (!nm) return reply('Nama image nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await dha.downloadMediaMessage(boij)
imagi.push(`${nm}`)
fs.writeFileSync(`./temp/image/${nm}.jpg`, delb)
fs.writeFileSync('./temp/imagi.json', JSON.stringify(imagi))
dha.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
limitAdd(sender, _limit)
break
case 'delimage':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(10)
wanu = imagi.indexOf(nmm)
imagi.splice(wanu, 1)
fs.unlinkSync(`./media/image/${nmm}.jpg`)
reply(`Sukses menghapus image ${body.slice(10)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
limitAdd(sender, _limit)
break
case 'vnlist':
case 'listvn':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = '*VN List :*\n\n'
for (let awokwkwk of vien) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
limitAdd(sender, _limit)
break
case 'stickerlist':
case 'liststicker':
case 'liststiker':
case 'stikerlist':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setik) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
limitAdd(sender, _limit)
break
case 'imagelist':
case 'listimage':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
teks = '*Image List :*\n\n'
for (let awokwkwk of imagi) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
limitAdd(sender, _limit)
break


//═════════════════════════ [ SOUND MENU ] ═════════════════════════
//═════════════════════════ [ BY YERIKO ] ═════════════════════════
//═════════════════════════ [ COPAS? SILAHKAN 🗿👍 ] ═════════════════════════


case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
reply(mess.wait)
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
dha.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break


//═════════════════════════ [ END ALL FITUR ] ═════════════════════════
//═════════════════════════ [ WHATSAPP BOT BY YERIKO ] ═════════════════════════
//═════════════════════════ [ COPAS? SILAHKAN 🗿👍 ] ═════════════════════════
case 'tes':
case 'test':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (isLimit(sender, isPremium, isOwner, limitCount, _limit)) return
xp0 = 10000
reply('On')
limitAdd(sender, _limit)
addLevelingXp(sender, xp0)
break	
case 'ff':
reply(`${paydaana}`)
reply(`${paygoopay}`)	
reply(`${allff}`)
reply(`${allml}`)
break

default:


if (fs.existsSync(`./media/${from}.json`)) {
gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
dha.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
dha.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: ftroli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json")}
addBalance(winR, 2000, balance)
}

/// TTTTT
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
dha.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dha.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:ftroli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
dha.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
addBalance(tty.player2, 3000, balance)
dha.sendMessage(from, ucapan1, text, {quoted:ftroli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
dha.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
        if (budy.startsWith('>')){
        if (!mek.key.fromMe && !isOwner) return
        try {
        return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
        } catch(err) {
        e = String(err)
        reply(e)
        }
        }
        if (!isOwner) return
        if (budy.startsWith('+')) {
        try {
        console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
        reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
        } catch(e) {
        console.log(e)
        err = String(e)
        js = JSON.stringify(e, null, 2)
        if (js == '{}') js = { err }
        js = JSON.stringify(js, null, 2)
        js = '```' + js + '```'
        reply('_' + err + '_\n\n' + js)
        }
        }      
        if (body.startsWith(`${prefix}${command}`)) {         
        teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
       // dha.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
       reply(teks)
        }
        } 
        if (isGroup && budy != undefined) {
        } else {
        console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
        }

	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     dha.sendMessage(`${NOwner}`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text)
     dha.sendMessage(`6282132242606@s.whatsapp.net`, `─────「 *ERROR MIN* 」─────\n\n\`\`\`${e}\`\`\`\n\n*FIX YAA MIN*\n────────────────────`, MessageType.text)
	}
    }
    }
    }
    }
    }
    }



