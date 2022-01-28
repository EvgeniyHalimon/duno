import { ITitles } from "../../../types/types";
import { MangaActionTypes } from "../../action-types/manga-action-types";

interface IMangaAction{
    type: MangaActionTypes.SET_MANGAS,
    payload: ITitles
}

interface IMangaErrorAction{
    type: MangaActionTypes.SET_MANGA_ERROR,
    payload: boolean
}

interface IRandomManga{
    type: MangaActionTypes.SET_RANDOM_MANGA,
    payload: ITitles[] | []
}

interface IPaginatedMangas{
    type: MangaActionTypes.SET_PAGINATED_MANGAS,
    payload: ITitles
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
    payload: ITitles
}

interface ISearchMangaValue{
    type: MangaActionTypes.SET_MANGA_SEARCH_VALUE,
    payload: string
}

interface IMangaGenres{
    type: MangaActionTypes.SET_MANGA_GENRES,
    payload: any
}

interface IMangaByGenres{
    type: MangaActionTypes.SET_MANGA_BY_GENRE,
    payload: any
}

export type MangaAction = IMangaAction | IMangaErrorAction | IRandomManga | IPaginatedMangas | ILastMangaPage | IIsManga | 
ISeacrhMangaResult | ISearchMangaValue | IMangaGenres | IMangaByGenres