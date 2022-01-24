import React,{useState, useEffect} from "react";
import Select from 'react-select';

import { useDispatch } from 'react-redux';
import useDebounce from "../hooks/useDebounce";
import { animeSearchResult, fetchAnimeSearch, isAnimeFlag } from "../store/actions/anime-action-creators";
import { fetchMangaSearch } from "../store/actions/manga-action-creators";

const customStyles: any = {
    select:{
        width:'100%',
        maxWidth:600,
        opacity: 1
    }
}

export const Search: React.FC = () => {

    const dispatch  = useDispatch() 
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const debouncedSearchTerm = useDebounce(searchTerm, 1500)
    const topic = localStorage.getItem('topic')
    console.log(topic);
    topic === "anime" ? isAnimeFlag(true) : isAnimeFlag(false)

    const options = [
        { value: 'ponder', label: 'ponder' },
        { value: 'brainstorm', label: 'brainstorm' },
        { value: 'preordrain', label: 'preordrain' },
    ]
    
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
        <>
            <input 
                type="text" 
                style={{height: '30px'}}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <Select
                defaultValue={selectedOption}
                onChange={() => setSelectedOption}
                options={options}
                styles={customStyles.select}
            />
        </>
    )
}