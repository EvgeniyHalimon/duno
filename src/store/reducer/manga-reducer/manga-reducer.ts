import { IInitialStateMangas } from "../../../types/types"
import { MangaActionTypes } from "../../action-types/manga-action-types"
import { MangaAction } from "./types"

const inintalState: IInitialStateMangas = {
    mangas: [],
    mangaError: false,
    randomMangas: [],
    paginatedMangas: [],
    lastMangaPage: 1,
    isManga : false,
    mangaSearchResult: [],
    searchMangaValue: "Berserk",
    mangaGenres: [],
    mangaByGenre: [],
    currentMangaTitle: null,
    currentMangaPage: 1,
    popularManga: [],
    mangaReviews: []
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
        case MangaActionTypes.SET_CURRENT_MANGA_TITLE:
            return{
                ...state,
                currentMangaTitle: action.payload
            }
        case MangaActionTypes.SET_CURRENT_MANGA_PAGE:
            return{
                ...state,
                currentMangaPage: action.payload
            }
        case MangaActionTypes.SET_POPULAR_MANGA:
            return{
                ...state,
                popularManga: action.payload
            }
        case MangaActionTypes.SET_MANGA_REVIEW:
            return{
                ...state,
                mangaReviews: action.payload
            }
        default:
            return state
    }
}

export default updateMangas