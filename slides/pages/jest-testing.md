---
# try also 'default' to start simple
theme: seriph
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## CSCI446 March 29 2023 lecture

  Learning how to wire up MongoDB to Express
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Testing with Jest

---

# What is Jest?

- A test runner for JavaScript
- A set of assertions to match expected versus actual output
- A collection of methods that allow for:
    - Setup and teardown steps – things that should be repeated for all tests
    - Utilities to build mocks so you can isolate dependencies

---

# Why Jest?

- It's fast
- It's modern
- It supports _more than just React_
    - (You could use this to test Express applications, too!)
- It includes additional assertions and mocking utilities
- It's a rich test runner that can run in the background and watch for file changes

---

# Why Test?

- It's easier than manual testing
    - If we didn't write automated tests, we'd have to test by hand and guess why something failed
- It encodes expectations in a way that can be version-controlled
- It can catch regressions as you make changes
- It can instances where something would only fail _sometimes_

---

# What do I test?

- Anything and everything!
    - **Except anything you _don't_ own** (what does that mean?)
        - Don't test external libraries or interfaces (i.e. don't test anything related to `useEffect`, test the side effect of a `useEffect` hook)
    - Fetcher functions
        - Mocking out the `fetch` call, of course
    - React Components
        - Ensuring that the entire `<App />` renders without error
        - We can also test components in isolation

---

# How do I use it?

- Just `npm add -D jest`
    - The `-D` flag saves it to the `devDependencies` array
- Add:
    ```javascript
    // package.json
    {
        "scripts": {
            "test": "jest",
        }
    }
    ```
- Run `npm jest` to get started

---

# Next Time

- How do we integrate this with React applications using `create-react-app`?
- Setup instructions
- Some sample test walkthroughs

---

# Resources

- [Jest Getting Started Guide](https://jestjs.io/docs/getting-started)
- [Create React App Testing Documentation](https://create-react-app.dev/docs/running-tests/)
- [Jest React Tutorial](https://jestjs.io/docs/tutorial-react)

---
