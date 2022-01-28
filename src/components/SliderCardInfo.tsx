import React from "react";
import { IGenre, ITitle } from "../types/types";

interface ISliderInfo{
    title: ITitle
}

export const SliderCardInfo: React.FC<ISliderInfo> = ({title}) => {
    return(
        <>
            <div
                className="slide"
                key={title.url}
            >
                <div className="slide-item" key={title.url}>
                    <img className="slide-poster" src={title.images?.webp.image_url} alt={`${title.title}-Poster`} />
                    <div>
                        <p>{title.title} / {title.title_japanese}</p>
                        <p>{title.type}</p>
                        <p>{title.aired?.string || title.published?.string}</p>
                        <p>Score: {title.score || title.scored}</p>
                        <p>Rank: {title.rank}</p>
                        <div className="slide-genres">
                            {title.genres?.map((genre: IGenre) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                        </div>
                        <p className="slider-synopsis">
                            {title.synopsis}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}