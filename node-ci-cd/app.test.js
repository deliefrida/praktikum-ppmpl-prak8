import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('renders the initial count value as 0', () => {
  render(<Counter />);
  const countValue = screen.getByTestId('count-value');
  expect(countValue).toHaveTextContent('0');
});

test('increments count when increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count-value');
  expect(countValue).toHaveTextContent('1');
});

test('decrements count when decrement button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement');
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count-value');
  expect(countValue).toHaveTextContent('-1');
});