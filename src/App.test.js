import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders App', () => {
  render(
  <BrowserRouter>
    <App />

  </BrowserRouter>
  );
  const linkElement = screen.getByTestId("app-test")
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Welcome to Vodafone Rechaarge App");

  expect(linkElement).toHaveTextContent("Home");

});
