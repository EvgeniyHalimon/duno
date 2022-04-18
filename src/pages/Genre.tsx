import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PaginatedTitles } from "../components/PaginatedTitles";

import { Pagination } from "@mui/material";
import { Button } from "@mui/material";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { useDispatch } from "react-redux";
import { fetchPaginatedAnimesByGenre, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangasByGenre, isMangaFlag } from "../store/actions/manga-action-creators";



export const Genre: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {name} = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    const {paginatedAnimes, lastAnimePage} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage} = useTypesSelector(state => state.manga)

    const topic: string | null = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? paginatedAnimes : paginatedMangas
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    useEffect(() => {
        topic === "anime" ? dispatch(isAnimeFlag(true)) : "manga" ? dispatch(isMangaFlag(true)) : dispatch(isMangaFlag(false))
        topic === "anime" ? dispatch(fetchPaginatedAnimesByGenre(name, currentPage)) : dispatch(fetchPaginatedMangasByGenre(name, currentPage)) 
    },[topic, currentPage])

    return(
        <div>
            <Button onClick={() => navigate('/genres')}>Back to genres page</Button>
            <PaginatedTitles paginatedTitles={paginatedTitles}/>
            <Pagination 
                count={lastPage} 
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
            />
        </div>
    )
}