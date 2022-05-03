import React from "react";

import { Link } from "react-router-dom";

import { IGenre, ITitle } from "../../types/types";

import './Title.scss'

interface IPaganatedTitle{
    title?: ITitle
}

export const Title: React.FC<IPaganatedTitle> = ({title}) => {

    const score: any = title?.score || title?.scored
    const color = score >= 7.5 ? 'green' : 
                (score >= 5 && score <= 7.5) ? 'orange' : 
                (score <= 4.9) ? 'red' : 'white'
    return(
        <Link target={'_blank'} className="titles-item" to={`/title/${title?.mal_id}`} key={title?.url}>     
                <img className="title-poster" src={title?.images?.webp.image_url} alt={`${title?.title}-Poster`} />
                <div className="title-info">
                    <p className="info">{title?.title} / {title?.title_japanese}</p> 
                    <p className="info">{title?.aired?.string  || title?.published?.string}</p>
                    <p className="info">{title?.type}</p>
                    <div className="title-genres">
                        {title?.genres?.map((genre: IGenre) =>
                            <p className="genres-name" key={genre.mal_id}>{genre.name}</p>
                        )}
                    </div>
                    <p
                        style={{color : color}} className="info"
                    >Score : {title?.score || title?.scored}</p>
                    <p className="info">Rank : {title?.rank}</p>
                </div>
        </Link>
    )
}
