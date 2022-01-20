import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { useTypesSelector } from '../hooks/useTypesSelector';
import { SlideShow } from './SlideShow';

export const Slider: React.FC = () => {
    
    const dispatch = useDispatch()
    const {randomAnimes} = useTypesSelector(state => state.anime)
    console.log("🚀 ~ file: Slider.tsx ~ line 11 ~ randomAnimes", randomAnimes)

    

    useEffect(() => {
        dispatch(fetchRandomAnime())
    },[])

    return(
        <div className="slider-section">
            <SlideShow/>
        </div>
    )
}