import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"
import { SliderInfo } from "./SliderInfo";

export const SlideShow: React.FC<any> = ({randomTitles}) => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    const pages = randomTitles ? randomTitles.length : 3

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => 
                prevIndex === pages - 1 ? 0 : prevIndex + 1
            )
        }, 5000);
        return () => {
            resetTimeout()
        }
    },[index])

    return(
        randomTitles ? 
        <div>
            <div className="slide-show">
                <div
                    className="slide-show-slider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0` }}
                >
                    <SliderInfo/> 
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
        </div> : <Loading/>
    )
}