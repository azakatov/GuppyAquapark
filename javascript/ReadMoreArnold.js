/* JavaSript oli võetud Youtube'i videost: https://www.youtube.com/watch?v=v186gRZYyo4&t=180s 
 * Klõpsates nupule "Loe lähemalt Arnoldist Schwarzeneggerist", ilmub peidetud tekst ja meedia ja nupu tekst vahetub sõnaks "Peida". 
 * Klõpsates nupule "Peida", ilmunud tekst peitub ning nupu nimetus muutub tekstiks "Loe lähemalt Arnoldist Schwarzeneggerist"
*/

function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var bttn = document.getElementById("bttn");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    bttn.innerHTML = "Loe lähemalt Arnoldist Schwarzeneggerist";
    more.style.display = "none";
  } else {
      dots.style.display = "none";
      bttn.innerHTML = "Peida";
      more.style.display = "inline";
    }
  }