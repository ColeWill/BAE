require('dotenv').config();

var accountSid = process.env.TWILIO_ACCOUNTSID;
var authToken = process.env.TWILIO_AUTHTOKEN;



var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var toNumber = process.env.TWILIO_MY_CELL ;
var fromNumber = process.env.TWILIO_NUMBER ;

client.messages.create({
	body: 'This is the test message',
	to: toNumber,  // text this number
	from: fromNumber // from this number
})
.then((message) => console.log(message.id));