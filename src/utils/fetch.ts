import { URL_ANIME_GENRES, URL_ANIME_SEARCH, URL_MANGA_GENRES, URL_MANGA_SEARCH, URL_RANDOM_ANIME, URL_RANDOM_MANGA, URL_TOP_ANIME, URL_TOP_MANGA } from "../constants/constants"
import { axiosGet } from "./axiosGet"


export const fetchAnimeData = {
    async fetchAnimes(){
        const animes = await axiosGet(URL_ANIME_SEARCH)
        return animes
    },
    async fetchPaginatedAnimes(page: number){
        const animes = await axiosGet(`${URL_TOP_ANIME}?page=${page}&limit=5`)
        return animes
    },
    async fetchRandomAnime(){
        const randomTitle1 = await axiosGet(URL_RANDOM_ANIME)
        const randomTitle2 = await axiosGet(URL_RANDOM_ANIME)
        const randomTitle3 = await axiosGet(URL_RANDOM_ANIME)
        const randomAnimes = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomAnimes
    },
    async fetchAnimeSearch(inputValue: string | null, page: number){
        const animes = await axiosGet(`${URL_ANIME_SEARCH}?q=${inputValue}&page=${page}&limit=5&order_by=score&sort=desc`)
        return animes
    },
    async fetchAnimeGenres(){
        const animeGenres = await axiosGet(URL_ANIME_GENRES)
        return animeGenres
    },
    async fetchAnimesByGenres(genre: string | undefined, page: number){
        const animesByGenres = await axiosGet(`${URL_ANIME_SEARCH}?genres=${genre}&page=${page}&limit=5&sfw=false&order_by=score&sort=desc`)
        return animesByGenres
    },
    async fetchCurrentAnimeTitle(id: string | undefined){
        const currentAnimeTitle = await axiosGet(`${URL_ANIME_SEARCH}/${id}`)
        return currentAnimeTitle
    },
    async fetchPopularAnime(page: number){
        const animes = await axiosGet(`${URL_TOP_ANIME}?page=${page}&limit=10`)
        return animes
    },
    async fetchAnimeReviews(id: number | undefined){
        const animeReviews = await axiosGet(`${URL_ANIME_SEARCH}/${id}/reviews`)
        return animeReviews
    }
}

export const fetchMangaData = {
    async fetchManga(){
        const mangas = await axiosGet(URL_MANGA_SEARCH)
        return mangas
    },
    async fetchPaginatedManga(page: number){
        const mangas = await axiosGet(`${URL_TOP_MANGA}?page=${page}&limit=5`)
        return mangas
    },
    async fetchRandomManga(){
        const randomTitle1 = await axiosGet(URL_RANDOM_MANGA)
        const randomTitle2 = await axiosGet(URL_RANDOM_MANGA)
        const randomTitle3 = await axiosGet(URL_RANDOM_MANGA)
        const randomMangas = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomMangas
    },
    async fetchMangaSearch(inputValue: string | null, page: number){
        const mangas = await axiosGet(`${URL_MANGA_SEARCH}?q=${inputValue}&page=${page}&limit=5&order_by=score&sort=desc`)
        return mangas
    },
    async fetchMangaGenres(){
        const mangaGenres = await axiosGet(URL_MANGA_GENRES)
        return mangaGenres
    },
    async fetchMangasByGenres(genre: string | undefined, page: number){
        const mangaByGenres = await axiosGet(`${URL_MANGA_SEARCH}?genres=${genre}&page=${page}&limit=5&sfw=false&order_by=score&sort=desc`)
        return mangaByGenres
    },
    async fetchCurrentMangaTitle(id: string | undefined){
        const currentMangaTitle = await axiosGet(`${URL_MANGA_SEARCH}/${id}`)
        return currentMangaTitle
    },
    async fetchPopularManga(page: number){
        const mangas = await axiosGet(`${URL_TOP_MANGA}?page=${page}&limit=10`)
        return mangas
    },
    async fetchMangaReviews(id: number | undefined){
        const mangaReviews = await axiosGet(`${URL_MANGA_SEARCH}/${id}/reviews`)
        return mangaReviews
    }
}