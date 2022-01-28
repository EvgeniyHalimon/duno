import { ITitle } from "../../../types/types";
import { AnimeActionTypes } from "../../action-types/anime-action-types";

interface IAnimeAction{
    type: AnimeActionTypes.SET_ANIMES,
    payload: ITitle
}

interface IAnimeErrorAction{
    type: AnimeActionTypes.SET_ANIME_ERROR,
    payload: boolean
}

interface IRandomAnimes{
    type: AnimeActionTypes.SET_RANDOM_ANIMES,
    payload: ITitle[]
}

interface IPaginatedAnimes{
    type: AnimeActionTypes.SET_PAGINATED_ANIMES,
    payload: ITitle
}

interface ILastAnimePage{
    type: AnimeActionTypes.SET_LAST_ANIME_PAGE,
    payload: number
}

interface IIsAnime{
    type: AnimeActionTypes.SET_IS_ANIME,
    payload: boolean
}

interface ISeacrhAnimeResult{
    type: AnimeActionTypes.SET_ANIME_SEARCH_RESULT,
    payload: ITitle
}

interface ISeacrhAnimeValue{
    type: AnimeActionTypes.SET_ANIME_SEARCH_VALUE,
    payload: string
}

interface IAnimeGenres{
    type: AnimeActionTypes.SET_ANIME_GENRES,
    payload: any
}

interface IAnimeByGenres{
    type: AnimeActionTypes.SET_ANIME_BY_GENRE,
    payload: any
}

export type AnimeAction = IAnimeAction | IAnimeErrorAction | IRandomAnimes | IPaginatedAnimes | ILastAnimePage | IIsAnime | ISeacrhAnimeResult | 
ISeacrhAnimeValue | IAnimeGenres | IAnimeByGenres