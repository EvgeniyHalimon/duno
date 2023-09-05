import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SliderCardInfo } from "../SliderCardInfo/SliderCardInfo";
import { Slider } from "../Slider/Slider";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { fetchRandomTitle, isTitleFlag } from "../../store/actions/title-action-creators";
import { getFromStorage } from "../../utils/storage";
import { ITitle } from "../../types/types";
import './RandomPaginatedTitles.scss'
import { SkeletonCardInfo } from "../SkeletonCardInfo/SkeletonCardInfo";

export const RandomTitlesContainer = () => {
    const dispatch = useDispatch()
    const { randomTitles, isTitle } = useTypesSelector(state => state.title)

    const topic = getFromStorage('topic')

    useEffect(() => {
        if (topic === 'anime') {
            dispatch(isTitleFlag('anime'))
        } else if (topic === 'manga') {
            dispatch(isTitleFlag('manga'))
        }
        dispatch(fetchRandomTitle())
    }, [topic, isTitle])

    return (
        <div className="slider-section">
            <Slider data-testid="slider">
                {randomTitles ? (
                    randomTitles.map((title: ITitle) =>
                        <SliderCardInfo title={title} key={title.url} />
                    )
                ) : (
                    Array.from({ length: 3 }, (_, index) => <SkeletonCardInfo key={index} />)
                )}
            </Slider>
        </div>
    )
}
