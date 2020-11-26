/* JavaSript oli võetud Youtube'i videost: https://www.youtube.com/watch?v=v186gRZYyo4&t=180s */

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