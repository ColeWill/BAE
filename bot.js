require('dotenv').config();

console.log('user: '+ process.env.USERNAME_ENV);
console.log('password: '+ process.env.PASSWORD_ENV);

// to run prompt in bash
// var prompt = require('prompt-sync')();
var ConversationV1 = require ('watson-developer-cloud/conversation/v1');

var workspace_ID = process.env.WORKSPACE_ID_ENV;

var conversation = new ConversationV1({
	//Set up Conversation service wrapper
	username:process.env.USERNAME_ENV,
	password:process.env.PASSWORD_ENV,
	path: { workspace_id: workspace_ID},
	version_date: '2017-07-29'
});

var INPUT = 'Goodbye';
var context = {};
//Start conversation with an empty wrapper
conversation.message({
	workspace_id: workspace_ID,
	input: {'text': INPUT},
	context:context
}, function(err, response){
	if (err)
		console.log('error:',err);
	else
		console.log(JSON.stringify(response, null, 2));
});

//Process the conversation response

function processResponse(err, response){
	if (err){
		console.error(err);
		return;
	}

	//  if an intent is dettected log to console
	if (response.intents.length > 0){
		console.log('Detected intent: # ' + response.intents[0].intent);
	}
	//display the output from dialog, if any.
	if (response.output.text.length != 0){
		console.log(response.output.text[0]);
	}

//to run prompt in bash
	// // Prompt for the next round of input.
	// var newMessageFromUser = prompt('>> ');
	// conversation.message({
	// 	input: {text:newMessageFromUser },
	// 	context : response.context,
	// }, processResponse);
}	

