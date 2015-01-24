var foo;
console.log("1");
function parseData(error, response, body) {if (!error && response.statusCode == 200) {console.log(JSON.parse(body).feed.entry.length);foo = JSON.parse(body).feed.entry;console.log(foo[foo.length-1]['gsx$location']['$t']);}}
console.log("2");
var request = require('request');
console.log("3");
var url = "https://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/values?alt=json";
console.log("4");
request(url,parseData);

