const form = document.getElementById("spamform");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = event.target[0].value;
  const email = event.target[1].value;

  alert(`Just kidding, we won't do anything with the name and email you supplied: ${name}, ${email}`);
});

// function handleSubmit(event) {
//   event.preventDefault();
//
//   const name = event.target[0].value;
//   const email = event.target[1].value;
//
//   alert(`Just kidding, we won't do anything with the name and email you supplied: ${name}, ${email}`);
// }

