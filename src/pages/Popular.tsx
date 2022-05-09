import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";

import { PaginatedTitles } from "../components/PaginatedTitles/PaginatedTitles";
import { Navigation } from "../components/Navigation/Navigation";
import { Loading } from "../components/Loading";
import { fetchPopularAnime, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchPopularManga, isMangaFlag } from "../store/actions/manga-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";

export const Popular: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const {popularAnime, lastAnimePage} = useTypesSelector(state => state.anime)
    const {popularManga, lastMangaPage} = useTypesSelector(state => state.manga)

    const topic = getFromStorage('topic')
    const isAnime = topic === 'anime'

    const paginatedTitles = isAnime ? popularAnime : popularManga
    const lastPage = isAnime ? lastAnimePage : lastMangaPage

    useEffect(() => {
        if(topic === "anime"){
            dispatch(isAnimeFlag(true))
            dispatch(fetchPopularAnime(currentPage))
        } else if(topic === "manga"){
            dispatch(isMangaFlag(true))
            dispatch(fetchPopularManga(currentPage)) 
        }
    },[topic, currentPage, lastPage])

    return(
        paginatedTitles.length !== 0 ?
        <div className="wrapper">
            <Navigation/>
            <div className="wrapper-popular">
                <PaginatedTitles paginatedTitles={paginatedTitles}/>
                <Pagination 
                    count={lastPage} 
                    color="primary"
                    onChange={(e, value) => setCurrentPage(value)}
                />
            </div>
        </div> : 
        <div className="wrapper-height">
            <Loading/>
        </div>
    )
}