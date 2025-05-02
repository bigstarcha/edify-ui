import HomePage from "@components/HomePage"
import { render, screen } from "@testing-library/react";

describe('Home Page', () => {
    it('should render the home page', () => {
        const { container } = render(<HomePage />);
        console.log('container:', container.innerHTML);
        expect(screen.getByText('Home page.')).toBeInTheDocument();
    });
})