import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";

import { fetchPaginatedAnimesByGenre, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangasByGenre, isMangaFlag } from "../store/actions/manga-action-creators";

import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";

import { Pagination, Button } from "@mui/material";

export const Genre: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {name} = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    const {animeByGenre, lastAnimePage} = useTypesSelector(state => state.anime)
    const {mangaByGenre, lastMangaPage} = useTypesSelector(state => state.manga)

    const paginatedTitles = getFromStorage('topic') === 'anime'  ? animeByGenre : mangaByGenre
    const lastPage = getFromStorage('topic') === 'anime'  ? lastAnimePage : lastMangaPage

    useEffect(() => {
        if(getFromStorage('topic') === 'anime' ){
            dispatch(isAnimeFlag(true)) 
            dispatch(fetchPaginatedAnimesByGenre(name, currentPage))
        } else if(getFromStorage('topic') === 'manga' ){
            dispatch(isMangaFlag(true)) 
            dispatch(fetchPaginatedMangasByGenre(name, currentPage))
        }
    },[getFromStorage('topic'), currentPage])

    return(
        <div className="wrapper-genre">
            <Button onClick={() => navigate('/genres')}>
                <p className="back-button">Back to genres</p>
            </Button>
            <div>
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