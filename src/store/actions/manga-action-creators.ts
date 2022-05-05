import { Dispatch } from "redux"
import { IGenreData, IReview, ITitle } from "../../types/types";
import { fetchMangaData } from "../../utils/fetch";
import { MangaActionTypes } from "../action-types/manga-action-types";

export const setMangas = (data: any) => {
    return{
        type: MangaActionTypes.SET_MANGAS,
        payload: data
    }
}

export const setRandomMangas = (data: ITitle[]) => {
    return{
        type: MangaActionTypes.SET_RANDOM_MANGA,
        payload: data
    }
}

export const setPaginatedMangas = (data: ITitle) => {
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

export const fetchMangas = () => {
    return async(dispatch: Dispatch) => {
        try {
            const mangas = await fetchMangaData.fetchManga()
            dispatch(setMangas(mangas.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setCurrentMangaPage = (page: number) => {
    return{
        type: MangaActionTypes.SET_CURRENT_MANGA_PAGE,
        payload: page
    }
}

export const setMangaGenres = (data: IGenreData) => {
    return{
        type: MangaActionTypes.SET_MANGA_GENRES,
        payload: data
    }
}

export const fetchMangaGenres = () => {
    return async(dispatch: Dispatch) => {
        try {
            const mangaGenres = await fetchMangaData.fetchMangaGenres()
            dispatch(setMangaGenres(mangaGenres.data.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setMangasByGenre = (data: ITitle) => {
    return{
        type: MangaActionTypes.SET_MANGA_BY_GENRE,
        payload: data
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

export const fetchPaginatedMangasByGenre = (genre: string | undefined, page: number) => {
    return async(dispatch: Dispatch) => {
        try {
            const mangas = await fetchMangaData.fetchMangasByGenres(genre, page)
            dispatch(setLastMangaPage(mangas.data.pagination.last_visible_page))
            dispatch(setMangasByGenre(mangas.data.data))
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
            const randomMangas = await fetchMangaData.fetchRandomManga()
            dispatch(setRandomMangas(randomMangas))
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

export const mangaSearchResult = (data: ITitle) => {
    return{
        type: MangaActionTypes.SET_MANGA_SEARCH_RESULT,
        payload: data
    }
}

export const setMangaSearchValue = (inputValue: string | null) => {
    return{
        type: MangaActionTypes.SET_MANGA_SEARCH_VALUE,
        payload: inputValue
    }
}

export const fetchMangaSearch = (inputValue: string | null, page: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const searchResult = await fetchMangaData.fetchMangaSearch(inputValue, page)
            dispatch(setLastMangaPage(searchResult.data.pagination.last_visible_page))
            dispatch(setMangaSearchValue(inputValue))
            dispatch(mangaSearchResult(searchResult.data.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setCurrentMangaTitle = (data: ITitle) => {
    return{
        type: MangaActionTypes.SET_CURRENT_MANGA_TITLE,
        payload: data
    }
}

export const fetchCurrentMangaTitle = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        try {
            const currentMangaTitle = await fetchMangaData.fetchCurrentMangaTitle(id)
            dispatch(setCurrentMangaTitle(currentMangaTitle.data.data))
            dispatch(setLastMangaPage(currentMangaTitle.data.pagination.last_visible_page))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setPopularManga = (data: ITitle) => {
    return{
        type: MangaActionTypes.SET_POPULAR_MANGA,
        payload: data
    }
}

export const fetchPopularManga = (page: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const popularAnime = await fetchMangaData.fetchPopularManga(page)
            dispatch(setPopularManga(popularAnime.data.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}

export const setMangaReviews = (data: IReview) => {
    return{
        type: MangaActionTypes.SET_MANGA_REVIEW,
        payload: data
    }
}

export const fetchMangaReviews = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        try {
            const mangaReview = await fetchMangaData.fetchMangaReviews(id)
            dispatch(setMangaReviews(mangaReview.data.data))
        } catch (error) {
            dispatch(setMangaError(true))
        }
    }
}