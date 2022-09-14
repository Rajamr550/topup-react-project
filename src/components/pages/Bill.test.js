import { render, screen } from '@testing-library/react';
import Bill from './Bill';


test('renders Bill', () => {
    render(<Bill />);
    const element = screen.getByTestId('billTest')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Bill");

});

test('renders Bill State', () => {
    render(<Bill />);
    const element = screen.getByTestId('billTestState')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Bill Amount");

});

