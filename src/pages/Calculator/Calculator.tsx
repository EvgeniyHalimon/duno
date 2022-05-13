import { CalculatorPlaceholder } from "../../components/CalculatorPlaceholder/CalculatorPlaceholder"
import { Navigation } from "../../components/Navigation/Navigation"
import { TimeForm } from "../../components/TimeForm/TimeForm"
import { Pagination } from "@mui/material";
import './Calculator.scss'
import { PopupTitles } from "../../components/PopupTitles/PopupTitles";
import { useEffect, useState } from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { getFromStorage } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { fetchAnimeSearch } from "../../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../../store/actions/manga-action-creators";

export const Calculator : React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {animeSearchResult, lastAnimePage, isAnime} = useTypesSelector(state => state.anime)
    const {mangaSearchResult, lastMangaPage, isManga} = useTypesSelector(state => state.manga)

    const paginatedTitles = getFromStorage('topic') === "anime" ? animeSearchResult : mangaSearchResult
    const lastPage = getFromStorage('topic') === "anime" ? lastAnimePage : lastMangaPage

    const searchTerm = getFromStorage('searchTerm')

    useEffect(() => {
        getFromStorage('topic') === "anime" ? dispatch(fetchAnimeSearch(searchTerm, currentPage)) : dispatch(fetchMangaSearch(searchTerm, currentPage))
    },[currentPage, isAnime, isManga])

    return(
        <div className="calculator-wrapper">
            <Navigation/>
            <div className="calculator">
                <CalculatorPlaceholder/>
                <TimeForm/>
            </div>
        </div>
    )
}