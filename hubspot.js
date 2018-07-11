function setValues(callback){
	var Name = document.querySelector('h2.m-bottom-0 input.private-expanding-text-input__input').value;
	chrome.storage.local.set({'FR_Name': Name}, function() {
		console.log('Stored FR_Name as: ' + Name);
	});
	
    var Sponsor = document.querySelector('div.is--module.private-card.private-card__wrapper.private-card--compact.namespaced-hack-section.Section__ScrollWrapper-jajphQ.eSErqF[data-sidebar-key="Company"] div.m-bottom-1.is--heading-7').innerHTML;
    chrome.storage.local.set({'FR_Sponsor': Sponsor}, function() {
        console.log('Stored FR_Sponsor as: ' + Sponsor);
    });

    var ProjectType = document.querySelector('div.private-form__set.private-form__set--floating.floating-field-with-border[data-profile-property="dealtype"] span.private-dropdown__button-label.uiDropdown__buttonLabel').innerHTML.replace(/<\!--.*?-->/g, "");
    chrome.storage.local.set({'FR_ProjectType': ProjectType}, function() {
        console.log('Stored FR_ProjectType as: ' + ProjectType);
    });

    var Executed = document.querySelector('div.private-form__set.private-form__set--floating.floating-field-with-border[data-profile-property="date_engagement_letter_executed"] input.private-expanding-text-input__input.private-datepicker__input[data-field="date_engagement_letter_executed"]').value;
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

