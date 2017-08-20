# eep-transcoder

a module for encoding and decoding Enocean Equipment Profile (EEP) Telegrams.
This is a work in progress. **For now only RORG a5,d5 and f6 (no VLD) is supported**...

**The API will most likely still change a lot**


## installing

    npm i -S eep-transcoder

## usage

you can use this module in both node.js and in the browser.

### node.js

    var EnoceanTelegram = require("eep_transcoder")

### browser

    <script src="eep_transcoder.min.js"></script>

## Examples

### encoding

the encode function expects two parameters. one json representation of the telegram to be encoded, and the eep according to which it should be encoded.

    var tel ={
      decoded:{
        TMP:{value:20}
      },
      _senderId: "aabbccdd"
    }
    var enc = EnocenTelegram.encode(tel,"a5-02-03")
    console.log(enc.encoded)

the telegram will be filled with usefull defaults. So you only need to provide the data you want to change. this will most probably be the senderId and the data part which for json is stored in the `decoded` field.

find out what fields can be used for which telgram in the [documentation](http://node-enocean.com/)

### decoding

    var tel = "55000a0701eba5ff0385080006be370001ffffffff4400c5"
    var dec = EnoceanTelegram.decode(tel,"a5-02-03")
    console.log(dec.decoded)

### teach in Telegrams

you can also create teach in telegrams. to do so you need the eep you want to encod by and a senderId which should be derived from enocean.base

    var id=(parseInt(en.base,16)+22).toString(16)
    var ti = EnoceanTelegram.teach_in(id,"a5-02-14")
    console.log(ti)
