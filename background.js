chrome.browserAction.onClicked.addListener(function(tabs) {
   chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
   
      var url = tabs[0].url;
   
      if (url.includes("https://factrightllc367.sharepoint.com/_layouts/15/NewDocSet.aspx")) {
         // if statement
         chrome.t
         chrome.tabs.executeScript(null, {file: "sharepoint.js"});
      } else if (url.includes("https://app.hubspot.com/contacts/")) {
         // else if statement
         chrome.t
         chrome.tabs.executeScript(null, {file: "hubspot.js"});
      } else {
         chrome.t
         chrome.tabs.executeScript(null, {file: "alert.js"});
      }
   });
});
