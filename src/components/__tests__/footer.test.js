import { render, screen, cleanup } from '@testing-library/react'
import Footer from '../footer/footer';

test('should render footer component', () => {
    render(<Footer/>);
    const footerElement = screen.getByTestId('footer-1');
    expect(footerElement).toBeInTheDocument();
})
