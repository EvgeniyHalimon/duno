/* eslint-disable react/style-prop-object */
import React from "react";

import { IGenre, ITitle } from "../../types/types";

import './CurrentTitle.scss'
import { Navigation } from "../Navigation/Navigation";

interface ISliderInfo{
    title: ITitle
}

export const CurrentTitle: React.FC<ISliderInfo> = ({title}) => {
    const topic: string | null = localStorage.getItem('topic')
    const titleScore = topic === 'anime' ? title.score : title.scored

    const score: any = title.score || title.scored
    const color = score >= 7.5 ? 'green' : 
                (score >= 5 && score <= 7.5) ? 'orange' : 
                (score <= 4.9) ? 'red' : 'white'
    
    return(
        <div className="current-title-wrapper">
            <Navigation />
            <div
                className="title"
            >
                <div className="title-item">
                    <img className="title-poster-current" src={title.images?.webp.large_image_url} alt={`${title.title}-poster`} />
                    <div>
                        <p className="title-title_name">{title.title} / {title.title_japanese}</p>
                        <p>{topic === 'anime' ? `Rating: ${title.rating}` : null}</p>
                        <p>{title.type}</p>
                        <p>{title.aired?.string || title.published?.string}</p>
                        <p>Rank: {title.rank}</p>
                        <p>Status: {title.status}</p>
                        <p
                            style={{color: color}}
                        >{titleScore === null ? null : `Score: ${titleScore}`}</p>
                        <p>{title.scored_by === null ? null : `Scored by: ${title.scored_by} users`} </p>
                        <div className="title-genres">
                            {title.genres?.map((genre: IGenre) => <p className="title-name" key={genre.mal_id}>{genre.name}</p>)}
                        </div>
                        <p className="title-synopsis">{title.synopsis}</p>
                        <p>{topic === 'anime' ? `Duration: ${title.duration}` : null}</p>
                        <p>{topic === 'anime' ? `Episodes: ${title.episodes}` : `Chapters: ${title.chapters}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}