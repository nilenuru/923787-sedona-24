var search = document.querySelector(".search-button");
var modal = document.querySelector(".modal-search");
var arrival = modal.querySelector("[name=arrival]");
var departure = modal.querySelector("[name=departure]");
var adult = modal.querySelector("[name=people-adult]");
var childern = modal.querySelector("[name=people-childern]");
var form = modal.querySelector("form");

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modal.classList.contains("modal-on")){
      modal.classList.add("modal-off");
      modal.classList.remove("modal-on");
      modal.classList.remove("modal-error");
  } else {
    modal.classList.add("modal-on");
    modal.classList.remove("modal-off");
  }
  arrival.focus();
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value ||!departure.value|| !adult.value || !childern.value) {
    evt.preventDefault();
    modal.classList.remove("modal-on");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.toggle("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-on")) {
      modal.classList.remove("modal-on");
      modal.classList.add("modal-off");
      modal.classList.add("search-form-error");
    }
  }
});
