import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"
import { SliderInfo } from "./SliderInfo";
import { useTypesSelector } from '../hooks/useTypesSelector';
import { useDispatch } from "react-redux";

import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";
import { ITitles } from "../types/types";

export const SlideShow: React.FC = () => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)

    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }
    
    useEffect(() => {
        isAnime ? dispatch(fetchRandomAnime()) : dispatch(fetchRandomManga())
    },[isAnime, isManga])

    const randomTitles:ITitles = isAnime ? randomAnimes : randomMangas
    console.log("🚀 ~ file: SlideShow.tsx ~ line 29 ~ randomTitles", randomTitles)
    const sliderPages = 3

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => 
                prevIndex === sliderPages - 1 ? 0 : prevIndex + 1
            )
        }, 5000);
        return () => {
            resetTimeout()
        }
    },[index])

    return(
        randomTitles ? 
        <>
            <div className="slide-show">
                <div
                    className="slide-show-slider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0` }}
                >
                    <SliderInfo randomTitles={randomTitles}/> 
                </div>
            </div>
            <div className="slide-show-dots">
                {randomTitles && randomTitles.map((_: string, idx: number) => (
                    <div
                        key={idx}
                        className={`slide-show-dot${index === idx ? " active" : ""}`}
                        onClick={() => { setIndex(idx) }}
                    >
                    </div>
                ))}
            </div>
        </> : <Loading/>
    )
}