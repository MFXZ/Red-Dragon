//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `Nama bot : MFC BOTZ |by MFX|
My Creator is MFX` //Costomize Alive Message (type your message in `` )

global.owner = ['628981614707'] //Owner number in aive msg
global.premium = ['628981614707'] //Owner Number info
global.ownernomer = '628981614707' //Owner Number <<<

global.ownername = 'MFX' //Owner Name
global.botname = ' MFC BOTZ' //Bot Name

global.button = '☰ SUMBER SC ☰' //Costomize A Button Name In Alive Message
global.btnurl = '-' //Change Your Button's URL

global.region = 'Indonesia, Jakarta , Waitan' //Country Region

global.packname = 'Di buat oleh' //Bot Pacage Name
global.author = 'MFC BOTZ' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©MFX.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = '' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Selesai ✅',
    admin: 'Hanya admin yang bisa menggunakan command nya',
    botAdmin: 'Bot belum jadi admin !!',
    owner: 'Hanya owner yang bisa menggunakan command nya',
    group: 'Command hanya untuk grub',
    private: 'Command hanya bisa di gunakan di private chat !!',
    bot: 'This Feature Is Only For Bot😝',
    wait: 'Sabar...',
    error: 'ERROR 404 : Yah fitur error bro',
    endLimit: 'Limit mu dah habis bro tunggu besok buat di reset limit nya'}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 25,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
