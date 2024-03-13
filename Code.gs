function onSub(e) {
  var chronicleSoarWebhookURI = '<YOUR CHRONICLE SOAR WEBHOOK URL>'

  var items = e.response.getItemResponses();
  obj = {}
  // Loop thought the responses to add them to the JSON
  for (i in items){
    // 
    obj[items[i].getItem().getTitle()] = items[i].getResponse()
  }

  // Let's also get the current timestamp and add that to the JSON
  var formattedDate = Utilities.formatDate(new Date(), "GMT", "MM-dd-yyyy HH:mm:ss");
  obj['datetime'] = formattedDate;
  Logger.log("%s", JSON.stringify(obj));

  // POST to webhook
  var options = {
    "method": "GET",
    "headers": {
        "Content-Type": "application/json"
    },
    "payload": JSON.stringify(obj)
  };
  var response = UrlFetchApp.fetch(chronicleSoarWebhookURI, options);
  Logger.log(response.getContentText);
}
