import { Dispatch } from "redux"
import { AnimeActionTypes } from "../action-types/anime-action-types"
import axios  from 'axios';
import { URL_ANIME_SEARCH, URL_RANDOM_ANIME, URL_TOP_ANIME } from "../../constants/constants";

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

export const setLastPage = (number: number) => {
    return{
        type: AnimeActionTypes.SET_LAST_PAGE,
        payload: number
    }
}

export const fetchAnimes = () => {
    return async(dispatch: Dispatch) => {
        try {
            const animes = await axios.get(URL_ANIME_SEARCH)
            dispatch(setAnimes(animes.data))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}

export const fetchPaginatedAnimes = (page: number) => {
    return async(dispatch: Dispatch) => {
        try {
            const animes = await axios.get(`${URL_TOP_ANIME}?page=${page}&limit=5&sort=asc`)
            console.log("🚀 ~ file: anime-action-creators.ts ~ line 42 ~ returnasync ~ animes", animes)
            console.log("🚀", animes.data.pagination.last_visible_page)
            dispatch(setLastPage(animes.data.pagination.last_visible_page))
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
            const randomTitle1 = await axios.get(URL_RANDOM_ANIME)
            const randomTitle2 = await axios.get(URL_RANDOM_ANIME)
            const randomTitle3 = await axios.get(URL_RANDOM_ANIME)
            const randomAnimes = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
            console.log(randomAnimes);
            dispatch(setRandomAnimes(randomAnimes))
        } catch (error) {
            dispatch(setAnimeError(true))
        }
    }
}