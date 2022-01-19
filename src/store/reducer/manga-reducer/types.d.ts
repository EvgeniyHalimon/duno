import { MangaActionTypes } from "../../action-types/manga-action-types";

interface IMangaAction{
    type: MangaActionTypes.SET_MANGAS,
    payload: any
}

interface IMangaErrorAction{
    type: MangaActionTypes.SET_MANGA_ERROR,
    payload: boolean
}

export type MangaAction = IMangaAction | IMangaErrorAction