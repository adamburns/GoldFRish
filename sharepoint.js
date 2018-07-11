function getValues(callback) {
    
    chrome.storage.local.get(['FR_Name'], function(result) {
        console.log('Fetched FR_Name as: ' + result.FR_Name);
        Name = result.FR_Name;
    });
    
    chrome.storage.local.get(['FR_Sponsor'], function(result) {
        console.log('Fetched FR_Sponsor as: ' + result.FR_Sponsor);
        Sponsor = result.FR_Sponsor;
    });

    chrome.storage.local.get(['FR_ProjectType'], function(result) {
        console.log('Fetched FR_ProjectType as: ' + result.FR_ProjectType);
        ProjectType = result.FR_ProjectType;
    });

    chrome.storage.local.get(['FR_Executed'], function(result) {
        console.log('Fetched FR_Executed as: ' + result.FR_Executed);
        Executed = result.FR_Executed;
    });

    chrome.storage.local.get(['URL'], function(result) {
        console.log('Fetched URL as: ' + result.URL);
        URL = result.URL;
        console.log('Testing URL: ' + URL);
    });

    callback(complete);
}

function setSharePointValues(callback) {
    
    document.getElementById("FileLeafRef_8553196d-ec8d-4564-9861-3dbe931050c8_$onetidIOFile").value = Name;
    console.log('Set SharePoint value for FR_Name as: ' + Name);
    document.getElementById("Sponsor0_$containereditableRegion").innerHTML = Sponsor;

    document.getElementById("EL_x0020_Executed_x0020_Date_de12219e-f637-4cdd-a2ca-db8a187fc818_$DateTimeFieldDate").value = Executed;

    document.getElementById("LinkToOpportunity_edb7d412-4d8b-4b72-9f81-d22922fb3ba9_$UrlFieldUrl").value = URL;

    document.getElementById("LinkToOpportunity_edb7d412-4d8b-4b72-9f81-d22922fb3ba9_$UrlFieldDescription").value = URL;


    callback();
}

function complete() {
    alert('The SharePoint script has finished running.');
}

getValues(setSharePointValues);
console.log('Global variable URL: ' + URL);
