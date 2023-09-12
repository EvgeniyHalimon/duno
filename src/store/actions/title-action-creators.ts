import { fetchMangaData } from './../../utils/fetch';
import { getFromStorage } from './../../utils/storage';
import { Dispatch } from "redux"

import { TitleActionTypes } from "../action-types/title-action-types"
import { fetchAnimeData } from "../../utils/fetch";
import { IGenreData, IReview } from './../../types/types';
import { ITitle } from "../../types/types";

export const setTitles = (data: ITitle) => {
    return{
        type: TitleActionTypes.SET_TITLES,
        payload: data
    }
}

export const isTitleFlag = (str: string | null) => {
    return{
        type: TitleActionTypes.SET_IS_TITLE,
        payload: str
    }
}

export const setRandomTitles = (data: ITitle[]) => {
    return{
        type: TitleActionTypes.SET_RANDOM_TITLES,
        payload: data
    }
}

export const setPaginatedTitles = (data: ITitle | []) => {
    return{
        type: TitleActionTypes.SET_PAGINATED_TITLES,
        payload: data
    }
}

export const setLastTitlePage = (number: number) => {
    console.log("🚀 ~ file: title-action-creators.ts:39 ~ setLastTitlePage ~ number:", number)
    return{
        type: TitleActionTypes.SET_LAST_TITLE_PAGE,
        payload: number
    }
}

export const fetchTitles = () => {
    return async(dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const titles = await (isAnime ? fetchAnimeData.fetchAnimes() : fetchMangaData.fetchManga())
            dispatch(setTitles(titles.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCurrentTitlePage = (page: number) => {
    return{
        type: TitleActionTypes.SET_CURRENT_TITLE_PAGE,
        payload: page
    }
}

export const setTitleGenres = (data: IGenreData | []) => {
    return{
        type: TitleActionTypes.SET_TITLE_GENRES,
        payload: data
    }
}

export const fetchTitleGenres = () => {
    return async(dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const titleGenres = await (isAnime ? fetchAnimeData.fetchAnimeGenres() : fetchMangaData.fetchMangaGenres())
            dispatch(setTitleGenres(titleGenres.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setTitlesByGenre = (data: ITitle | []) => {
    return{
        type: TitleActionTypes.SET_TITLE_BY_GENRE,
        payload: data
    }
}

export const fetchRandomTitle = () => {
    return async (dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const randomTitles = await (isAnime ? fetchAnimeData.fetchRandomAnime() : fetchMangaData.fetchRandomManga())
            dispatch(setRandomTitles(randomTitles))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const fetchPaginatedTitles = (page: number) => {
    return async(dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const titles = await (isAnime ? fetchAnimeData.fetchPaginatedAnimes(page) : fetchMangaData.fetchPaginatedManga(page))
            dispatch(setLastTitlePage(titles.data.pagination.last_visible_page))
            dispatch(setPaginatedTitles(titles.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const fetchPaginatedTitlesByGenre = (genre: string | undefined, page: number) => {
    return async(dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const titles = await (isAnime ? fetchAnimeData.fetchAnimesByGenres(genre, page) : fetchMangaData.fetchMangasByGenres(genre, page))
            dispatch(setLastTitlePage(titles.data.pagination.last_visible_page))
            dispatch(setTitlesByGenre(titles.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setTitleError = (bool: boolean) => {
    return{
        type: TitleActionTypes.SET_TITLE_ERROR,
        payload: bool
    }
}

export const titleSearchResult = (data: ITitle | []) => {
    return{
        type: TitleActionTypes.SET_TITLE_SEARCH_RESULT,
        payload: data
    }
}

export const setTitleSearchValue = (inputValue: string | null) => {
    return{
        type: TitleActionTypes.SET_TITLE_SEARCH_VALUE,
        payload: inputValue
    }
}

export const fetchTitleSearch = (inputValue: string | null, page: number) => {
    return async (dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const searchResult = await (isAnime ? fetchAnimeData.fetchAnimeSearch(inputValue, page) : fetchMangaData.fetchMangaSearch(inputValue, page))
            dispatch(setLastTitlePage(searchResult.data.pagination.last_visible_page))
            dispatch(setTitleSearchValue(inputValue))
            dispatch(titleSearchResult(searchResult.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCurrentTitle = (data: ITitle | []) => {
    return{
        type: TitleActionTypes.SET_CURRENT_TITLE_TITLE,
        payload: data
    }
}

export const fetchCurrentTitle = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const currentTitle = await (isAnime ? fetchAnimeData.fetchCurrentAnimeTitle(id) : fetchMangaData.fetchCurrentMangaTitle(id))
            dispatch(setCurrentTitle(currentTitle.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setPopularTitle = (data: ITitle | []) => {
    return{
        type: TitleActionTypes.SET_POPULAR_TITLE,
        payload: data
    }
}

export const fetchPopularTitle = (page: number) => {
    return async (dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const popularTitle = await (isAnime ? fetchAnimeData.fetchPopularAnime(page) : fetchMangaData.fetchPopularManga(page))
            dispatch(setPopularTitle(popularTitle.data.data))
            dispatch(setLastTitlePage(popularTitle.data.pagination.last_visible_page))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setTitleReviews = (data: IReview[] | []) => {
    return{
        type: TitleActionTypes.SET_TITLE_REVIEW,
        payload: data
    }
}

export const fetchTitleReviews = (id: number | undefined) => {
    return async (dispatch: Dispatch) => {
        const topic = getFromStorage('topic')
        const isAnime = topic === 'anime'
        try {
            const titleReview = await (isAnime ? fetchAnimeData.fetchAnimeReviews(id) : fetchMangaData.fetchMangaReviews(id))
            dispatch(setTitleReviews(titleReview.data.data))
            dispatch(isTitleFlag(topic))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpGenres = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setTitleGenres([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpRandomTitles = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setRandomTitles([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpTitleReviews = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setTitleReviews([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpPaginatedTitles = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setPaginatedTitles([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpTitlesByGenre = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setTitlesByGenre([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpPopularTitle = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setPopularTitle([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpCurrentTitle = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setCurrentTitle([]))
            dispatch(titleSearchResult([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}

export const setCleanUpSearchResult = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(titleSearchResult([]))
        } catch (error) {
            dispatch(setTitleError(true))
        }
    }
}