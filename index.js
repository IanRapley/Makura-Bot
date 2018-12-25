var Twit = require('twit')
var unparse = require("nearley-unparse");
var grammar = require("./grammar"); // Can update the grammar to get better lists 
var dotenv = require('dotenv').config();
 
 
// Need to understand how to hide these variables before pushing to GIT
//  var T = new Twit({
//  consumer_key:         process.env.envConsumer_key,
//   consumer_secret:      process.env.envConsumer_secret,
//   access_token:         process.env.envAccess_token,
//   access_token_secret:  process.env.envAcess_secret,
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })
 
var T = new Twit({
 consumer_key:    process.env.CONSK,
  consumer_secret:     process.env.CONSS,
  access_token:         process.env.ACCESST,
  access_token_secret:  process.env.ACCESSS,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
}) 
 
 
//
//  function generates a phrase from the grammar and passes it to twitter 
//

var Cycle = function() {
	var src = unparse(grammar);
	
	T.post('statuses/update', { status: src }, function(err, data, response) {
		console.log(data)
		console.log(src)
	})
}

// retweet in every 5 minutes (300,000) 
setInterval(Cycle, 300000);