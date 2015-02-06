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
var http = require('http');

var web = require("../web.js");

suite('HelloWorld', function(){
  test('check request for response == 200', function(done){
		request(url,function(error, response) {
			assert.equal(200, response.statusCode);
			done();
		})
  }),
  test('check http for response == 200', function (done){
		http.get(url,parseData);
		done();
  })
});
suite('web', function() {
	test('module', function() {
		assert(web);
	});
	test('get', function(done) {
		var url = "http://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/values?alt=json";
		web.get(url, function(content) {
			var obj;
			assert.doesNotThrow(function() {
				obj = JSON.parse(content);
			});
			assert(obj);
			done();
		});
	});
})
