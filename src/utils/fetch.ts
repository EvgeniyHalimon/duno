import axios from "axios"
import { URL_ANIME_GENRES, URL_ANIME_SEARCH, URL_MANGA_GENRES, URL_MANGA_SEARCH, URL_RANDOM_ANIME, URL_RANDOM_MANGA, URL_TOP_ANIME, URL_TOP_MANGA } from "../constants/constants"


export const fetchAnimeData = {
    async fetchAnimes(){
        const animes = await axios.get(URL_ANIME_SEARCH)
        return animes
    },
    async fetchPaginatedAnimes(page: number){
        const animes = await axios.get(`${URL_TOP_ANIME}?page=${page}&limit=5`)
        return animes
    },
    async fetchRandomAnime(){
        const randomTitle1 = await axios.get(URL_RANDOM_ANIME)
        const randomTitle2 = await axios.get(URL_RANDOM_ANIME)
        const randomTitle3 = await axios.get(URL_RANDOM_ANIME)
        const randomAnimes = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomAnimes
    },
    async fetchAnimeSearch(inputValue: string, page: number){
        const animes = await axios.get(`${URL_ANIME_SEARCH}?q=${inputValue}&page=${page}&limit=5&sfw=false&order_by=score&sort=desc`)
        return animes
    },
    async fetchAnimeGenres(){
        const animeGenres = await axios.get(URL_ANIME_GENRES)
        return animeGenres
    },
    async fetchAnimesByGenres(genre: string, page: number){
        const animesByGenres = await axios.get(`${URL_TOP_ANIME}?genres=${genre}&page=${page}&limit=5`)
        return animesByGenres
    }
}

export const fetchMangaData = {
    async fetchManga(){
        const mangas = await axios.get(URL_MANGA_SEARCH)
        return mangas
    },
    async fetchPaginatedManga(page: number){
        const mangas = await axios.get(`${URL_TOP_MANGA}?page=${page}&limit=5`)
        return mangas
    },
    async fetchRandomManga(){
        const randomTitle1 = await axios.get(URL_RANDOM_MANGA)
        const randomTitle2 = await axios.get(URL_RANDOM_MANGA)
        const randomTitle3 = await axios.get(URL_RANDOM_MANGA)
        const randomMangas = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomMangas
    },
    async fetchMangaSearch(inputValue: string, page: number){
        const mangas = await axios.get(`${URL_MANGA_SEARCH}?q=${inputValue}&page=${page}&limit=5&sfw=false&order_by=&score&sort=asc`)
        return mangas
    },
    async fetchMangaGenres(){
        const mangaGenres = await axios.get(URL_MANGA_GENRES)
        return mangaGenres
    },
    async fetchMangasByGenres(genre: string, page: number){
        const mangaByGenres = await axios.get(`${URL_TOP_MANGA}?genres=${genre}&page=${page}&limit=5`)
        return mangaByGenres
    }
}