import React from "react";
import { IGenres, ITitles } from "../types/types";

interface IPaganatedTitles{
    paginatedTitles: ITitles
}

export const PaginatedTitles: React.FC<IPaganatedTitles> = ({paginatedTitles}) => {
    return(
        <div className="titles-section">
            <div className="titles-list">
                {paginatedTitles && paginatedTitles.map((titles: ITitles) =>
                <div className="titles-item" key={titles.url}>
                    <img className="title-poster" src={titles.images?.webp.image_url} alt={`${titles.title}-Poster`} />
                    <p>{titles.title} / {titles.title_japanese}</p> 
                    <p>{titles.aired?.string  || titles.published?.string}</p>
                    <p>{titles.type}</p>
                    <div className="title-genres">
                        {titles.genres?.map((genre: IGenres) =>
                            <p className="genres-name" key={genre.mal_id}>{genre.name}</p>
                        )}
                    </div>
                    <p>Score : {titles?.score || titles?.scored}</p>
                    <p>Rank : {titles.rank}</p>
                </div>
                )}
            </div>
        </div>
    )
}