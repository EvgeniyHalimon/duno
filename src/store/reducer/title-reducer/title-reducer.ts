import { IInitialStateTitle } from "../../../types/types";
import { TitleActionTypes } from "../../action-types/title-action-types";
import { TitleAction } from "./types";

const initialState: IInitialStateTitle = {
    titles: [],
    randomTitles: [],
    titleError: false,
    paginatedTitles: [],
    lastTitlePage: 1,
    isTitle : 'anime',
    titleSearchResult: [],
    searchTitleValue: "Berserk",
    titleGenres: [],
    titleByGenre: [],
    currentTitle: null,
    currentTitlePage: 1,
    popularTitle: [],
    titleReviews: []
}

const updateTitles = (state = initialState, action: TitleAction) => {
    switch(action.type){
        case TitleActionTypes.SET_TITLES:
            return{
                ...state,
                titles: action.payload
            }
        case TitleActionTypes.SET_TITLE_ERROR:
            return{
                ...state,
                titleError: action.payload
            }
        case TitleActionTypes.SET_RANDOM_TITLES:
            return{
                ...state,
                randomTitles: action.payload
            }
        case TitleActionTypes.SET_PAGINATED_TITLES:
            return{
                ...state,
                paginatedTitles: action.payload
            }
        case TitleActionTypes.SET_LAST_TITLE_PAGE:
            return{
                ...state,
                lastTitlePage: action.payload
            }
        case TitleActionTypes.SET_IS_TITLE:
            return{
                ...state,
                isTitle: action.payload
            }
        case TitleActionTypes.SET_TITLE_SEARCH_RESULT:
            return{
                ...state,
                titleSearchResult: action.payload
            }
        case TitleActionTypes.SET_TITLE_SEARCH_VALUE:
            return{
                ...state,
                searchTitleValue: action.payload
            }
        case TitleActionTypes.SET_TITLE_GENRES:
            return{
                ...state,
                titleGenres: action.payload
            }
        case TitleActionTypes.SET_TITLE_BY_GENRE:
            return{
                ...state,
                titleByGenre: action.payload
            }
        case TitleActionTypes.SET_CURRENT_TITLE_TITLE:
            return{
                ...state,
                currentTitle: action.payload
            }
        case TitleActionTypes.SET_CURRENT_TITLE_PAGE:
            return{
                ...state,
                currentTitlePage: action.payload
            }
        case TitleActionTypes.SET_POPULAR_TITLE:
            return{
                ...state,
                popularTitle: action.payload
            }
        case TitleActionTypes.SET_TITLE_REVIEW:
            return{
                ...state,
                titleReviews: action.payload
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_RANDOM_TITLES:
            return{
                ...state,
                randomTitles: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_PAGINATED_TITLES:
            return{
                ...state,
                paginatedTitles: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_SEARCH_RESULT:
            return{
                ...state,
                titleSearchResult: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_TITLE_GENRES:
            return{
                ...state,
                titleGenres: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_TITLE_BY_GENRES:
            return{
                ...state,
                titleByGenre: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_CURRENT_TITLE:
            return{
                ...state,
                currentTitle: null
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_POPULAR_TITLE:
            return{
                ...state,
                popularTitle: []
            }
        case TitleActionTypes.SET_TITLE_CLEANUP_TITLE_REVIEWS:
            return{
                ...state,
                titleReviews: []
            }
        default:
            return state
    }
}

export default updateTitles