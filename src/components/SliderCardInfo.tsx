import React from "react";
import { IGenres, ITitles } from "../types/types";

interface ISliderInfo{
    titles: ITitles | ITitles[]
}

export const SliderCardInfo: React.FC<ISliderInfo> = ({titles}) => {
    return(
        <>
            {titles.map((randomTitles: ITitles) => 
                <div
                    className="slide"
                    key={randomTitles.url}
                >
                    <div className="slide-item" key={randomTitles.url}>
                        <img className="slide-poster" src={randomTitles.images?.webp.image_url} alt={`${randomTitles.title}-Poster`} />
                        <div>
                            <p>{randomTitles.title} / {randomTitles.title_japanese}</p>
                            <p>{randomTitles.type}</p>
                            <p>{randomTitles.aired?.string || randomTitles.published?.string}</p>
                            <p>Score: {randomTitles.score || randomTitles.scored}</p>
                            <p>Rank: {randomTitles.rank}</p>
                            <div className="slide-genres">
                                {randomTitles.genres?.map((genre: IGenres) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                            </div>
                            <p className="slider-synopsis">
                                {randomTitles.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}