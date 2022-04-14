import React from "react";
import { Link } from "react-router-dom";
import { IGenre, ITitle } from "../types/types";

interface IPaganatedTitle{
    titles?: ITitle
}

export const Title: React.FC<IPaganatedTitle> = ({titles}) => {
console.log(titles);
    return(
        <Link className="titles-item" to={`/title/${titles?.mal_id}`} key={titles?.url}>     
                <img className="title-poster" src={titles?.images?.webp.image_url} alt={`${titles?.title}-Poster`} />
                <p>{titles?.title} / {titles?.title_japanese}</p> 
                <p>{titles?.aired?.string  || titles?.published?.string}</p>
                <p>{titles?.type}</p>
                <div className="title-genres">
                    {titles?.genres?.map((genre: IGenre) =>
                        <p className="genres-name" key={genre.mal_id}>{genre.name}</p>
                    )}
                </div>
                <p>Score : {titles?.score || titles?.scored}</p>
                <p>Rank : {titles?.rank}</p>
        </Link>
    )
}
