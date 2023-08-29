import { ReactElement, useEffect, useRef, useState, FC } from "react";

import { SkeletonCardInfo } from "../SkeletonCardInfo/SkeletonCardInfo";
import './Slider.scss'

interface ISlider{
    children: ReactElement[]
}

export const Slider: FC<ISlider> = ({children}) => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    const sliderPages = children.length 

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => 
                prevIndex === sliderPages - 1 ? 0 : prevIndex + 1
            )
        }, 10000);
        return () => {
            resetTimeout()
        }
    },[index])

    return(
        sliderPages !== 0 ? 
        <>
            <div className="slide-show">
                <div
                    className="slide-show-slider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0` }}
                >
                    {children}
                </div>
            </div>
            <div className="slide-show-dots">
                {Array(sliderPages).fill(sliderPages).map((_: string, idx: number) => (
                    <div
                        key={idx}
                        className={`slide-show-dot${index === idx ? " active" : ""}`}
                        onClick={() => { setIndex(idx) }}
                    >
                    </div>
                ))}
            </div>
        </> : <SkeletonCardInfo/>
    )
}