function clearValues(callback){
    try
    {
        var Name = null;
        chrome.storage.local.set({'FR_Name': Name}, function(){
            console.log('Cleared FR_Name');
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var Sponsor = null;
        chrome.storage.local.set({'FR_Sponsor': Sponsor}, function() {
            console.log('Cleared FR_Sponsor');
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var ProjectType = null;
        chrome.storage.local.set({'FR_ProjectType': ProjectType}, function() {
            console.log('Cleared FR_ProjectType');
        });
    }
    catch(e)
    {
        console.log(e);
    }
    
    try
    {
        var Executed = null;
        chrome.storage.local.set({'FR_Executed': Executed}, function() {
            console.log('Cleared FR_Executed');
        });
    }
    catch(e)
    {
        console.log(e);
    }
    
    try
    {
        var URL = null;
        chrome.storage.local.set({'URL': URL}, function() {
            console.log('Cleared URL');
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var ProjectLead = null;
        chrome.storage.local.set({'ProjectLead': ProjectLead}, function() {
            console.log('Cleared ProjectLead');
        });
    }
    catch(e)
    {
        console.log(e);
    }
}

function setValues(callback){
	try
    {
        var Name = document.querySelector('h2.m-bottom-0 input.private-expanding-text-input__input').value;
	    chrome.storage.local.set({'FR_Name': Name}, function() {
		    console.log('Stored FR_Name as: ' + Name);
	    });
	}
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var Sponsor = document.querySelector('div.is--module.private-card.private-card__wrapper.private-card--compact.namespaced-hack-section.UISection__ScrollWrapper-eQImbY.jpCPEv[data-sidebar-key="Company"] div.m-bottom-1.is--heading-7').innerText;
        chrome.storage.local.set({'FR_Sponsor': Sponsor}, function() {
            console.log('Stored FR_Sponsor as: ' + Sponsor);
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var ProjectType = document.querySelector('div.private-form__set.private-form__set--floating.floating-field-with-border[data-profile-property="dealtype"] span.private-dropdown__button-label.uiDropdown__buttonLabel').innerHTML.replace(/<\!--.*?-->/g, "");
        chrome.storage.local.set({'FR_ProjectType': ProjectType}, function() {
            console.log('Stored FR_ProjectType as: ' + ProjectType);
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var Executed = document.querySelector('div.private-form__set.private-form__set--floating.floating-field-with-border[data-profile-property="date_engagement_letter_executed"] input.private-expanding-text-input__input.private-datepicker__input[data-field="date_engagement_letter_executed"]').value;
        chrome.storage.local.set({'FR_Executed': Executed}, function() {
            console.log('Stored FR_Executed as: ' + Executed);
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var URL = window.location.href;
        chrome.storage.local.set({'URL': URL}, function() {
            console.log('Stored URL as: ' + URL); 
        });
    }
    catch(e)
    {
        console.log(e);
    }

    try
    {
        var ProjectLead = document.querySelector('div.private-form__set.private-form__set--floating.floating-field-with-border[data-profile-property="project_lead"] span.private-dropdown__button-label.uiDropdown__buttonLabel').innerHTML.replace(/<\!--.*?-->/g, "");
        chrome.storage.local.set({'ProjectLead': ProjectLead}, function() {
            console.log('Stored ProjectLead as: ' + ProjectLead);
        });
    }
    catch(e)
    {
        console.log(e);
    }

	callback();
}

function complete(){
	alert('The HubSpot script has finished running.');
}

clearValues(setValues(complete));

