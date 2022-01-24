import { Dispatch } from "redux"
import { fetchMangaData } from "../../utils/fetch";
import { MangaActionTypes } from "../action-types/manga-action-types";

export const setMangas = (data: any) => {
    return{
        type: MangaActionTypes.SET_MANGAS,
        payload: data
    }
}

export const setRandomMangas = (data: any) => {
    return{
        type: MangaActionTypes.SET_RANDOM_MANGA,
        payload: data
    }
}

export const setPaginatedMangas = (data: any) => {
    return{
        type: MangaActionTypes.SET_PAGINATED_MANGAS,
        payload: data
    }
}

export const setLastMangaPage = (number: number) => {
    return{
        type: MangaActionTypes.SET_LAST_MANGA_PAGE,
        payload: number
    }
}

export const fetchAnimes = () => {
    return async(dispatch: Dispatch) => {
        try {
            const mangas = await fetchMangaData.fetchManga()
            dispatch(setMangas(mangas.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const fetchPaginatedMangas = (page: number) => {
    return async(dispatch: Dispatch) => {
        try {
            const mangas = await fetchMangaData.fetchPaginatedManga(page)
            dispatch(setLastMangaPage(mangas.data.pagination.last_visible_page))
            dispatch(setPaginatedMangas(mangas.data.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setMangaError = (bool: boolean) => {
    return{
        type: MangaActionTypes.SET_MANGA_ERROR,
        payload: bool
    }
}

export const fetchRandomManga = () => {
    return async (dispatch: Dispatch) => {
        try {
            const randomAnimes = await fetchMangaData.fetchRandomManga()
            dispatch(setRandomMangas(randomAnimes))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const isMangaFlag = (bool: boolean) => {
    return{
        type: MangaActionTypes.SET_IS_MANGA,
        payload: bool
    }
}

export const mangaSearchResult = (data: any) => {
    return{
        type: MangaActionTypes.SET_MANGA_SEARCH_RESULT,
        payload: data
    }
}

export const fetchMangaSearch = (inputValue: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const searchResult = await fetchMangaData.fetchMangaSearch(inputValue)
            console.log(searchResult.data);
            dispatch(mangaSearchResult(searchResult.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}