import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { Titles } from './Titles';
import { store } from '../../store/store';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('Titles component', () => {
    it('renders paginated titles and pagination correctly', () => {
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);

        const mockState = {
            title: {
                paginatedTitles: [
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
                ],
                lastTitlePage: 10,
                currentTitlePage: 1,
                isTitle: true,
            },
        };

        render(
            <Provider store={store}>
                <Titles />
            </Provider>
            , { initialState: mockState });

        const paginatedTitles = screen.getByTestId('paginated-titles');
        expect(paginatedTitles).toBeInTheDocument();

        const pagination = screen.getByTestId('pagination');
        expect(pagination).toBeInTheDocument();

        expect(dispatchMock).toHaveBeenCalledTimes(1);
    });

    it('fetches paginated titles when the current page changes', () => {
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);
    
        const { rerender } = render(
          <Provider store={store}>
            <Titles />
          </Provider>
        );
    
        rerender(
          <Provider store={store}>
            <Titles />
          </Provider>
        );
    
        expect(dispatchMock).toHaveBeenCalledTimes(1);
      });
});
