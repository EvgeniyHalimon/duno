import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Pagination } from "@mui/material";

import { PaginatedTitles } from "./PaginatedTitles/PaginatedTitles";
import { Loading } from "./Loading";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchAnimeSearch } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";
import { getFromStorage } from "../utils/storage";


export const SearchResultList: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {animeSearchResult, lastAnimePage, isAnime} = useTypesSelector(state => state.anime)
    const {mangaSearchResult, lastMangaPage, isManga} = useTypesSelector(state => state.manga)

    const searchTerm = getFromStorage('searchTerm')

    const paginatedTitles = getFromStorage('topic') === "anime" ? animeSearchResult : mangaSearchResult
    const lastPage = getFromStorage('topic') === "anime" ? lastAnimePage : lastMangaPage


    useEffect(() => {
        getFromStorage('topic') === "anime" ? dispatch(fetchAnimeSearch(searchTerm, currentPage)) : dispatch(fetchMangaSearch(searchTerm, currentPage))
    },[currentPage, isAnime, isManga])

    return(
        paginatedTitles ?
        <div className="wrapper-genre">
            <Button className="back-button" onClick={() => navigate('/')}>
                <p className="back-button">Back to main page </p>
            </Button>
            <PaginatedTitles paginatedTitles={paginatedTitles}/>
            <Pagination 
                count={lastPage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </div> : <Loading/>
    )
}