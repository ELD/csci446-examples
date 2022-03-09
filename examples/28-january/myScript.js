function addParagraph(event) {
  console.log(event.target);

  let paragraph = document.createElement("p");
  paragraph.textContent = "Some random paragraph content";

  event.target.parentElement.append(paragraph);
}

let button = document.querySelector("button");
button.addEventListener("click", addParagraph);
