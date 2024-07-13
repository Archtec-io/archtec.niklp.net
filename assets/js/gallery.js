function imgClick(elem) {
  document.getElementById("modal-img").src = elem.src;
  document.getElementById("modal-img-container").style.display = "block";
  document.getElementById("img-caption").innerHTML = elem.alt;
}