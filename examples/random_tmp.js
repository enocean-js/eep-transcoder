var Enocean = require("node-enocean")
var EnoceanTelegram = require("../")
var en = new Enocean()
en.listen("/dev/ttyUSB0")
en.on("ready",function(){
  var id=(parseInt(en.base,16)+22).toString(16)
  var ti = EnoceanTelegram.teach_in(id,"a5-02-14")
  en.send(ti)
  setInterval(function(){
    var tmp = Math.floor(Math.random()*80-20)
    var tel = EnoceanTelegram.encode({
      _senderId:id,
      decoded:{
        TMP:{
          value:tmp
        }
      }
    },"a5-02-14")
    en.send(tel.encoded)
  },1000)
})
en.on("error",console.log)
