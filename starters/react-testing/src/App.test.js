import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import fetchMock from 'jest-fetch-mock';

// This is a mock response object so that we're not actually making network requests
const mockObject = {
  firstName: "Terry",
  lastName: "Medhurst",
  birthDate: "2000-12-25",
  university: "Capitol University",
  todos: [
    { id: 17, todo: "Create a cookbook with favorite recipes" },
    { id: 18, todo: "Bake a pie with some friends" },
    { id: 54, todo: "Start a daily journal" },
  ],
};

// This resets our `fetch` mocks before each of the following tests we run
describe("Testing App.js", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // TODO: Render the <App /> and assert `users and their todos` is in the document via the `screen` object and the `getByText` method
  it("renders without error", () => {});

  // TODO: Use `fireEvent` to fire two events: a `change` event for the number input and a `submit` event for the form
  // TODO: Then, use `waitFor` for data to come into view when the fetch request has returned and modified state (hint: use the firstName or lastName as the text to get using `getByText`)
  it("fetches the user when an ID is submitted", async () => {
    fetchMock.mockResponse(JSON.stringify(mockObject));
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const form = screen.getByRole("form");

    await waitFor(() => {});
  });

  // TODO: Do the same as above, but ensure that the useEffect hook has a proper dependencies list so that the toHaveBeenCalled assertion passes
  it("fetches the user's todos right after the user object is fetch (useEffect works)", async () => {
    fetch.mockResponse(JSON.stringify(mockObject));
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const form = screen.getByRole("form");

    // HINT: Do the same as the above test
    await waitFor(() => {});

    // HINT: wait for some text from the todo array to come into view using getByText
    await waitFor(() => {});

    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
