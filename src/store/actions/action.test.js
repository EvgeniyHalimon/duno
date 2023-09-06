/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';
import { fetchAnimeData } from '../../utils/fetch';
import { mockPopularTitles } from './mockDataForTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../utils/fetch')

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
    beforeEach(() => {
        Storage.prototype.getItem = jest.fn()
    })

    afterEach(() => {
        Storage.prototype.getItem.mockRestore()
    });

    it('should fetch popular titles and dispatch the correct actions', async () => {
        const page = 1;
        const mockLastVisiblePage = 5;
        const mockTopic = 'anime';

        const store = mockStore(initialState);

        const err = [{
            payload: true,
            type: "SET_TITLE_ERROR",
        }]
        
        fetchAnimeData.fetchPopularAnime.mockResolvedValue({data: {
            pagination: {
                last_visible_page: mockLastVisiblePage,
            },
            data: mockPopularTitles
        }});

        Storage.prototype.getItem.mockResolvedValue(mockTopic)

        const expectedActions = [
            { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockPopularTitles },
            { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mockLastVisiblePage },
            { type: TitleActionTypes.SET_IS_TITLE, payload: mockTopic },
        ];
        
        await store.dispatch(actions.fetchPopularTitle(page))
        expect(store.getActions()).toEqual(expectedActions);
    });
});
