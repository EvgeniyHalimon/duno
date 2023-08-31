import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SliderCardInfo } from './SliderCardInfo'; // Путь к вашему компоненту

const mockTitle = {
  mal_id: 1,
  title: 'Mock Title',
  title_japanese: 'モックタイトル',
  images: {
    webp: { image_url: 'mock-image-url' },
  },
  aired: { string: 'Jan 2023' },
  type: 'TV',
  genres: [{ mal_id: 1, name: 'Genre 1' }, { mal_id: 2, name: 'Genre 2' }],
  score: 8.0,
  rank: 1,
  synopsis: 'Mock synopsis for testing purposes.',
};

describe('SliderCardInfo component', () => {
  it('renders title information correctly', () => {
    render(
      <BrowserRouter>
        <SliderCardInfo title={mockTitle} />
      </BrowserRouter>
    );

    const slideElement = screen.getByTestId('slide');
    expect(slideElement).toBeInTheDocument();

    expect(screen.getByText(/Mock Title \/ モックタイトル/)).toBeInTheDocument();
    expect(screen.getByText(/TV/)).toBeInTheDocument();
    expect(screen.getByText(/Jan 2023/)).toBeInTheDocument();

    const scoreElement = screen.getByText(/Score: 8/);
    expect(scoreElement).toBeInTheDocument();
    expect(scoreElement).toHaveStyle({ color: 'green' });

    expect(screen.getByText(/Genre 1/)).toBeInTheDocument();
    expect(screen.getByText(/Genre 2/)).toBeInTheDocument();

    const synopsisElement = screen.getByText(/Mock synopsis for testing purposes./);
    expect(synopsisElement).toBeInTheDocument();

    const showMoreLink = screen.getByText(/...show more/);
    expect(showMoreLink).toBeInTheDocument();
    expect(showMoreLink).toHaveAttribute('href', `/title/${mockTitle.mal_id}`);
  });
});
