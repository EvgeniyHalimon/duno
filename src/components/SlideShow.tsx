import React, { useEffect, useRef, useState } from "react";


const colors = ["#0088FE", "#00C49F", "#FFBB28"]

export const SlideShow: React.FC = () => {
    const [index, setIndex] = useState(0)
    const timeoutRef:any = useRef(null)
    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => 
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            )
        }, 2500);
        return () => {
            resetTimeout()
        }
    },[index])

    return(
        <div>
            <div className="slide-show">
                <div 
                    className="slide-show-slider"
                    style={{transform: `translate3d(${-index * 100}%, 0, 0`}}
                >
                    {colors.map((backgroundColor: string, index: number) => 
                        <div 
                            className="slide"
                            key={index}
                            style={{backgroundColor}}
                        >
                            {index}
                        </div>
                    )}
                </div>
            </div>
            <div className="slide-show-dots">
                {colors.map((_: string, idx: number) => (
                    <div
                        key={idx}
                        className={`slide-show-dot${index === idx ? " active" : ""}`}
                        onClick={() => {setIndex(idx)}}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}