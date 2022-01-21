import { AnimeActionTypes } from "../../action-types/anime-action-types";

interface IAnimeAction{
    type: AnimeActionTypes.SET_ANIMES,
    payload: any
}

interface IAnimeErrorAction{
    type: AnimeActionTypes.SET_ANIME_ERROR,
    payload: boolean
}

interface IRandomAnime{
    type: AnimeActionTypes.SET_RANDOM_ANIME,
    payload: any
}

export type AnimeAction = IAnimeAction | IAnimeErrorAction | IRandomAnime