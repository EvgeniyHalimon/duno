import React, { useEffect } from "react";
import { SlideShow } from './SlideShow';
import { useTypesSelector } from '../hooks/useTypesSelector';

import { useDispatch } from "react-redux";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";

export const Slider: React.FC = () => {
    
    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)
    
    const topic = localStorage.getItem('topic')
    

    useEffect(() => {
        dispatch( topic === "anime" ? fetchRandomAnime() : fetchRandomManga())
    },[isAnime, isManga])

    return(
        <div className="slider-section">
            <SlideShow randomTitles={topic === "anime" ? randomAnimes : randomMangas}/>
        </div>
    )
}