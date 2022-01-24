import React,{useState, useEffect} from "react";

import { useDispatch } from 'react-redux';
import useDebounce from "../hooks/useDebounce";
import { animeSearchResult, fetchAnimeSearch, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";


export const Search: React.FC = () => {

    const dispatch  = useDispatch() 
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const debouncedSearchTerm = useDebounce(searchTerm, 1500)
    const topic = localStorage.getItem('topic')
    console.log(topic);
    topic === "anime" ? isAnimeFlag(true) : isAnimeFlag(false)
    
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true)
                topic === "anime" ? dispatch(fetchAnimeSearch(searchTerm)) : dispatch(fetchMangaSearch(searchTerm));
            } else {
                dispatch(animeSearchResult(null))
            }
    },[debouncedSearchTerm])
    
    return(
            <input 
                type="text" 
                style={{height: '30px'}}
                onChange={e => setSearchTerm(e.target.value)}
            />
   
    )
}