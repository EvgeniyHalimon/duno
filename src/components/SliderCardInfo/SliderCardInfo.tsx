import React from "react";
import { Link } from "react-router-dom";

import { IGenre, ITitle } from "../../types/types";

import './SliderCardInfo.scss'

interface ISliderInfo{
    title: ITitle
}

export const SliderCardInfo: React.FC<ISliderInfo> = ({title}) => {

    const score: any = title.score || title.scored
    const color = score >= 7.5 ? 'green' : 
                (score >= 5 && score <= 7.5) ? 'orange' : 
                (score <= 4.9) ? 'red' : 'white'
    
    return(
        <Link to={`/title/${title?.mal_id}`} key={title?.url}>
            <div
                className="slide"
                key={title.url}
            >
                <div className="slide-item" key={title.url}>
                    <img className="slide-poster" src={title.images?.webp.image_url} alt={`${title.title}-poster`} />
                    <div className="slide-info">
                        <p>{title.title} / {title.title_japanese}</p>
                        <p>{title.type}</p>
                        <p>{title.aired?.string || title.published?.string}</p>
                        <p
                            style={{color: color}}
                        >Score: {title.score || title.scored}</p>
                        <p>Rank: {title.rank}</p>
                        <div className="slide-genres">
                            {title.genres?.map((genre: IGenre) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                        </div>
                        <p className="slide-synopsis">
                            {title.synopsis?.slice(0, 750)}
                            <Link to={`/title/${title?.mal_id}`} style={{fontSize: '10px'}}>...show more</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Link >
    )
}