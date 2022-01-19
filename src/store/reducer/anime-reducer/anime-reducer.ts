import { AnimeActionTypes } from "../../action-types/anime-action-types";
import { AnimeAction } from "./types";

const initialState: any = {
    animes: null,
    animeError: false
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
    
        default:
            return state
    }
}

export default updateAnimes