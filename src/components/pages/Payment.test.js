import { render, screen } from '@testing-library/react';
import Payment from './Payment';


test('renders Payment', () => {
    render(<Payment />);
    const element = screen.getByTestId('payTest')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Payment");

});

test('renders Payment State', () => {
    render(<Payment />);
    const element = screen.getByTestId('payTestState')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Amount");

});



