import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchPaginatedAnimes } from "../store/actions/anime-action-creators";
import { fetchPaginatedMangas } from "../store/actions/manga-action-creators";
import { PaginatedTitles } from './PaginatedTitles';

export const Titles: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const {paginatedAnimes, lastAnimePage, isAnime} = useTypesSelector(state => state.anime)
    const {paginatedMangas, lastMangaPage, isManga} = useTypesSelector(state => state.manga)

    const topic = localStorage.getItem('topic')

    const paginatedTitles = topic === "anime" ? paginatedAnimes : paginatedMangas
    const lastPage = topic === "anime" ? lastAnimePage : lastMangaPage

    useEffect(() => {
        dispatch(fetchPaginatedAnimes(currentPage))
        dispatch(fetchPaginatedMangas(currentPage))
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
    // <div className="titles-section">
    //     <div className="titles-list">
    //         {paginatedTitles && paginatedTitles.map((titles: any) =>
    //         <div className="titles-item" key={titles.url}>
    //             <img className="title-poster" src={titles.images.webp.image_url} alt="poster" />
    //             <p>{titles.title} / {titles.title_japanese}</p> 
    //             <p>{titles.aired?.string  || titles.published?.string}</p>
    //             <div className="title-genres">
    //                 {titles.genres.map((item: any) =>
    //                     <p className="genres-name" key={item.mal_id}>{item.name}</p>
    //                 )}
    //             </div>
    //             <p>Score : {titles?.score || titles?.scored}</p>
    //             <p>Rank : {titles.rank}</p>
                
    //         </div>
    //         )}
    //     </div>
    //     <Pagination 
    //         count={lastPage} 
    //         color="primary"
    //         onChange={(e, value) => setCurrentPage(value)}
    //     />
    // </div>