var search=document.querySelector(".search-button");
var modal=document.querySelector(".modal-search");
var date=modal.querySelector("[name=date]")
var form=modal.querySelector("form");
var name=modal.querySelector("[name=people-name]");



search.addEventListener("click", function (evt) {
evt.preventDefault();
modal.classList.toggle("modal-show");
date.focus();
});

form.addEventListener("submit", function (evt) {
  if (date.value||name.value){
evt.preventDefault();
console.log("Нужно ввести логин и пароль");
  }
});
