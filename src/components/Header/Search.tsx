import React,{useState, useEffect} from "react";

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";

import useDebounce from "../../hooks/useDebounce";

import { fetchAnimeSearch, isAnimeFlag } from "../../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../../store/actions/manga-action-creators";


export const Search: React.FC = () => {
    const navigate = useNavigate()
    const dispatch  = useDispatch() 
    const [searchTerm, setSearchTerm] = useState('')

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const topic: string | null = localStorage.getItem('topic')
    
    topic === "anime" ? dispatch(isAnimeFlag(true)) : dispatch(isAnimeFlag(false))

    function navigateToList(e: any){
        if(e.key === "Enter"){
            navigate('/search+result+list')
        }
    }
    
    useEffect(() => {
        if (debouncedSearchTerm) {
            topic === "anime" ? dispatch(fetchAnimeSearch(searchTerm, 1)) : dispatch(fetchMangaSearch(searchTerm, 1));
        }
    },[debouncedSearchTerm])
    
    return(
        <input 
            type="text" 
            className="search-input"
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={(e) => navigateToList(e)}
        />
    )
}