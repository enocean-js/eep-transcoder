var assert = require('chai').assert
var should = require('chai').should()
var EnoceanTelegram= require("../")
var encoder_tests = require("./encoder_tests.json")

function testEEP(eep){
	it(eep, function () {
		var tests=encoder_tests[eep]
		tests.forEach(function(test){
			var enc = EnoceanTelegram.encode({
				decoded:test,
				_senderId:"aabbccdd"
			},eep)

			var dec = EnoceanTelegram.decode(enc.encoded,eep)
			for(var field in test){
				assert(Math.abs(test[field].value-dec.decoded[field].value)<=test[field].diff)
			}
		})
	})
}
describe('EnoceanTelegramTranscoder (ett)', function() {
	for(var eep in encoder_tests){
		testEEP(eep)
	}
});
