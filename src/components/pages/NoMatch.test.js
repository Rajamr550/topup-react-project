import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NoMatch from './NoMatch';

test('renders NoMatch', () => {
    render(
    <BrowserRouter>
      <NoMatch />
  
    </BrowserRouter>
    );
    const linkElement = screen.getByTestId("nomatchTest")
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Please enter a valid URL");  
  });