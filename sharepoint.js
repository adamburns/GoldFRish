StorageArea.get(['Name'], function(result) {
   console.log('FR Name is: ' + result.key);
   document.getElementById("FileLeafRef_8553196d-ec8d-4564-9861-3dbe931050c8_$onetidIOFile").value = result.key;
});

function getValues(callback) {
    
    chrome.storage.local.get(['FR_Name'], function(result) {
        console.log('Fetched FR_Name as: ' + result.FR_Name);
        var Name = result.FR_Name;
    });
    
    chrome.storage.local.get(['FR_Sponsor'], function(result) {
        console.log('Fetched FR_Sponsor as: ' + result.FR_Sponsor);
        var Sponsor = result.FR_Sponsor;
    });

    chrome.storage.local.get(['FR_ProjectType'], function(result) {
        console.log('Fetched FR_ProjectType as: ' + result.FR_ProjectType);
        var ProjectType = result.FR_ProjectType;
    });

    chrome.storage.local.get(['FR_Executed'], function(result) {
        console.log('Fetched FR_Executed as: ' + result.FR_Executed);
        var Executed = result.FR_Executed;
    });

    chrome.storage.local.get(['URL'], function(result) {
        console.log('Fetched URL as: ' + result.URL);
        var URL = result.URL;
    });

    callback(setSharePointValues);
}

function setSharePointValues(callback) {
    

    callback(complete);
}

function complete() {

} 
