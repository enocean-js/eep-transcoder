# eep-transcoder

a module for encoding and decoding Enocean Equipment Profile (EEP) Telegrams.
This is a work in progress. **For now only RORG a5 is supported**...

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

### decoding

    var tel = "55000a0701eba5ff0385080006be370001ffffffff4400c5"
    var dec = EnocenTelegram.decode(tel,"a5-02-03")
    console.log(dec.decoded)
