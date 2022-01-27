import { IInitialStateAnimes } from "../../../types/types";
import { AnimeActionTypes } from "../../action-types/anime-action-types";
import { AnimeAction } from "./types";

const initialState: IInitialStateAnimes = {
    animes: null,
    randomAnimes: null,
    animeError: false,
    paginatedAnimes: null,
    lastAnimePage: 1,
    isAnime : true,
    animeSearchResult: null,
    searchAnimeValue: "Berserk"
}

const updateAnimes = (state = initialState, action: AnimeAction) => {
    switch(action.type){
        case AnimeActionTypes.SET_ANIMES:
            return{
                ...state,
                animes: action.payload
            }
        case AnimeActionTypes.SET_ANIME_ERROR:
            return{
                ...state,
                animeError: action.payload
            }
        case AnimeActionTypes.SET_RANDOM_ANIME:
            return{
                ...state,
                randomAnimes: action.payload
            }
        case AnimeActionTypes.SET_PAGINATED_ANIMES:
            return{
                ...state,
                paginatedAnimes: action.payload
            }
        case AnimeActionTypes.SET_LAST_ANIME_PAGE:
            return{
                ...state,
                lastAnimePage: action.payload
            }
        case AnimeActionTypes.SET_IS_ANIME:
            return{
                ...state,
                isAnime: action.payload
            }
        case AnimeActionTypes.SET_ANIME_SEARCH_RESULT:
            return{
                ...state,
                animeSearchResult: action.payload
            }
        case AnimeActionTypes.SET_ANIME_SEARCH_VALUE:
            return{
                ...state,
                searchAnimeValue: action.payload
            }
        default:
            return state
    }
}

export default updateAnimes