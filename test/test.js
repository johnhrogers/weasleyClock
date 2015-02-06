var assert = require("assert");
var request = require("request");
var http = require("http");
var mocha = require("mocha");

function parseData(res) {
	console.log("Got response: " + res.statusCode);
	assert.equal(200, res.statusCode);
};
// var suite = mocha.suite;
// var parseData = require("../index.js").parseData;
var url = "http://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/values?alt=json";
suite('HelloWorld', function(){
  test('check request for response == 200', function(done){
		request(url,function(error, response) {
			assert.equal(200, response.statusCode);
			done();
		})
  }),
  test('check http for response == 200', function(done){
		http.get(url,parseData);
		done();
  })
}),
suite('Data checks', function(){
  test('check for body', function(done){
		// var foo;
		http.get(url,function(res) {
			res.on('data', function (body) {
		    // console.log('BODY: ' + chunk);
		    var foo = JSON.parse(body).feed.entry;
		    // console.log(foo.feed.entry);
		    // console.log(foo[foo.length-1]['gsx$location']['$t']);
		    assert.equal("H", foo[1]['gsx$location']['$t']);
				done();
		  });
		});
  })
})






