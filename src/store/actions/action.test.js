/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';
import { fetchAnimeData, fetchMangaData } from '../../utils/fetch';
import { mockTitles, singleTitle } from './mockDataForTests';
import { initialState } from '../reducer/title-reducer/title-reducer.ts'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../utils/fetch')
//reuse mocks
const expectedError = [{
    payload: true,
    type: "SET_TITLE_ERROR",
}]

describe('title action creators', () => {
    let store
    beforeEach(() => {
        store = mockStore(initialState);
    })

    afterEach(() => {
        store.clearActions()
    });
    it.each([
        { type: TitleActionTypes.SET_IS_TITLE, payload: 'anime', action: actions.isTitleFlag},
        { type: TitleActionTypes.SET_TITLES, payload: singleTitle, action: actions.setTitles},
        { type: TitleActionTypes.SET_RANDOM_TITLES, payload: mockTitles, action: actions.setRandomTitles},
        { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: [33], action: actions.setLastTitlePage},
        { type: TitleActionTypes.SET_PAGINATED_TITLES, payload: mockTitles, action: actions.setPaginatedTitles},
        { type: TitleActionTypes.SET_PAGINATED_TITLES, payload: [], action: actions.setPaginatedTitles},
    ])('should create an action to $type', ({ type, payload, action }) => {
        expect(action(payload)).toEqual({type, payload});
    });
});

describe('fetchPopularTitle', () => {
    let store
    const mocks = {
        topic: 'anime',
        page: 1,
        mockLastVisiblePage: 5
    }

    const response = {
        data: {
            pagination: {
                last_visible_page: mocks.mockLastVisiblePage,
            },
            data: mockTitles
        }
    }
    const expectedActions = [
        { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockTitles },
        { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mocks.mockLastVisiblePage },
        { type: TitleActionTypes.SET_IS_TITLE, payload: mocks.topic },
    ];
    beforeEach(() => {
        Storage.prototype.getItem = jest.fn(() => mocks.topic)
        fetchAnimeData.fetchPopularAnime.mockResolvedValue(response);

        fetchMangaData.fetchPopularManga.mockResolvedValue(response)
        store = mockStore(initialState);
    })

    afterEach(() => {
        Storage.prototype.getItem.mockRestore()
        store.clearActions()
    });

    it.each([
        { topic: 'anime', call: fetchAnimeData.fetchPopularAnime, notCall: fetchMangaData.fetchPopularManga },
        { topic: 'manga', call: fetchMangaData.fetchPopularManga, notCall: fetchAnimeData.fetchPopularAnime },
    ])('should fetchPopularTitle with $topic flag and dispatch the correct actions', async ({ topic, call, notCall }) => {
        mocks.topic = topic
        expectedActions[2].payload = topic;

        await store.dispatch(actions.fetchPopularTitle(mocks.page))
        expect(store.getActions()).toEqual(expectedActions);
        expect(notCall).not.toHaveBeenCalled();
        expect(call).toHaveBeenCalledWith(mocks.page);
        expect(Storage.prototype.getItem).toHaveBeenLastCalledWith('topic')
    });

    it('should throws error in fetchPopularTitle', async () => {
        fetchMangaData.fetchPopularManga.mockResolvedValue(null); // because we have 'manga' in mocked Storage

        await store.dispatch(actions.fetchPopularTitle(null))
        expect(store.getActions()).toEqual(expectedError);
    });
});
