import { MangaActionTypes } from "../../action-types/manga-action-types"
import { MangaAction } from "./types"

const inintalState: any = {
    mangas: null,
    mangaError: false
}

const updateMangas = (state = inintalState, action: MangaAction) => {
    switch(action.type){
        case MangaActionTypes.SET_MANGAS:
            return{
                ...state,
                mangas: action.payload
            }
        case MangaActionTypes.SET_MANGA_ERROR: 
            return{
                ...state,
                mangaError: action.payload
            }
        default:
            return state
    }
}

export default updateMangas