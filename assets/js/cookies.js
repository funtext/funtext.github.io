$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 1000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
});