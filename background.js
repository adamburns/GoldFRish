chrome.browserAction.onClicked.addListener(function(tab) {
   
   if (location.href.includes(https://factrightllc367.sharepoint.com/_layouts/15/NewDocSet.aspx)) {
      // if statement
      chrome.t
      chrome.tabs.executeScript(null, {file: "sharepoint.js"});
   } else if (location.href.includes(https://app.hubspot.com/contacts/2777169/deal/299043516/properties)) {
      // else if statement
      chrome.t
      chrome.tabs.executeScript(null, {file: "hubspot.js"});
   } else {
      chrome.t
      chrome.tabs.executeScript(null, {file: "alert.js"});
   }
   
});

