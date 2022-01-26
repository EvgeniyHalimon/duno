import React, { useEffect } from "react";
import { SlideShow } from './SlideShow';

import { useTypesSelector } from '../hooks/useTypesSelector';
import { useDispatch } from "react-redux";

import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";


export const Slider: React.FC = (children) => {
    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    console.log("🚀 ~ file: Slider.tsx ~ line 14 ~ randomAnimes", randomAnimes)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)
    console.log("🚀 ~ file: Slider.tsx ~ line 15 ~ randomMangas", randomMangas)

    
    useEffect(() => {
        isAnime ? dispatch(fetchRandomAnime()) : dispatch(fetchRandomManga())
    },[isAnime, isManga])

    return(
        <div className="slider-section">
            <SlideShow randomTitles={isAnime ? randomAnimes : randomMangas}>
                {children}
            </SlideShow>
        </div>
    )
}