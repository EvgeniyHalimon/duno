import React,{ useState, useEffect } from "react";
import { PaginatedTitles } from './PaginatedTitles';
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchAnimeSearch } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";

export const  SearchResultList: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {animeSearchResult, lastAnimePage, searchAnimeValue, isAnime} = useTypesSelector(state => state.anime)
    const {mangaSearchResult, lastMangaPage, searchMangaValue, isManga} = useTypesSelector(state => state.manga)

    const topic = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? animeSearchResult : mangaSearchResult
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage
    console.log(animeSearchResult, "<========");
    console.log(mangaSearchResult, "<========");
    console.log(currentPage, "23456789");

    useEffect(() => {
        dispatch(fetchAnimeSearch(searchAnimeValue, currentPage))
        dispatch(fetchMangaSearch(searchMangaValue, currentPage))
    },[currentPage, isAnime, isManga])

    return(
        <>
            <PaginatedTitles paginatedTitles={paginatedTitles}/>
            <Pagination 
                count={lastPage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </>
    )
}