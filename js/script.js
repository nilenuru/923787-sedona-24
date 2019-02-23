var search=document.querySelector(".search-button");
var modal=document.querySelector(".modal-search");
var date=modal.querySelector("[name=date-of-arrival]")



search.addEventListener("click", function (evt) {
evt.preventDefault();
modal.classList.toggle("modal-show");
date.focus();
});
