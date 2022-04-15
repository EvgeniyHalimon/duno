import { IGenreData } from './../../../types/types';
import { ITitle } from "../../../types/types";
import { MangaActionTypes } from "../../action-types/manga-action-types";

interface IMangaAction{
    type: MangaActionTypes.SET_MANGAS,
    payload: ITitle
}

interface IMangaErrorAction{
    type: MangaActionTypes.SET_MANGA_ERROR,
    payload: boolean
}

interface IRandomManga{
    type: MangaActionTypes.SET_RANDOM_MANGA,
    payload: ITitle[] | []
}

interface IPaginatedMangas{
    type: MangaActionTypes.SET_PAGINATED_MANGAS,
    payload: ITitle
}

interface ILastMangaPage{
    type: MangaActionTypes.SET_LAST_MANGA_PAGE,
    payload: number
}

interface IIsManga{
    type: MangaActionTypes.SET_IS_MANGA,
    payload: boolean
}

interface ISeacrhMangaResult{
    type: MangaActionTypes.SET_MANGA_SEARCH_RESULT,
    payload: ITitle
}

interface ISearchMangaValue{
    type: MangaActionTypes.SET_MANGA_SEARCH_VALUE,
    payload: string
}

interface IMangaGenres{
    type: MangaActionTypes.SET_MANGA_GENRES,
    payload: IGenreData
}

interface IMangaByGenres{
    type: MangaActionTypes.SET_MANGA_BY_GENRE,
    payload: ITitle
}

interface IMangaCurrentTitle{
    type: MangaActionTypes.SET_CURRENT_ANIME_TITLE,
    payload: ITitle
}

export type MangaAction = IMangaAction | IMangaErrorAction | IRandomManga | IPaginatedMangas | ILastMangaPage | IIsManga | 
ISeacrhMangaResult | ISearchMangaValue | IMangaGenres | IMangaByGenres | IMangaCurrentTitle