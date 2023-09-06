/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';
import { fetchAnimeData, fetchMangaData } from '../../utils/fetch';
import { mockPopularTitles } from './mockDataForTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../utils/fetch')

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

describe('fetchPopularTitle action', () => {
    beforeEach(() => {
        Storage.prototype.getItem = jest.fn()
    })

    afterEach(() => {
        Storage.prototype.getItem.mockRestore()
    });

    it('should fetch popular anime titles and dispatch the correct actions', async () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'anime';

        const store = mockStore(initialState);

        const response = {
            data: {
                pagination: {
                    last_visible_page: mockLastVisiblePage,
                },
                data: mockPopularTitles
            }
        }

        const mockFunction = fetchAnimeData.fetchPopularAnime.mockResolvedValue(response);

        const mockFn = fetchMangaData.fetchPopularManga.mockResolvedValue(response)

        Storage.prototype.getItem.mockReturnValue(mockTopic)

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockPopularTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];

        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(expectedActions);
        expect(mockFunction).toHaveBeenCalled();
        expect(mockFn).not.toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledWith(page);
    });

    it('should fetch popular manga titles and dispatch the correct actions', async () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'manga';

        const store = mockStore(initialState);

        const response = {
            data: {
                pagination: {
                    last_visible_page: mockLastVisiblePage,
                },
                data: mockPopularTitles
            }
        }

        const mockFn = fetchMangaData.fetchPopularManga.mockResolvedValue(response)

        const mockFunction = fetchAnimeData.fetchPopularAnime.mockResolvedValue(response);

        Storage.prototype.getItem.mockReturnValue(mockTopic)

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockPopularTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];

        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(expectedActions);
        expect(mockFunction).not.toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith(page);
    });

    it('should throws error', async () => {
        const page = '1';
        const mockTopic = 'anime';
        const store = mockStore(initialState);

        const err = [{
            payload: true,
            type: "SET_TITLE_ERROR",
        }]

        Storage.prototype.getItem.mockReturnValue(mockTopic)

        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(err);
    });
});
