import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from './PaginatedTitles/PaginatedTitles';
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes, setCurrentAnimePage } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangas, setCurrentMangaPage } from "../store/actions/manga-action-creators";
import { getFromStorage } from "../utils/storage";

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const {paginatedAnimes, lastAnimePage, currentAnimePage} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage, currentMangaPage} = useTypesSelector(state => state.manga)

    const topic = getFromStorage('topic')
    const isAnime = topic === 'anime'

    const paginatedTitles = isAnime ? paginatedAnimes : paginatedMangas
    const currentPage = isAnime ? currentAnimePage : currentMangaPage
    const lastPage = isAnime ? lastAnimePage : lastMangaPage

    useEffect(() => {
        isAnime ? dispatch(fetchPaginatedAnimes(currentPage)) : dispatch(fetchPaginatedMangas(currentPage))
    },[currentPage, topic])

    return(
        <>
            <PaginatedTitles 
                paginatedTitles={paginatedTitles}
            />
            <Pagination 
                count={lastPage} 
                defaultPage={1}
                color="primary"
                onChange={(e, value) => dispatch(isAnime ? setCurrentAnimePage(value) : setCurrentMangaPage(value))}
            />
        </>
        )
    }