import { IGenreData, IReview } from './../../types/types';
import { Dispatch } from "redux"
import { AnimeActionTypes } from "../action-types/anime-action-types"
import { fetchAnimeData } from "../../utils/fetch";
import { ITitle } from "../../types/types";

export const setAnimes = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_ANIMES,
        payload: data
    }
}

export const setRandomAnimes = (data: ITitle[]) => {
    return{
        type: AnimeActionTypes.SET_RANDOM_ANIMES,
        payload: data
    }
}

export const setPaginatedAnimes = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_PAGINATED_ANIMES,
        payload: data
    }
}

export const setLastAnimePage = (number: number) => {
    return{
        type: AnimeActionTypes.SET_LAST_ANIME_PAGE,
        payload: number
    }
}

export const fetchAnimes = () => {
    return async(dispatch: Dispatch) => {
        try {
            const animes = await fetchAnimeData.fetchAnimes()
            dispatch(setAnimes(animes.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setCurrentAnimePage = (page: number) => {
    return{
        type: AnimeActionTypes.SET_CURRENT_ANIME_PAGE,
        payload: page
    }
}

export const setAnimeGenres = (data: IGenreData) => {
    return{
        type: AnimeActionTypes.SET_ANIME_GENRES,
        payload: data
    }
}

export const fetchAnimeGenres = () => {
    return async(dispatch: Dispatch) => {
        try {
            const animeGenres = await fetchAnimeData.fetchAnimeGenres()
            dispatch(setAnimeGenres(animeGenres.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setAnimesByGenre = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_ANIME_BY_GENRE,
        payload: data
    }
}

export const fetchPaginatedAnimes = (page: number) => {
    return async(dispatch: Dispatch) => {
        try {
            const animes = await fetchAnimeData.fetchPaginatedAnimes(page)
            dispatch(setLastAnimePage(animes.data.pagination.last_visible_page))
            dispatch(setPaginatedAnimes(animes.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const fetchPaginatedAnimesByGenre = (genre: string | undefined, page: number) => {
    return async(dispatch: Dispatch) => {
        try {
            const animes = await fetchAnimeData.fetchAnimesByGenres(genre, page)
            dispatch(setLastAnimePage(animes.data.pagination.last_visible_page))
            dispatch(setAnimesByGenre(animes.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setAnimeError = (bool: boolean) => {
    return{
        type: AnimeActionTypes.SET_ANIME_ERROR,
        payload: bool
    }
}

export const fetchRandomAnime = () => {
    return async (dispatch: Dispatch) => {
        try {
            const randomAnimes = await fetchAnimeData.fetchRandomAnime()
            dispatch(setRandomAnimes(randomAnimes))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const isAnimeFlag = (bool: boolean) => {
    return{
        type: AnimeActionTypes.SET_IS_ANIME,
        payload: bool
    }
}

export const animeSearchResult = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_ANIME_SEARCH_RESULT,
        payload: data
    }
}

export const setAnimeSearchValue = (inputValue: string) => {
    return{
        type: AnimeActionTypes.SET_ANIME_SEARCH_VALUE,
        payload: inputValue
    }
}

export const fetchAnimeSearch = (inputValue: string, page: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const searchResult = await fetchAnimeData.fetchAnimeSearch(inputValue, page)
            dispatch(setLastAnimePage(searchResult.data.pagination.last_visible_page))
            dispatch(setAnimeSearchValue(inputValue))
            dispatch(animeSearchResult(searchResult.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setCurrentAnimeTitle = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_CURRENT_ANIME_TITLE,
        payload: data
    }
}

export const fetchCurrentAnimeTitle = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        try {
            const currentAnimeTitle = await fetchAnimeData.fetchCurrentAnimeTitle(id)
            dispatch(setCurrentAnimeTitle(currentAnimeTitle.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setPopularAnime = (data: ITitle) => {
    return{
        type: AnimeActionTypes.SET_POPULAR_ANIME,
        payload: data
    }
}

export const fetchPopularAnime = (page: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const popularAnime = await fetchAnimeData.fetchPopularAnime(page)
            dispatch(setPopularAnime(popularAnime.data.data))
            dispatch(setLastAnimePage(popularAnime.data.pagination.last_visible_page))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const setAnimeReviews = (data: IReview) => {
    return{
        type: AnimeActionTypes.SET_ANIME_REVIEW,
        payload: data
    }
}

export const fetchAnimeReviews = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const animeReview = await fetchAnimeData.fetchAnimeReviews(id)
            dispatch(setAnimeReviews(animeReview.data.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}