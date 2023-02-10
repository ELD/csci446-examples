// Recall, this is an IIFE or Immediately Invoked Function Expression
(() => console.log('JavaScript loaded!'))();

// This is the base URL for the API we're using.
// You'll interpolate the path we're fetching from using the template string syntax (i.e. `${DUMMY_API_URL}/api/blah`)
const DUMMY_API_URL = 'https://dummyjson.com';

// TODO: The rest of this file is for you to write code in following the lab instructions. Good luck!
const fetchButton = document.getElementById('todoFetcher');
fetchButton.addEventListener('click', async () => {
  const response = await fetch(`${DUMMY_API_URL}/todos`);
  const json = await response.json();

  const todoLabel = document.createElement('p');
  todoLabel.innerText = `Total todos: ${json.total}`;

  const list = document.createElement("ul");
  json.todos.forEach((todo) => {
    const item = document.createElement("li");
    item.innerText = todo.todo;
    list.appendChild(item);
  });

  document.body.appendChild(todoLabel);
  document.body.appendChild(list);
});

// Part 2: POSTing data to the Postbin
const POSTBIN_URL = 'https://enpdcgbk7ub.x.pipedream.net';

const form = document.getElementById('postData');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    payload: event.target[0].value
  };

  const result = await fetch(POSTBIN_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data)
  });

  console.log(result);
});
