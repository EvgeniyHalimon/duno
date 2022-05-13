import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAnimeSearch } from "../../store/actions/anime-action-creators"
import { Pagination } from "@mui/material";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { getFromStorage } from "../../utils/storage";
import { fetchMangaSearch } from "../../store/actions/manga-action-creators";

import './TitlesPopUp.scss'
import { PopupTitles } from "../PopupTitles/PopupTitles";

export const TitlesPopUp = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const {animeSearchResult, lastAnimePage, isAnime} = useTypesSelector(state => state.anime)

    const paginatedTitles =  animeSearchResult
    const lastPage =  lastAnimePage 
    const searchTerm = getFromStorage('searchTerm')

    useEffect(() => {
        dispatch(fetchAnimeSearch(searchTerm, currentPage)) 
    },[currentPage, isAnime])

    const handler = (e: any) => {
        setTitle(e.target.value)
        localStorage.setItem('searchTerm', title)
    }

    const handleSearch = (e:any) => {
        if(e.key === "Enter"){
            dispatch(fetchAnimeSearch(title,1))
            localStorage.setItem('searchTerm', title)
        }
    }

    return(
        <div className="popup">
            <div className="popup-modal">
                <input 
                    type="searh" 
                    className="popup-input"
                    onChange={(e) => handler(e)}
                    onKeyDown={(e) => handleSearch(e)}
                />
                <PopupTitles paginatedTitles={paginatedTitles}/>
                <Pagination 
                    count={lastPage} 
                    defaultPage={1}
                    color="primary"
                    onChange={(e, value) => setCurrentPage(value)}
                />
                <button>Apply</button>
            </div>
        </div>
    )
}