import React from "react";

export const PaginatedTitles: React.FC<any> = ({paginatedTitles}) => {
    return(
        <div className="titles-section">
            <div className="titles-list">
                {paginatedTitles && paginatedTitles.map((titles: any) =>
                <div className="titles-item" key={titles.url}>
                    <img className="title-poster" src={titles.images.webp.image_url} alt="poster" />
                    <p>{titles.title} / {titles.title_japanese}</p> 
                    <p>{titles.aired?.string  || titles.published?.string}</p>
                    <div className="title-genres">
                        {titles.genres.map((item: any) =>
                            <p className="genres-name" key={item.mal_id}>{item.name}</p>
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