import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"

export const SlideShow: React.FC<any> = ({children}) => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)


    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    const sliderPages = children ? children.length ? children.length : 1 : 0

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
        sliderPages ? 
        <>
            <div className="slide-show">
            <div
                className="slide-show-slider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0` }}
            >
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