import React, { useEffect, useRef, useState } from "react";
import {Loading} from "./Loading"

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
        }, 2500);
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
                        {randomAnimes && randomAnimes.map((titles: any) => <div
                            className="slide"
                            key={titles.url}
                        >
                            <div>
                                <div className="slide-item" key={titles.url}>
                                    <img className="slide-poster" src={titles.images.webp.image_url} alt="poster" />
                                    <div>
                                        <div>
                                            <p>{titles.title} / {titles.title_japanese}</p>
                                            <p>{titles.aired.string}</p>
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
                </div>
                <div className="slide-show-dots">
                        {randomAnimes && randomAnimes.map((_: string, idx: number) => (
                            <div
                                key={idx}
                                className={`slide-show-dot${index === idx ? " active" : ""}`}
                                onClick={() => { setIndex(idx); } }
                            >
                            </div>
                        ))}
                </div>
        </div> : <Loading/>
    )
}