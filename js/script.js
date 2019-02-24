var search = document.querySelector(".search-button");
var modal = document.querySelector(".modal-search");
var date = modal.querySelector("[name=date-name]")
var name = modal.querySelector("[name=people-name]");
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
  };

  date.focus();
});

form.addEventListener("submit", function(evt) {
  if (!date.value || !name.value) {
    evt.preventDefault();
    modal.classList.remove("modal-on");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.toggle("modal-error");
  }
});
