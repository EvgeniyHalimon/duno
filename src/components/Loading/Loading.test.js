import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';
import loadingGif from '../../assets/anime-confused.gif'

describe('Loading component', () => {
    it('renders Loading component', () => {
        render(<Loading/>)

        const loadingComponent = screen.getByTestId('loading-gif')
        expect(loadingComponent).toBeInTheDocument()
        expect(loadingComponent).toHaveAttribute('alt', 'gif');
        expect(loadingComponent).toHaveAttribute('src', loadingGif);
        expect(loadingComponent).toHaveClass('loading');
    });
})