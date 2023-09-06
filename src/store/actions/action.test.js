/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';
import { fetchAnimeData, fetchMangaData } from '../../utils/fetch';
import { mockTitles, singleTitle } from './mockDataForTests';

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

    it('should create an action to SET_TITLES', () => {
        const expectedAction = {
            type: TitleActionTypes.SET_TITLES,
            payload: singleTitle
        };
        expect(actions.setTitles(singleTitle)).toEqual(expectedAction);
    });

    it('should create an action to SET_RANDOM_TITLES', () => {
        const expectedAction = {
            type: TitleActionTypes.SET_RANDOM_TITLES,
            payload: mockTitles
        };
        expect(actions.setRandomTitles(mockTitles)).toEqual(expectedAction);
    });

    it('should create an action to SET_PAGINATED_TITLES', () => {
        const expectedAction = {
            type: TitleActionTypes.SET_PAGINATED_TITLES,
            payload: mockTitles
        };
        expect(actions.setPaginatedTitles(mockTitles)).toEqual(expectedAction);
        expect(actions.setPaginatedTitles([])).toEqual({...expectedAction, payload: []});
    });

    it('should create an action to SET_LAST_TITLE_PAGE', () => {
        const lastPage = 33
        const expectedAction = {
            type: TitleActionTypes.SET_LAST_TITLE_PAGE,
            payload: lastPage
        };
        expect(actions.setLastTitlePage(lastPage)).toEqual(expectedAction);
    });
});

describe('fetchPopularTitle', () => {
    beforeEach(() => {
        Storage.prototype.getItem = jest.fn()
    })

    afterEach(() => {
        Storage.prototype.getItem.mockRestore()
    });

    it('should fetchPopularTitle with anime flag and dispatch the correct actions', async () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'anime';

        const store = mockStore(initialState);

        const response = {
            data: {
                pagination: {
                    last_visible_page: mockLastVisiblePage,
                },
                data: mockTitles
            }
        }

        const animeMockFunction = fetchAnimeData.fetchPopularAnime.mockResolvedValue(response);

        const mangaMockFunction = fetchMangaData.fetchPopularManga.mockResolvedValue(response)

        Storage.prototype.getItem.mockReturnValue(mockTopic)

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];

        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(expectedActions);
        expect(animeMockFunction).toHaveBeenCalled();
        expect(mangaMockFunction).not.toHaveBeenCalled();
        expect(animeMockFunction).toHaveBeenCalledWith(page);
    });

    it('should fetchPopularTitle with manga flag and dispatch the correct actions', async () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'manga';

        const store = mockStore(initialState);

        const response = {
            data: {
                pagination: {
                    last_visible_page: mockLastVisiblePage,
                },
                data: mockTitles
            }
        }

        const mangaMockFunction = fetchMangaData.fetchPopularManga.mockResolvedValue(response)

        const animeMockFunction = fetchAnimeData.fetchPopularAnime.mockResolvedValue(response);

        Storage.prototype.getItem.mockReturnValue(mockTopic)

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];

        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(expectedActions);
        expect(animeMockFunction).not.toHaveBeenCalled();
        expect(mangaMockFunction).toHaveBeenCalled();
        expect(mangaMockFunction).toHaveBeenCalledWith(page);
    });

    it('should throws error in fetchPopularTitle', async () => {
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
