# JavaScript Fetch Lab

## Objectives

- Gain familiarity with the `fetch` API
    - Using `fetch` to make GET requests from external APIs
    - Using `fetch` to make POST requests to API request bins
- Use JavaScript Promises _or_ `async`/`await` to handle asynchronous code
- Use the DOM APIs to fetch and insert new elements into the DOM

## Getting Started

This lab folder contains:
- An HTML5 document with all the elements required for the lab
- An empty `script.js` file where you'll write your JavaScript

## Tasks

### 1. Fetching a list of todos

Let's begin by fetching a list of todos (or tasks) from a sample API. We're
going to be using the [DummyJSON](https://dummyjson.com) service for this piece of the lab.

1. Open the `index.html` file in your browser. You should see a blank page
    without any content. That's okay. Open your developer tools (Ctrl + Shift + I/Cmd + Shift + I)
    and make sure that the `script.js` file is being pulled in. You should see a message in the JavaScript
    console that says, `JavaScript loaded!`.
1. Let's query the API and fetch the list of all todos. In the `script.js` file,
    write a fetch call that hits the todos endpoint (see API details [here](https://dummyjson.com/docs/todos)).
    Once you've retrieved the data using the `fetch` call, make sure to chain promises until you get the JSON
    returned by the API. Try `console.log`ing the data so you can dig through it and see what's returned.
1. Pick some of the data from the JSON object and construct new elements on the page. For example, let's display the
    total number of returned todos. We can do this like this:
    ```js
    fetch(...)
        .then((body) => body.json())
        .then((json) => {
            const p = document.createElement('p');
            p.textContent = `Total todos: ${json.total}`;
            document.body.appendChild(p);
            // ...
        })
    ```

### 2. Attaching the todos fetch to an event listener

1. Let's add a button on the page that will trigger the fetch call we wrote in the previous exercise.

1. Once we've added the button, let's attach an event listener to it from the `script.js`
    file. We can add event listeners like this:
    ```js
    const button = document.getElementById('fetchButton');
    button.addEventListener('click', () => {
        // ...
    });
    ```

1. Let's move the fetch call into that event listener so it's only triggered when
the button is pressed.

### 3. POSTing data with `fetch`

1. Let's post some data to a random API postbin. There are several sites we can use, but
let's use [RequestBin](https://requestbin.com) for this. Use the public bin option to avoid
having to sign-in.

1. You can follow directions on how to set up a `fetch` requests that sends data via the
    RequestBin site, or you can assemble a request similar to this:
    ```js
    const BIN_URL = 'https://url-to-bin.net/';
    const payload = {
        "type": "text data",
        "data": "sample data",
    };
    fetch(BIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    ```

### 4. Rewrite your `fetch` calls using `async`/`await` _or_ using Promise chains
Depending on how you write them the first time, try rewriting your async calls to use
the opposite interface. If you used Promises, try using `async`/`await` syntax and see
where the syntactic sugar abstracts the `Promise` type away from you.

If you used `async`/`await`, try using Promises and see if being more exlicit about what is
and isn't being handled asynchronously is more clear to you.

For the remainder of the class, it'll be up to you to choose the style you prefer when
writing asynchronous code, so figure out what makes the most sense to you.
