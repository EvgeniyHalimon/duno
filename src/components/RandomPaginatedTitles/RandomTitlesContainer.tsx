import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SliderCardInfo } from "../SliderCardInfo/SliderCardInfo";
import { Slider } from "../Slider/Slider";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchRandomTitle } from "../../store/actions/title-action-creators";
import { getFromStorage } from "../../utils/storage";
import { ITitle } from "../../types/types";
import './RandomPaginatedTitles.scss'

export const RandomTitlesContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {randomTitles, isTitle} = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchRandomTitle())
    },[topic, isTitle])

    return(
        <div className="slider-section">
            <Slider>
                {randomTitles.map((title: ITitle) => 
                    <SliderCardInfo title={title} key={title.url}/>
                )}
            </Slider>
        </div>
    )
}