import React from "react";
import { Link } from "react-router-dom";
import { IGenre, ITitle } from "../../types/types";

import './Title.scss'

interface IPaganatedTitle{
    title?: ITitle
}

export const Title: React.FC<IPaganatedTitle> = ({title}) => {
    return(
        <Link className="titles-item" to={`/title/${title?.mal_id}`} key={title?.url}>     
                <img className="title-poster" src={title?.images?.webp.image_url} alt={`${title?.title}-Poster`} />
                <p>{title?.title} / {title?.title_japanese}</p> 
                <p>{title?.aired?.string  || title?.published?.string}</p>
                <p>{title?.type}</p>
                <div className="title-genres">
                    {title?.genres?.map((genre: IGenre) =>
                        <p className="genres-name" key={genre.mal_id}>{genre.name}</p>
                    )}
                </div>
                <p>Score : {title?.score || title?.scored}</p>
                <p>Rank : {title?.rank}</p>
        </Link>
    )
}
