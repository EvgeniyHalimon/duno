import { ITitles } from "../../../types/types";
import { AnimeActionTypes } from "../../action-types/anime-action-types";

interface IAnimeAction{
    type: AnimeActionTypes.SET_ANIMES,
    payload: ITitles
}

interface IAnimeErrorAction{
    type: AnimeActionTypes.SET_ANIME_ERROR,
    payload: boolean
}

interface IRandomAnime{
    type: AnimeActionTypes.SET_RANDOM_ANIME,
    payload: ITitles
}

interface IPaginatedAnimes{
    type: AnimeActionTypes.SET_PAGINATED_ANIMES,
    payload: ITitles
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
    payload: ITitles
}

interface ISeacrhAnimeValue{
    type: AnimeActionTypes.SET_ANIME_SEARCH_VALUE,
    payload: string
}

export type AnimeAction = IAnimeAction | IAnimeErrorAction | IRandomAnime | IPaginatedAnimes | ILastAnimePage | IIsAnime | ISeacrhAnimeResult | ISeacrhAnimeValue