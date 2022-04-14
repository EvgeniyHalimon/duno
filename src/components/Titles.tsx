import React, { useEffect, useState } from "react";

import { PaginatedTitles } from './PaginatedTitles';

import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangas } from "../store/actions/manga-action-creators";

import { Pagination } from "@mui/material";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {paginatedAnimes, lastAnimePage, isAnime} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage, isManga} = useTypesSelector(state => state.manga)

    const topic: string | null = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? paginatedAnimes : paginatedMangas
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    useEffect(() => {
        isAnime ? dispatch(fetchPaginatedAnimes(currentPage)) : dispatch(fetchPaginatedMangas(currentPage))
    },[currentPage, isAnime, isManga])

    return(
        <>
            <PaginatedTitles 
                paginatedTitles={paginatedTitles}
            />
            <Pagination 
                count={lastPage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </>
        )
    }