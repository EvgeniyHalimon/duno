/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/await-async-utils */
import { AxiosResponse } from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './title-action-creators';
import { TitleActionTypes } from '../action-types/title-action-types';
import { fetchAnimeData, fetchMangaData } from '../../utils/fetch';
import { mockTitles } from './mockDataForTests';
import { initialState } from '../reducer/title-reducer/title-reducer'

const middlewares = [thunk];
const mockStore = configureMockStore<any, any>(middlewares);

jest.mock('../../utils/fetch');

const expectedError = [{
  payload: true,
  type: TitleActionTypes.SET_TITLE_ERROR,
}];

describe('title action creators', () => {
  it.each([
    { type: TitleActionTypes.SET_IS_TITLE, payload: 'anime', action: actions.isTitleFlag('anime') },
    { type: TitleActionTypes.SET_TITLES, payload: mockTitles, action: actions.setTitles(mockTitles) },
    { type: TitleActionTypes.SET_RANDOM_TITLES, payload: mockTitles, action: actions.setRandomTitles(mockTitles) },
    { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: 33, action: actions.setLastTitlePage(33) },
    { type: TitleActionTypes.SET_PAGINATED_TITLES, payload: mockTitles, action: actions.setPaginatedTitles(mockTitles) },
    { type: TitleActionTypes.SET_PAGINATED_TITLES, payload: [], action: actions.setPaginatedTitles([]) },
  ])('should create an action to $type', ({ type, payload, action }) => {
    expect(action).toEqual({ type, payload });
  });
});

describe('fetchPopularTitle', () => {
  let store: any;
  const mocks = {
    topic: 'anime',
    page: 1,
    mockLastVisiblePage: 5,
  };

  const response: AxiosResponse<any> | any = {
      data: {
          pagination: {
              last_visible_page: mocks.mockLastVisiblePage,
          },
          data: mockTitles,
      },
      status: 0,
      statusText: '',
  };

  const expectedActions = [
    { type: TitleActionTypes.SET_POPULAR_TITLE, payload: mockTitles },
    { type: TitleActionTypes.SET_LAST_TITLE_PAGE, payload: mocks.mockLastVisiblePage },
    { type: TitleActionTypes.SET_IS_TITLE, payload: mocks.topic },
  ];

  beforeEach(() => {
    (fetchAnimeData.fetchPopularAnime as jest.MockedFunction<any>).mockResolvedValue(response);
    (fetchMangaData.fetchPopularManga as jest.MockedFunction<any>).mockResolvedValue(response);

    store = mockStore(initialState);
    Storage.prototype.getItem = jest.fn(() => mocks.topic)
  });

  afterEach(() => {
    jest.restoreAllMocks(); 
  });

  it.each([
    { topic: 'anime', call: fetchAnimeData.fetchPopularAnime, notCall: fetchMangaData.fetchPopularManga },
    { topic: 'manga', call: fetchMangaData.fetchPopularManga, notCall: fetchAnimeData.fetchPopularAnime },
  ])('should fetchPopularTitle with $topic flag and dispatch the correct actions', async ({ topic, call, notCall }) => {
    mocks.topic = topic;
    expectedActions[2].payload = topic;

    await store.dispatch(actions.fetchPopularTitle(mocks.page));

    expect(store.getActions()).toEqual(expectedActions);
    expect(notCall).not.toHaveBeenCalled();
    expect(call).toHaveBeenCalledWith(mocks.page);
    expect(Storage.prototype.getItem).toHaveBeenLastCalledWith('topic');
  });

  it('should throw an error in fetchPopularTitle', async () => {
    (fetchMangaData.fetchPopularManga as jest.MockedFunction<any>).mockResolvedValue(null); // because we have 'manga' in mocked Storage
    
    await store.dispatch(actions.fetchPopularTitle(NaN));
    expect(store.getActions()).toEqual(expectedError);
  });
});

