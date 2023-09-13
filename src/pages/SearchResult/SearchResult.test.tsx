import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SearchResult } from './SearchResult';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { fetchTitleSearch } from '../../store/actions/title-action-creators';

jest.mock('react-redux');
jest.mock('../../hooks/useTypesSelector');
jest.mock('../../store/actions/title-action-creators');

describe('SearchResult page', () => {
  const mockSearchResults = [
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
          large_image_url: undefined,
        },
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
          large_image_url: undefined,
        },
      },
      aired: null,
      genres: [
        {
          mal_id: 3,
          name: 'Action',
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

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(jest.fn());
    (useTypesSelector as jest.Mock).mockReturnValue({ titleSearchResult: mockSearchResults, lastTitlePage: 3 });
  });

  it('renders the list of search results', () => {
    render(
      <MemoryRouter initialEntries={['/search-result-list']}>
        <Routes>
          <Route path="/search-result-list" element={<SearchResult />} />
        </Routes>
      </MemoryRouter>
    );

    mockSearchResults.forEach((result) => {
      expect(screen.getByText(`${result.title} /`)).toBeInTheDocument();
    });
  });

  it('renders pagination controls', () => {
    render(
      <MemoryRouter initialEntries={['/search-result-list']}>
        <Routes>
          <Route path="/search-result-list" element={<SearchResult />} />
        </Routes>
      </MemoryRouter>
    );

    const pagination = screen.getByTestId('paginated-titles');
    expect(pagination).toBeInTheDocument();
  });

  it('dispatches fetchTitleSearch on component mount', () => {
    render(
      <MemoryRouter initialEntries={['/search-result-list']}>
        <Routes>
          <Route path="/search-result-list" element={<SearchResult />} />
        </Routes>
      </MemoryRouter>
    );

    expect(useDispatch()).toHaveBeenCalledWith(fetchTitleSearch('Action', 1));
  });
});
