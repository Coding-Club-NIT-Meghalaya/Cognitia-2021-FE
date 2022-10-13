//setTimeout(slide,2000);

function slide() {
  document.getElementsByClassName("curtainContainer")[0].style.transform =
    "translatex(-150vw) ";
  document.getElementsByClassName("curtainContainer")[1].style.transform =
    "translatex(150vw)";
}
