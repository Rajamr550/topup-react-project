import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import JsonDataDisplay from './Home';


test('renders Home', () => {
    render(
        <BrowserRouter>
            <JsonDataDisplay />
        </BrowserRouter>
    );
    const element = screen.getByTestId('homeTest')
    // expect(element).toBeInTheDocument();
    // expect(element).toHaveTextContent("Welcome to Vodafone Rechaarge App");

    expect(element).toHaveTextContent("Plans");
    // expect(screen.getByText(/+/i)).toBeInTheDocument()
    expect(screen.getByText(/Plans/i)).toBeInTheDocument()
    expect(screen.getByText(/ID/i)).toBeInTheDocument()
    expect(screen.getByText(/Plan/i)).toBeInTheDocument()
    expect(screen.getByText(/Details/i)).toBeInTheDocument()

});
