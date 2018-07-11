function setValues(callback){
	var Name = document.getElementsByClassName("private-expanding-text-input__input")[0].value;
	chrome.storage.local.set({'FR_Name': Name}, function() {
		console.log('Stored FR_Name as: ' + Name);
	});
	
    var Sponsor = document.getElementsByClassName("m-bottom-1 is--heading-7")[0].innerHTML;
    chrome.storage.local.set({'FR_Sponsor': Sponsor}, function() {
        console.log('Stored FR_Sponsor as: ' + Sponsor);
    });

    var ProjectType = document.getElementsByClassName("uiButton private-button private-button--default private-button--form private-form__control private-form__control--inline isInline private-button__dropdown-opener uiDropdown__button private-button--non-link")[2].getElementsByClassName("uiDropdown__buttonContents private-dropdown__button__contents")[0].innerText;
    chrome.storage.local.set({'FR_ProjectType': ProjectType}, function() {
        console.log('Stored FR_ProjectType as: ' + ProjectType);
    });

    var Executed = document.getElementById("uid-ctrl-22").value;
    chrome.storage.local.set({'FR_Executed': Executed}, function() {
        console.log('Stored FR_Executed as: ' + Executed);
    });

    var URL = window.location.href;
    chrome.storage.local.set({'URL': URL}, function() {
        console.log('Stored URL as: ' + URL); 
    });

	callback();
}

function complete(){
	alert('The HubSpot script has finished running.');
}

setValues(complete);

