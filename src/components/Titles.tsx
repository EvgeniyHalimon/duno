import React, { useEffect } from "react";

import { PaginatedTitles } from './PaginatedTitles';

import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes, setCurrentAnimePage } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangas, setCurrentMangaPage } from "../store/actions/manga-action-creators";

import { Pagination } from "@mui/material";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const {paginatedAnimes, lastAnimePage, isAnime, currentAnimePage} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage, isManga, currentMangaPage} = useTypesSelector(state => state.manga)

    const topic: string | null = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? paginatedAnimes : paginatedMangas
    const currentPage = topic === "anime" ? currentAnimePage : currentMangaPage
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    useEffect(() => {
        isAnime ? dispatch(fetchPaginatedAnimes(currentPage)) : dispatch(fetchPaginatedMangas(currentPage))
    },[currentPage, isAnime, isManga])
    console.log("🚀 ~ file: Titles.tsx ~ line 26 ~ currentPage", currentPage)

    return(
        <>
            <PaginatedTitles 
                paginatedTitles={paginatedTitles}
            />
            <Pagination 
                count={lastPage} 
                defaultPage={1}
                color="primary"
                onChange={(e, value) => dispatch(topic === 'anime' ? setCurrentAnimePage(value) : setCurrentMangaPage(value))}
            />
        </>
        )
    }