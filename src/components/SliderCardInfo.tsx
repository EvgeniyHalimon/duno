import React from "react";

export const SliderCardInfo: React.FC<any> = ({titles}) => {
    return(
        <React.Fragment>
            <div className="slide-item" key={titles.url}>
                <img className="slide-poster" src={titles.images.webp.image_url} alt={`${titles.title}-Poster`} />
                <div>
                    <p>{titles.title} / {titles.title_japanese}</p>
                    <p>{titles.type}</p>
                    <p>{titles.aired?.string || titles.published?.string}</p>
                    <p>Score: {titles.score || titles.scored}</p>
                    <p>Rank: {titles.rank}</p>
                    <div className="slide-genres">
                        {titles.genres.map((genre: any) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                    </div>
                </div>
                <p className="slider-synopsis">
                    {titles.synopsis}
                </p>
            </div>
        </React.Fragment>
    )
}