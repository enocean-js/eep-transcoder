var Enocean = require("node-enocean")
var EnoceanTelegram = require("../")
var en = new Enocean()

en.listen("/dev/ttyUSB0")
//en.on("data",console.log)
en.on("known-data",console.log)
en.on("ready",function(){
  en.startLearning()
  var tel = "55000a0701eba5ff037a080006be370001ffffffff49001c"
var dec = EnoceanTelegram.decode(tel,"a5-02-14")
  console.log(dec.decoded)
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
    console.log(tel)
  },1000)
})
en.on("error",console.log)
//55000a0701eba500007908ffa087163003ffffffffff00f3
//55000a0701eba5ff037a080006be370001ffffffff49001c
