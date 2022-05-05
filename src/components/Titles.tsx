import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { PaginatedTitles } from './PaginatedTitles/PaginatedTitles';

import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes, setCurrentAnimePage } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangas, setCurrentMangaPage } from "../store/actions/manga-action-creators";

import { getFromStorage } from "../utils/storage";
import { Pagination } from "@mui/material";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const {paginatedAnimes, lastAnimePage, isAnime, currentAnimePage} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage, isManga, currentMangaPage} = useTypesSelector(state => state.manga)

    const paginatedTitles = getFromStorage('topic') === 'anime' ? paginatedAnimes : paginatedMangas
    const currentPage = getFromStorage('topic') === 'anime' ? currentAnimePage : currentMangaPage
    const lastPage = getFromStorage('topic') === 'anime' ? lastAnimePage : lastMangaPage

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
                defaultPage={1}
                color="primary"
                onChange={(e, value) => dispatch(getFromStorage('topic') === 'anime' ? setCurrentAnimePage(value) : setCurrentMangaPage(value))}
            />
        </>
        )
    }