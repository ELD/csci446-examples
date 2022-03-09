const form = document.getElementById("addForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.submitEvent = event;
  console.log(event);
});
