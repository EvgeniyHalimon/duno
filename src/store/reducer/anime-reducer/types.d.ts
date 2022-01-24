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

interface IPaginatedAnimes{
    type: AnimeActionTypes.SET_PAGINATED_ANIMES,
    payload: any
}

interface ILastAnimePage{
    type: AnimeActionTypes.SET_LAST_PAGE,
    payload: number
}

interface IIsAnime{
    type: AnimeActionTypes.SET_IS_ANIME,
    payload: boolean
}

interface ISeacrhAnimeResult{
    type: AnimeActionTypes.SET_ANIME_SEARCH_RESULT,
    payload: any
}

export type AnimeAction = IAnimeAction | IAnimeErrorAction | IRandomAnime | IPaginatedAnimes | ILastAnimePage | IIsAnime | ISeacrhAnimeResult