import React from "react";
import { IGenres, ITitles } from "../types/types";

interface ISliderInfo{
    titles: ITitles
}

export const SliderCardInfo: React.FC<ISliderInfo> = ({titles}) => {
console.log("🚀 ~ file: SliderCardInfo.tsx ~ line 9 ~ titles", titles)
    return(
        <>
            <div className="slide-item" key={titles.url}>
                <img className="slide-poster" src={titles.images?.webp.image_url} alt={`${titles.title}-Poster`} />
                <div>
                    <p>{titles.title} / {titles.title_japanese}</p>
                    <p>{titles.type}</p>
                    <p>{titles.aired?.string || titles.published?.string}</p>
                    <p>Score: {titles.score || titles.scored}</p>
                    <p>Rank: {titles.rank}</p>
                    <div className="slide-genres">
                        {titles.genres?.map((genre: IGenres) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                    </div>
                    <p className="slider-synopsis">
                        {titles.synopsis}
                    </p>
                </div>
            </div>
        </>
    )
}