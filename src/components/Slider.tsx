import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { fetchRandomManga } from "../store/actions/manga-action-creators";
import { ITitles } from "../types/types";
import { SliderCardInfo } from "./SliderCardInfo";
import { SlideShow } from './SlideShow';

export const Slider: React.FC = () => {
    const dispatch = useDispatch()
    const {randomAnimes, isAnime} = useTypesSelector(state => state.anime)
    const {randomMangas, isManga} = useTypesSelector(state => state.manga)
    const randomTitles:ITitles = isAnime ? randomAnimes : randomMangas

    useEffect(() => {
        isAnime ? dispatch(fetchRandomAnime()) : dispatch(fetchRandomManga())
    },[isAnime, isManga])

    return(
        <div className="slider-section">
            <SlideShow>
                {randomTitles && randomTitles.map((titles: ITitles) => 
                    <div
                        className="slide"
                        key={titles.url}
                    >
                        <SliderCardInfo titles={randomTitles}/>
                    </div>
                )}
            </SlideShow>
        </div>
    )
}