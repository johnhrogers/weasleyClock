var foo;
function parseData(res) {
	console.log("Got response: " + res.statusCode);
	var allData = "";
	res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
    allData += chunk;
    // foo = JSON.parse(chunk).feed.entry;
    // console.log(foo.feed.entry);
    // console.log(foo[foo.length-1]['gsx$location']['$t']);
  });
  res.on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
	res.on('end', function (stuff) {
		console.log("all done?");
	});
	// if (!error && response.statusCode == 200) {
	// 	console.log(JSON.parse(body).feed.entry.length);
	// 	foo = JSON.parse(body).feed.entry;
	// 	console.log(foo[foo.length-1]['gsx$location']['$t']);
	// } else {
 //  	console.log(error)
 //  }
};
console.log("2");
var tessel = require('tessel');
var http = require('http');
var urlOld = "http://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/values?alt=json";
var url = "https://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/full?reverse=true&orderby=column:Datetime&alt=json&sq=datetime%3E42040.75";
http.get(url,parseData);
console.log("5");

// exports.parseData = parseData;