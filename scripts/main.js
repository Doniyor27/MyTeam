var burgerButton = document.querySelector("#burger__btn");
var overlay = document.querySelector("#overlay");
var xBtn = document.querySelector("#x__btn");
var body = document.querySelector("body");
var mobileMenu = document.querySelector("#mobile__menu");

burgerButton.addEventListener("click", function(e) {
  e.preventDefault();

  this.classList.toggle("crossed");
  overlay.classList.toggle("vissible");
  xBtn.classList.toggle("vissible");
  body.classList.toggle("no__scroll");
  mobileMenu.classList.toggle("vissible");
});

xBtn.addEventListener("click", function(e) {
  e.preventDefault()

  overlay.classList.toggle("vissible");
  this.classList.toggle("vissible");
  body.classList.toggle("no__scroll");
  mobileMenu.classList.toggle("vissible");

});