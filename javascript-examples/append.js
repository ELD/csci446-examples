const form = document.getElementById("addtolist");
const list = document.getElementById("itemlist");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const item = event.target[0].value;
  const position = Number(event.target[1].value);
  const listItem = document.createElement("li");
  let listChildren = [...list.children];
  debugger;

  // More verbose way to do this:
  // listItem.append(document.createTextNode(item));
  listItem.textContent = item;

  // The React-y way to do this:
  if (position === 0) {
    listChildren = [listItem, ...listChildren];
  } else if (position >= listItem.length) {
    listChildren = [...listChildren, listItem];
  } else {
    listChildren = [
      ...listChildren.slice(0, position),
      listItem,
      ...listChildren.slice(position)
    ];
  }

  // Imperative method to splice the existing array
  //const rest = listChildren.splice(position, 0, listItem);
  //listChildren.push(...rest);

  list.replaceChildren(...listChildren);

  event.target[0].value = "";
});
