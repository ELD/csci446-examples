const form = document.getElementById("loadPost");
const postRoot = document.getElementById("postRoot");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const postNumber = event.target[0].value;

  // WARN: Single event listener example
  // Look at line 70 for the definition of this function
  /* fetchAndPresentPost(postNumber, postRoot); */

  fetch(`https://dummyjson.com/posts/${postNumber}`)
    .then((response) => response.json())
    .then((json) => createPost(postRoot, json));
});

function createPost(root, data) {
  const article = document.createElement("article");
  const header = document.createElement("h1");
  const articleBody = document.createElement("p");
  const tags = document.createElement("p");
  const innerTags = document.createElement("span");

  header.textContent = data.title;
  articleBody.textContent = data.body;
  tags.textContent = "Tags: ";
  innerTags.textContent = data.tags.map((tag) => `#${tag}`).join(" ");
  innerTags.className = "tags";
  tags.append(innerTags);

  const form = createUpdateForm(data.id);
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newPostNumber = event.target[0].value;
    fetch(`https://dummyjson.com/posts/${newPostNumber}`)
      .then((response) => response.json())
      .then((newData) => {
        header.textContent = newData.title;
        articleBody.textContent = newData.body;
        innerTags.textContent = newData.tags.map((tag) => `#${tag}`).join(" ");
        event.target[0].value = newData.id;
      });
  });

  article.append(header);
  article.append(articleBody);
  article.append(tags);
  article.append(form);

  root.append(article);
}

function createUpdateForm(currentArticleNumber) {
  const form = document.createElement("form");
  const postNumberInput = document.createElement("input");
  const submitButton = document.createElement("button");

  postNumberInput.type = "number";
  postNumberInput.value = currentArticleNumber;

  submitButton.type = "submit";
  submitButton.textContent = "Replace Post";

  form.append(postNumberInput);
  form.append(submitButton);

  return form;
}

// WARN: This is not relevant unless you're going with the single event listener example
// Check out line 10 for where this function would be called
// function fetchAndPresentPost(postNumber, rootEl, elements) {
//   if (elements === undefined) {
//     console.log('creating elements');
//     const article = document.createElement("article");
//     const header = document.createElement("h1");
//     const articleBody = document.createElement("p");
//     const tags = document.createElement("p");
//     const innerTags = document.createElement("span");
//
//     const form = document.createElement("form");
//     const postNumberInput = document.createElement("input");
//     const submitButton = document.createElement("button");
//
//     postNumberInput.type = "number";
//     postNumberInput.value = postNumber;
//
//     submitButton.type = "submit";
//     submitButton.textContent = "Replace Post";
//
//     // INFO: I forgot these in-class, which is why it didn't work
//     article.append(header);
//     article.append(articleBody);
//     article.append(tags);
//     article.append(form);
//
//     form.append(postNumberInput);
//     form.append(submitButton);
//
//     article.append(form);
//
//     elements = {
//       article,
//       header,
//       articleBody,
//       tags,
//       innerTags,
//       form,
//     };
//   }
//
//   fetch(`https://dummyjson.com/posts/${postNumber}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const { article, header, articleBody, tags, innerTags, form } = elements;
//
//       header.textContent = data.title;
//       articleBody.textContent = data.body;
//       tags.textContent = "Tags: ";
//       innerTags.textContent = data.tags.map((tag) => `#${tag}`).join(" ");
//       innerTags.className = "tags";
//       tags.append(innerTags);
//
//       form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         fetchAndPresentPost(event.target[0].value, rootEl, elements);
//       })
//
//       rootEl.append(article);
//     });
// }

