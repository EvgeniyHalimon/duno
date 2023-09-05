/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('title action creators', () => {
    it('should create an action to SET_IS_TITLE', () => {
        const data = 'anime';
        const expectedAction = {
            type: TitleActionTypes.SET_IS_TITLE,
            payload: data
        };
        expect(actions.isTitleFlag(data)).toEqual(expectedAction);
    });
});

const mockPopularTitles = [
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
    {
        url: 'https://example.com/title3',
        title: 'Title 3',
        type: 'Anime',
        score: '9.0',
        rank: 2,
        synopsis: 'Synopsis for Title 3',
        images: {
            webp: {
                image_url: '',
                large_image_url: undefined
            }
        },
        aired: null,
        genres: [
            {
                mal_id: 5,
                name: 'Fantasy',
            },
            {
                mal_id: 6,
                name: 'Magic',
            },
        ],
        duration: '22 min per episode',
        episodes: 24,
        rating: 'PG-13',
        status: 'Finished Airing',
        mal_id: 13579,
    },
    {
        url: 'https://example.com/title4',
        title: 'Title 4',
        type: 'Manga',
        score: '7.8',
        rank: 5,
        synopsis: 'Synopsis for Title 4',
        images: {
            webp: {
                image_url: '',
                large_image_url: undefined
            }
        },
        aired: null,
        genres: [
            {
                mal_id: 7,
                name: 'Slice of Life',
            },
            {
                mal_id: 8,
                name: 'Drama',
            },
        ],
        chapters: 100,
        scored_by: 1000,
        rating: 'PG',
        status: 'Finished',
        mal_id: 24680,
    },
    {
        url: 'https://example.com/title5',
        title: 'Title 5',
        type: 'Anime',
        score: null,
        rank: null,
        synopsis: 'Synopsis for Title 5',
        images: {
            webp: {
                image_url: '',
                large_image_url: undefined
            }
        },
        aired: null,
        genres: [
            {
                mal_id: 9,
                name: 'Comedy',
            },
            {
                mal_id: 10,
                name: 'School',
            },
        ],
        duration: '20 min per episode',
        episodes: 26,
        rating: 'PG-13',
        status: 'Ongoing',
        mal_id: 98765,
    },
];

const initialState = {
    titles: [],
    randomTitles: [],
    titleError: false,
    paginatedTitles: [],
    lastTitlePage: 1,
    isTitle: 'anime',
    titleSearchResult: [],
    searchTitleValue: "Berserk",
    titleGenres: [],
    titleByGenre: [],
    currentTitle: null,
    currentTitlePage: 1,
    popularTitle: [],
    titleReviews: []
}

describe('fetchPopularTitle action', () => {

    

    it('should fetch popular titles and dispatch the correct actions', () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'anime';

        

        const store = mockStore(initialState);

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockPopularTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];

        store.dispatch(actions.fetchPopularTitle(page)).then(() => {
            console.log("🚀 ~ file: action.test.js:233 ~ awaitstore.dispatch ~ store.getActions():", store.getActions())
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
