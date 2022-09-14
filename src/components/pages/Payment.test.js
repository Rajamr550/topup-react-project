import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import Payment from './Payment';


test('renders pay tests', () => {
    render(
    <BrowserRouter>
      <Payment />
  
    </BrowserRouter>
    );
    const element = screen.getByTestId('payTest')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Payment Page");
  //  expect(element).toHaveTextContent("Amount 785cricket packsDisney + hotstar subscription for 3 months, 2GB data, outgoing calls at 1p per second45 days");  
    expect(element).toHaveTextContent("PAY");
    expect(element).toHaveTextContent("Cancel"); 
  });

test('renders Payment States', () => {
    render( <BrowserRouter>
        <Payment />
    
      </BrowserRouter>);
    const element = screen.getByTestId('amount')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Amount");

});



