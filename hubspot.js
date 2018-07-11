getValue

var Name = document.getElementsByClassName("private-expanding-text-input__input")[0].value;
chrome.storage.local.set({'FR_Name': Name}, function() {
//todo
console.log('FR Name is: ' + Name);
});


var Sponsor = document.getElementsByClassName("m-bottom-1 is--heading-7")[0].innerHTML;
chrome.storage.local.set({'FR Sponsor': Sponsor}, function() {
//todo
});
var ProjectType = document.getElementsByClassName("uiButton private-button private-button--default private-button--form private-form__control private-form__control--inline isInline private-button__dropdown-opener uiDropdown__button private-button--non-link")[2].getElementsByClassName("uiDropdown__buttonContents private-dropdown__button__contents")[0].innerText;
chrome.storage.local.set({'FR ProjectType': ProjectType}, function() {
//todo
});

var Executed = document.getElementById("uid-ctrl-17").value;
chrome.storage.local.set({'FR Executed': Executed}, function() {
//todo
});

var URL = window.location.href;
chrome.storage.local.set({'FR URL': URL}, function() {
//todo
});

alert("The HubSpot script has run, click me again on a SharePoint page to copy the data");
