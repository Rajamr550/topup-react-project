import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

test('renders layout test', () => {
    render(
    <BrowserRouter>
      <Layout />
  
    </BrowserRouter>
    );
    const linkElement = screen.getByTestId("layoutTest")
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Welcome to Vodafone Rechaarge App");  

  });