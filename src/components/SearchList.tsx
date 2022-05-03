import React,{ useState, useEffect } from "react";

import { PaginatedTitles } from "./PaginatedTitles/PaginatedTitles";

import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchAnimeSearch } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";

import { Button, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const SearchResultList: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {animeSearchResult, lastAnimePage, searchAnimeValue, isAnime} = useTypesSelector(state => state.anime)
    const {mangaSearchResult, lastMangaPage, searchMangaValue, isManga} = useTypesSelector(state => state.manga)

    const topic: string | null = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? animeSearchResult : mangaSearchResult
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    if(paginatedTitles.length === 0){
        navigate("/title+not+found")
    }

    useEffect(() => {
        topic === "anime" ? dispatch(fetchAnimeSearch(searchAnimeValue, currentPage)) : dispatch(fetchMangaSearch(searchMangaValue, currentPage))
    },[currentPage, isAnime, isManga])

    return(
        paginatedTitles ?
        <div>
            <Button className="back-button" style={{display: 'block'}} onClick={() => navigate('/')}>Back to main page</Button>
            <PaginatedTitles paginatedTitles={paginatedTitles}/>
            <Pagination 
                count={lastPage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </div> : <Loading/>
    )
}