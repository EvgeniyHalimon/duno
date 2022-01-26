import React, { useEffect } from "react";
import { SlideShow } from './SlideShow';
import { useTypesSelector } from '../hooks/useTypesSelector';

import { useDispatch } from "react-redux";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";
import { useTypesSelector } from '../hooks/useTypesSelector';
import { SlideShow } from './SlideShow';
import { SliderInfo } from "./SliderInfo";

export const Slider: React.FC = (children) => {
    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)

    
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