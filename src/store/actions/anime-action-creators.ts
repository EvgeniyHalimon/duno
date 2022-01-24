import { Dispatch } from "redux"
import { AnimeActionTypes } from "../action-types/anime-action-types"
import { fetchAnimeData } from "../../utils/fetch";

export const setAnimes = (data: any) => {
    return{
        type: AnimeActionTypes.SET_ANIMES,
        payload: data
    }
}

export const setRandomAnimes = (data: any) => {
    return{
        type: AnimeActionTypes.SET_RANDOM_ANIME,
        payload: data
    }
}

export const setPaginatedAnimes = (data: any) => {
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

export const animeSearchResult = (data: any) => {
    return{
        type: AnimeActionTypes.SET_ANIME_SEARCH_RESULT,
        payload: data
    }
}

export const fetchAnimeSearch = (inputValue: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const searchResult = await fetchAnimeData.fetchAnimeSearch(inputValue)
            console.log(searchResult.data);
            dispatch(animeSearchResult(searchResult.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}