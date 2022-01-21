import { AnimeActionTypes } from "../../action-types/anime-action-types";
import { AnimeAction } from "./types";

const initialState: any = {
    animes: null,
    randomAnimes: null,
    animeError: false,
    paginatedAnimes: null,
    lastPage: 1
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
        case AnimeActionTypes.SET_LAST_PAGE:
            return{
                ...state,
                lastPage: action.payload
            }
        default:
            return state
    }
}

export default updateAnimes