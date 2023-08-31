/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { PaginatedTitles } from './PaginatedTitles';
import { BrowserRouter } from 'react-router-dom';

describe('PaginatedTitles component', () => {
  it('renders titles correctly', () => {
    const mockTitles = [
      {
        url: 'https://example.com/title1',
        title: 'Title 1',
        type: 'Anime',
        score: '8.5',
        rank: 1,
        synopsis: 'Synopsis for Title 1',
        images: {
          webp: {
            image_url: '',
            large_image_url: undefined
          }
        },
        aired: null,
        genres: [
          {
            mal_id: 1,
            name: 'Action',
          },
          {
            mal_id: 2,
            name: 'Adventure',
          },
        ],
        duration: '24 min per episode',
        episodes: 12,
        rating: 'PG-13',
        status: 'Finished Airing',
        mal_id: 12345,
      },
      {
        url: 'https://example.com/title2',
        title: 'Title 2',
        type: 'Manga',
        score: null,
        rank: null,
        synopsis: 'Synopsis for Title 2',
        images: {
          webp: {
            image_url: '',
            large_image_url: undefined
          }
        },
        aired: null,
        genres: [
          {
            mal_id: 3,
            name: 'Comedy',
          },
          {
            mal_id: 4,
            name: 'Romance',
          },
        ],
        chapters: 50,
        scored_by: 500,
        rating: 'R',
        status: 'Ongoing',
        mal_id: 67890,
      },
    ];
    const { getAllByTestId } = render(
      <BrowserRouter>
        <PaginatedTitles paginatedTitles={mockTitles} />
      </BrowserRouter>
    );

    const titleElements = getAllByTestId('title'); 

    expect(titleElements).toHaveLength(mockTitles.length);
  });

  it('renders skeleton titles when no data is provided', () => {
    const { getAllByTestId } = render(<PaginatedTitles paginatedTitles={[]} />);

    const skeletonTitleElements = getAllByTestId('skeleton-title');

    expect(skeletonTitleElements).toHaveLength(5);
  });
});
