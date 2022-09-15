import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import JsonDataDisplay from './Home';
import '@testing-library/jest-dom'

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
    // expect(screen.getByText(/Plans/i)).toBeInTheDocument()
    // expect(screen.getByText(/ID/i)).toBeInTheDocument()
    // expect(screen.getByText(/Plan/i)).toBeInTheDocument()
    // expect(screen.getByText(/Details/i)).toBeInTheDocument()

    expect(element).toHaveTextContent("ID");

    expect(element).toHaveTextContent("Plan");

    expect(element).toHaveTextContent("Details");
    expect(element).toHaveTextContent("Plans");
    expect(element).toHaveTextContent("Amount");

    expect(element).toHaveTextContent("Choose Plan");
    expect(element).toHaveTextContent("1");
    expect(element).toHaveTextContent("2");
    expect(element).toHaveTextContent("3");
    expect(element).toHaveTextContent("4");
    expect(element).toHaveTextContent("499");
    expect(element).toHaveTextContent("785");
    expect(element).toHaveTextContent("325");
    expect(element).toHaveTextContent("899");







    expect(element).toHaveTextContent("Validity");


});
