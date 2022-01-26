import React,{useState, useEffect} from "react";

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import useDebounce from "../hooks/useDebounce";
import { animeSearchResult, fetchAnimeSearch, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";


export const Search: React.FC = () => {
    const navigate = useNavigate()
    const dispatch  = useDispatch() 
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const topic = localStorage.getItem('topic')
    console.log(topic);
    topic === "anime" ? dispatch(isAnimeFlag(true)) : dispatch(isAnimeFlag(false))

    function navigateToList(e: any){
        if(e.key === "Enter"){
            navigate('/search+result+list')
        }
    }
    
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true)
                topic === "anime" ? dispatch(fetchAnimeSearch(searchTerm, 1)) : dispatch(fetchMangaSearch(searchTerm, 1));
            } else {
                dispatch(animeSearchResult(null))
            }
    },[debouncedSearchTerm])
    
    return(
        <input 
            type="text" 
            style={{height: '30px'}}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={(e) => navigateToList(e)}
        />
    )
}