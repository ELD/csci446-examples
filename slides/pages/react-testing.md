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

# Testing React

---

# But First, Logistics!

<div class="grid grid-cols-3 gap-2">
<div>

## Individual

- React Testing
    - Assigned: April 17
    - Due: April 24
- SPA Authentication,
    - Assigned: April 24
    - Due: May 1
</div>

<div>

## Final Project

- Project Pitch
    - Assigned: April 17
    - Due: April 24
    - Feedback turned around in 48 hours
- Project Submission
    - Assigned: April 26
    - Due: May 5
</div>

<div>

## Written Assignment

- Decision Record (one pager)
    - Assigned: April 24
    - Due: May 5
</div>
</div>

---

# Now onto testing React!

---

# What Comes with CRA (create-react-app)?

- Jest as our test runner
- Testing Library[^1] helpers
- That's it

[^1]: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

# How does Jest identify tests?

- Jest keys off of filename suffixes or file paths
- Files that match this are run by Jest
- Paths:
    - Anything in a `__tests__` directory
- File name suffixes:
    - `.test.js`
    - `.spec.js`

---

# What should I test with a React Component?

- User interactions
- Any state updates that mutate the view
- Side effects of network effects
- __Note: we don't want to test anything React-specific ourselves__
    - i.e. that...
        - state changes happened
        - re-renders were triggered
        - hooks fired properly
        - etc

---

# How do I test a component?

- Render it using the `render` method in `react-testing-library`
- Use `screen` from `react-testing-library` to search the rendered component's DOM
- Use Jest assertions to ensure the component rendered as expected

```javascript{all|2,6|2,7|all}
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
```

---

# Okay, but user interactions can modify state. How do I test that?

- The `fireEvent` object from `react-testing-library`
    - `fireEvent(node: HTMLElement, event: Event)`


```javascript
import { fireEvent } from 'react-testing-library';

fireEvent(
  getByText(container, 'Submit'),
  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }),
)
```

---

# Resources

- [Create React App Testing Docs](https://create-react-app.dev/docs/running-tests/)
- [React Testing Library Intro](https://testing-library.com/docs/react-testing-library/intro)
- [Mocking `fetch` in Jest](https://www.leighhalliday.com/mock-fetch-jest)
- [Mock Service Worker (MSW)](https://mswjs.io/)
