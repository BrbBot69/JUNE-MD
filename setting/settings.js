const fs = require('fs')

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "27767494368"
global.developer = "27767494368"
global.bot = "27818232269"
global.devname = "♤𝗑ᴾᴿᴼ♧"
global.ownername = "♤𝗑ᴾᴿᴼ♧"
global.botname = "BALLAS𝗑ᴾᴿᴼ"
global.versisc = "2"
global.packname = "⎋BALLAS𝗑ᴾᴿᴼ"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/27767494368"
global.linkyt = "https://www.youtube.com/supreme"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = ["","!",".",",","#","/","🎭","〽️"]
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = false
global.autoread = true
global.autobio = true
global.anti92 = false
global.owneroff = false
global.autoswview = true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://files.catbox.moe/7xxkld.jpg"
global.thumbown = "https://files.catbox.moe/7xxkld.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363402785346228@newsletter*"
global.channelname = "ー♤𝗑ᴾᴿᴼ♧"
global.channel = "hatsapp.com/channel/0029Vb2W2vAADTOKmdoDxB0m"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ Developer Only!! ]` \n This feature is for developers only!!",
  owner: " `[ Owner Only!! ]` \n This feature is for owners only!!",
  group: " `[ Group Only!! ]` \n This feature is for group chats only!!",
  private: " `[ Private Only!! ]` \n This feature is for private chats only!!",
  admin: " `[ Admin Only!! ]` \n This feature is for admins only!!",
  botadmin: " `[ Bot Admin Only!! ]` \n This feature is for bot admins only!!",
  wait: " `[ Wait!! ]` \n Please wait, loading...",
  error: " `[ Error!! ]` \n An error occurred!!",
  done: " `[ Done!! ]` \n Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
