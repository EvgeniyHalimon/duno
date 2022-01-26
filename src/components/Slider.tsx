import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { useTypesSelector } from '../hooks/useTypesSelector';
import { SlideShow } from './SlideShow';
import { SliderInfo } from "./SliderInfo";


export const Slider: React.FC = (children) => {
    const dispatch = useDispatch()
    const {randomAnimes} = useTypesSelector(state => state.anime)
    
    useEffect(() => {
        dispatch(fetchRandomAnime())
    },[])

    return(
        <div className="slider-section">
            <SlideShow randomAnimes={randomAnimes}>
                {children}
            </SlideShow>
        </div>
    )
}