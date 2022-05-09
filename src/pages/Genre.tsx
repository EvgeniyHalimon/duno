import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination, Button } from "@mui/material";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";
import { fetchPaginatedAnimesByGenre, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangasByGenre, isMangaFlag } from "../store/actions/manga-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";


export const Genre: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {name} = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    const {animeByGenre, lastAnimePage} = useTypesSelector(state => state.anime)
    const {mangaByGenre, lastMangaPage} = useTypesSelector(state => state.manga)

    const topic = getFromStorage('topic')

    const paginatedTitles = topic === 'anime'  ? animeByGenre : mangaByGenre
    const lastPage = topic === 'anime'  ? lastAnimePage : lastMangaPage

    useEffect(() => {
        if(topic === 'anime' ){
            dispatch(isAnimeFlag(true)) 
            dispatch(fetchPaginatedAnimesByGenre(name, currentPage))
        } else if(topic === 'manga' ){
            dispatch(isMangaFlag(true)) 
            dispatch(fetchPaginatedMangasByGenre(name, currentPage))
        }
    },[topic, currentPage])

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