import { MangaActionTypes } from "../../action-types/manga-action-types"
import { MangaAction } from "./types"

const inintalState: any = {
    mangas: null,
    mangaError: false,
    randomMangas: null,
    paginatedMangas: null,
    lastMangaPage: 1,
    isManga : false,
    mangaSearchResult: null,
    searchMangaValue: "Berserk",
    mangaGenres: null,
    mangaByGenre: null
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
        case MangaActionTypes.SET_RANDOM_MANGA:
            return{
                ...state,
                randomMangas: action.payload
            }
        case MangaActionTypes.SET_PAGINATED_MANGAS:
            return{
                ...state,
                paginatedMangas: action.payload
            }
        case MangaActionTypes.SET_LAST_MANGA_PAGE:
            return{
                ...state,
                lastMangaPage: action.payload
            }
        case MangaActionTypes.SET_IS_MANGA:
            return{
                ...state,
                isManga: action.payload
            }
        case MangaActionTypes.SET_MANGA_SEARCH_RESULT:
            return{
                ...state,
                mangaSearchResult: action.payload
            }
        case MangaActionTypes.SET_MANGA_SEARCH_VALUE:
            return{
                ...state,
                searchMangaValue: action.payload
            }
        case MangaActionTypes.SET_MANGA_GENRES:
            return{
                ...state,
                mangaGenres: action.payload
            }
        case MangaActionTypes.SET_MANGA_BY_GENRE:
            return{
                ...state,
                mangaByGenre: action.payload
            }
        default:
            return state
    }
}

export default updateMangas