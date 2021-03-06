//fetch values stored in chrome's local storage, and then stores them to global variables
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
    });
    
    //if ProjectLead is incomplete, then default to 'Chari Graham'
    chrome.storage.local.get(['ProjectLead'], function(result) {
        console.log('Fetched ProjectLead as: ' + result.ProjectLead);
        ProjectLead = result.ProjectLead;
        if(ProjectLead.length <= 1) {
            ProjectLead = "Chari Graham";
        }
    });
    
    if(callback)
    {
        setTimeout(callback(), 50);
    }
}
//embeds values into SharePoints HTML, some of which may require extra user input
function setSharePointValues(callback) {
    try
    {
        document.getElementById("FileLeafRef_8553196d-ec8d-4564-9861-3dbe931050c8_$onetidIOFile").value = Name;
    }
    catch(e)
    {
        alert("There was an error entering the Name into SharePoint, please let the developer know.");
        console.log(e);
    }

    try
    {
        document.getElementById("Sponsor_$containereditableRegion").innerHTML = Sponsor;
    }
    catch(e)
    {
        alert("There was an error entering the Sponsor into SharePoint, please let the developer know.");
        console.log(e);
    }

    try
    {
        document.getElementById("EL_x0020_Executed_x0020_Date_de12219e-f637-4cdd-a2ca-db8a187fc818_$DateTimeFieldDate").value = Executed;
    }
    catch(e)
    {
        alert("There was an error entering the Executed Date into SharePoint, please let the developer know.");
        console.log(e);
    }
    
    try
    {
        document.getElementById("LinkToOpportunity_edb7d412-4d8b-4b72-9f81-d22922fb3ba9_$UrlFieldUrl").value = URL;
    }
    catch(e)
    {
        alert("There was an error entering the URL into SharePoint, please let the developer know.");
        console.log(e);
    }

    try
    {    
        document.getElementById("LinkToOpportunity_edb7d412-4d8b-4b72-9f81-d22922fb3ba9_$UrlFieldDescription").value = URL.match(/\d+/g).map(Number)[1];
    }
    catch(e)
    {
        alert("There was an error entering the HubSpot ID into SharePoint, please let the developer know.");
        console.log(e);
    }

    try
    {
        document.getElementById("ReportType_ad17dae0-b5b6-4308-a494-ce06b25a8275_$DropDownChoice").value = ProjectType;
    }
    catch(e)
    {
        alert("There was an error entering the Project Type into SharePoint, please let the developer know.");
        console.log(e);
    }
    
    try
    {
        document.getElementById("ReportStatus1_43c10367-8f65-4d65-867c-6c060116293b_$DropDownChoice").value = "Preliminary";
    }
    catch(e)
    {
        alert("There was an error entering the Project Status into SharePoint, please let the developer know.");
        console.log(e);
    }

    try
    {    
        document.getElementById("ProjectLead_4c03e8ff-0d1d-4f45-a90b-ddce9abe5cca_$ClientPeoplePicker_InitialHelpText").innerHTML = ProjectLead;
    }
    catch(e)
    {
        alert("There was an error entering the Project Lead into SharePoint, please let the developer know.");
        console.log(e);
    }

    if(callback)
    {    
        callback();
    }
}

//an alert message to inform the user that the script is complete
function complete() {
    alert('The SharePoint script has finished running.');
}

getValues(function() { 
    setSharePointValues(function() {
        complete(function() {
        });
    });
});
