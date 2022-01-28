import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";
import { SliderCardInfo } from "./SliderCardInfo";
import { Slider } from './Slider';

export const RandomTitlesContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)
    const randomTitles = isAnime ? randomAnimes : randomMangas

    useEffect(() => {
        isAnime ? dispatch(fetchRandomAnime()) : dispatch(fetchRandomManga())
    },[isAnime, isManga])

    return(
        <div className="slider-section">
            <Slider>
                <SliderCardInfo titles={randomTitles}/>
            </Slider>
        </div>
    )
}

