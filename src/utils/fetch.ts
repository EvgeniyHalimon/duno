import axios from "axios"
import { URL_ANIME_SEARCH, URL_MANGA_SEARCH, URL_RANDOM_ANIME, URL_RANDOM_MANGA, URL_TOP_ANIME, URL_TOP_MANGA } from "../constants/constants"


export const fetchAnimeData = {
    async fetchAnimes(){
        const animes = await axios.get(URL_ANIME_SEARCH)
        return animes
    },
    async fetchPaginatedAnimes(page: number){
        const animes = await axios.get(`${URL_TOP_ANIME}?page=${page}&limit=5&sort=asc`)
        return animes
    },
    async fetchRandomAnime(){
        const randomTitle1 = await axios.get(URL_RANDOM_ANIME)
        const randomTitle2 = await axios.get(URL_RANDOM_ANIME)
        const randomTitle3 = await axios.get(URL_RANDOM_ANIME)
        const randomAnimes = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomAnimes
    },
    async fetchAnimeSearch(inputValue: string){
        const animes = await axios.get(`${URL_ANIME_SEARCH}?q=${inputValue}`)
        return animes
    }
}

export const fetchMangaData = {
    async fetchManga(){
        const mangas = await axios.get(URL_MANGA_SEARCH)
        return mangas
    },
    async fetchPaginatedManga(page: number){
        const mangas = await axios.get(`${URL_TOP_MANGA}?page=${page}&limit=5&sort=asc`)
        return mangas
    },
    async fetchRandomManga(){
        const randomTitle1 = await axios.get(URL_RANDOM_MANGA)
        const randomTitle2 = await axios.get(URL_RANDOM_MANGA)
        const randomTitle3 = await axios.get(URL_RANDOM_MANGA)
        const randomMangas = [randomTitle1.data.data, randomTitle2.data.data, randomTitle3.data.data]
        return randomMangas
    },
    async fetchMangaSearch(inputValue: string){
        const mangas = await axios.get(`${URL_MANGA_SEARCH}?q=${inputValue}`)
        return mangas
    }
}