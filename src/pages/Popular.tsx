import React, { useEffect, useState } from "react";
import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";

import { Pagination } from "@mui/material";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { useDispatch } from "react-redux";
import { fetchPopularAnime, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchPopularManga, isMangaFlag } from "../store/actions/manga-action-creators";
import { Navigation } from "../components/Navigation/Navigation";



export const Popular: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const {popularAnime, lastAnimePage} = useTypesSelector(state => state.anime)
    const {popularManga, lastMangaPage} = useTypesSelector(state => state.manga)

    const topic: string | null = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? popularAnime : popularManga
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    useEffect(() => {
        topic === "anime" ? dispatch(isAnimeFlag(true)) : "manga" ? dispatch(isMangaFlag(true)) : dispatch(isMangaFlag(false))
        topic === "anime" ? dispatch(fetchPopularAnime(currentPage)) : dispatch(fetchPopularManga(currentPage)) 
    },[topic, currentPage, lastPage])

    console.log(lastPage);

    return(
        <div className="wrapper">
            <Navigation/>
            <div style={{padding: '20px 0 10px 0'}}>
                <PaginatedTitles paginatedTitles={paginatedTitles}/>
                <Pagination 
                    count={lastPage} 
                    color="primary"
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </div>
    )
}