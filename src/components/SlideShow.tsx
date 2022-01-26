import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"
import { SliderInfo } from "./SliderInfo";

export const SlideShow: React.FC<any> = ({randomAnimes}) => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    const pages = randomAnimes ? randomAnimes.length : 3

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
        randomAnimes ? 
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
                {randomAnimes && randomAnimes.map((_: string, idx: number) => (
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