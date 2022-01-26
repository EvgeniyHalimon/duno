import { MangaActionTypes } from "../../action-types/manga-action-types";

interface IMangaAction{
    type: MangaActionTypes.SET_MANGAS,
    payload: any
}

interface IMangaErrorAction{
    type: MangaActionTypes.SET_MANGA_ERROR,
    payload: boolean
}

interface IRandomManga{
    type: MangaActionTypes.SET_RANDOM_MANGA,
    payload: any
}

interface IPaginatedMangas{
    type: MangaActionTypes.SET_PAGINATED_MANGAS,
    payload: any
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
    payload: any
}

interface ISearchMangaValue{
    type: MangaActionTypes.SET_MANGA_SEARCH_VALUE,
    payload: string
}

interface IMangaGenres{
    type: AnimeActionTypes.SET_MANGA_GENRES,
    payload: any
}

interface IMangaByGenres{
    type: AnimeActionTypes.SET_MANGA_BY_GENRE,
    payload: any
}

export type MangaAction = IMangaAction | IMangaErrorAction | IRandomManga | IPaginatedMangas | ILastMangaPage | IIsManga | 
ISeacrhMangaResult | ISearchMangaValue | IMangaGenres | IMangaByGenres