import { IGenreData, IReview } from '../../../types/types';
import { ITitle } from "../../../types/types";
import { TitleActionTypes } from "../../action-types/title-action-types";

interface ITitleAction{
    type: TitleActionTypes.SET_TITLES,
    payload: ITitle[]
}

interface ITitleErrorAction{
    type: TitleActionTypes.SET_TITLE_ERROR,
    payload: boolean
}

interface IRandomTitles{
    type: TitleActionTypes.SET_RANDOM_TITLES,
    payload: ITitle[]
}

interface IPaginatedTitles{
    type: TitleActionTypes.SET_PAGINATED_TITLES,
    payload: ITitle[]
}

interface ILastAnimePage{
    type: TitleActionTypes.SET_LAST_TITLE_PAGE,
    payload: number
}

interface IIsTitle{
    type: TitleActionTypes.SET_IS_TITLE,
    payload: string | null
}

interface ISeacrhTitleResult{
    type: TitleActionTypes.SET_TITLE_SEARCH_RESULT,
    payload: ITitle[]
}

interface ISeacrhTitleValue{
    type: TitleActionTypes.SET_TITLE_SEARCH_VALUE,
    payload: string
}

interface ITitleGenres{
    type: TitleActionTypes.SET_TITLE_GENRES,
    payload: IGenreData[]
}

interface ITitleByGenres{
    type: TitleActionTypes.SET_TITLE_BY_GENRE,
    payload: ITitle[]
}

interface ITitleCurrentTitle{
    type: TitleActionTypes.SET_CURRENT_TITLE_TITLE,
    payload: ITitle
}

interface ITitleCurrentPage{
    type: TitleActionTypes.SET_CURRENT_TITLE_PAGE,
    payload: number
}

interface IPopularTitle{
    type: TitleActionTypes.SET_POPULAR_TITLE,
    payload: ITitle[]
}

interface ITitleReview{
    type: TitleActionTypes.SET_TITLE_REVIEW,
    payload: IReview[]
}

export type TitleAction = ITitleAction | ITitleErrorAction | IRandomTitles | IPaginatedTitles | ILastAnimePage | IIsTitle | ISeacrhTitleResult | 
ISeacrhTitleValue | ITitleGenres | ITitleByGenres | ITitleCurrentTitle | ITitleCurrentPage | IPopularTitle | ITitleReview