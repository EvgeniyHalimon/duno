import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"

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
        
        <>
            {randomTitles ? 
                <div className="slide-show">
                    <div
                        className="slide-show-slider"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0` }}
                    >
                        {randomTitles && randomTitles.map((titles: any) => <div
                            className="slide"
                            key={titles.url}
                        >
                            <div>
                                <div className="slide-item" key={titles.url}>
                                    <img className="slide-poster" src={titles.images.webp.image_url} alt="poster" />
                                    <div>
                                        <div>
                                            <p>{titles.title} / {titles.title_japanese}</p>
                                            <p>{titles.aired?.string || titles.published?.string}</p>
                                            <p>Score: {titles.score}</p>
                                            <p>Rank: {titles.rank}</p>
                                            <div className="slide-genres">
                                                {titles.genres.map((genre: any) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>
                                                )}
                                            </div>
                                        </div>
                                        <p className="slider-synopsis">
                                            {titles.synopsis}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div> : <Loading/>}
                <div className="slide-show-dots">
                    {randomTitles && randomTitles.map((_: string, idx: number) => (
                        <div
                            key={idx}
                            className={`slide-show-dot${index === idx ? " active" : ""}`}
                            onClick={() => { setIndex(idx); } }
                        >
                        </div>
                    ))}
                </div>
        </> 
    )
}