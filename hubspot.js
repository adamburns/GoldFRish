var Name = document.getElementsByClassName("private-expanding-text-input__input")[0].value;
localStorage.setItem('FR Name', JSON.stringify(Name));

var Sponsor = document.getElementsByClassName("m-bottom-1 is--heading-7")[0].innerHTML;
localStorage.setItem('FR Sponsor', JSON.stringify(Sponsor));

var ProjectType = document.getElementsByClassName("uiButton private-button private-button--default private-button--form private-form__control private-form__control--inline isInline private-button__dropdown-opener uiDropdown__button private-button--non-link")[2].getElementsByClassName("uiDropdown__buttonContents private-dropdown__button__contents")[0].innerText;
localStorage.setItem('FR ProjectType', JSON.stringify(ProjectType));

var Executed = document.getElementById("uid-ctrl-187").value;
localStorage.setItem('FR Executed', JSON.stringify(Executed));

var URL = window.location.href;
localStorage.setItem('FR URL', JSON.stringify(URL));
