import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders a fetch pokemon header', () => {
  render(<App />);
  const linkElement = screen.getByText(/fetch pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders the pokemon I entered into the input', async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/pokemon name.../i);
  const button = screen.getByRole('button');

  fireEvent.change(inputElement, { target: { value: 'ditto' }});
  fireEvent.click(button);

  await waitFor(() => {
    screen.getByText(/ditto/i);
  });
})
