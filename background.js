chrome.browserAction.onClicked.addListener(function(tabs) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
   
        var url = tabs[0].url;
        //if current tab is on SharePoint, run sharepoint.js
        if (url.includes("https://factrightllc367.sharepoint.com/_layouts/15/NewDocSet.aspx")) {
            chrome.t
            chrome.tabs.executeScript(null, {file: "sharepoint.js"});
        //else if current tab is on HubSpot, run hubspot.js
        } else if (url.includes("https://app.hubspot.com/contacts/")) {
            chrome.t
            chrome.tabs.executeScript(null, {file: "hubspot.js"});
        } else {
        //otherwise, if current tab is neither, run alert.js
            chrome.t
            chrome.tabs.executeScript(null, {file: "alert.js"});
        }
    });
});
