/* Selle javascripti allikas: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
 * Seda scripti kasutades saab kinnitada menüüd ülemäärele. 
 * See script teeb veebilehe menüü kasutamist mugavaks.
 */



// Kui kasutaja keerab lehte, rakendatakse WindowOnScroll
window.onscroll = function() {WindowOnScroll()};

// "navbar" elemendi saamine
var navbar = document.getElementById("navbar");

// "navbar" elemendi nihke saamine
var sticky = navbar.offsetTop;

// "sticky" klassi lisamine navbar juurde, kui kasutaja keerab lehte. Eemalda "sticky" kui keerata pole vaja
function WindowOnScroll() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}