import { render, screen } from '@testing-library/react';
import Home from './Home';


test('renders Home', () => {
    render(<Home />);
    const element = screen.getByTestId('homeTest')
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Home");

});



