function importGSS(json) {
  // At this point, json.feed.entry is an array of spreadsheet rows.  Hurray!
  console.log(json.feed.entry.length);
  console.log(json.feed.entry[184].title.$t);
  console.log(json.feed.entry[184].content.$t);
}

var john = $.getScript(
  "https://spreadsheets.google.com/feeds/list/1zb2XfqgDrv8pG1hqgigFiMI3oqY4a83B1kPxE5BU9wU/od6/public/values?alt=json-in-script&callback=importGSS"
);