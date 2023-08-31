import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Title } from './Title'; 

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
};

describe('Title component', () => {
  it('renders title information correctly', () => {
    render(
      <BrowserRouter>
        <Title title={mockTitle} />
      </BrowserRouter>
    );

    const titleElement = screen.getByTestId('title');
    expect(titleElement).toBeInTheDocument();

    expect(screen.getByText(/Mock Title \/ モックタイトル/)).toBeInTheDocument();
    expect(screen.getByText(/Jan 2023/)).toBeInTheDocument();
    expect(screen.getByText(/TV/)).toBeInTheDocument();

    expect(screen.getByText(/Genre 1/)).toBeInTheDocument();
    expect(screen.getByText(/Genre 2/)).toBeInTheDocument();

    const scoreElement = screen.getByText(/Score : 8/);
    expect(scoreElement).toBeInTheDocument();
    expect(scoreElement).toHaveStyle({ color: 'green' });
    expect(screen.getByText(/Rank : 1/)).toBeInTheDocument();
  });
});
