/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";

import { Navigation } from "../Navigation/Navigation";

import { IGenre, ITitle } from "../../types/types";

import './CurrentTitle.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAnimeReviews } from "../../store/actions/anime-action-creators";
import { fetchMangaReviews } from "../../store/actions/manga-action-creators";
import { useTypesSelector } from "../../hooks/useTypesSelector";

interface ISliderInfo{
    title: ITitle
}

export const CurrentTitle: React.FC<ISliderInfo> = ({title}) => {
    const dispatch = useDispatch()
    const topic: string | null = localStorage.getItem('topic')
    const titleScore = topic === 'anime' ? title.score : title.scored

    const {animeReviews} = useTypesSelector(state => state.anime)
    const {mangaReviews} = useTypesSelector(state => state.manga)

    const reviews = topic === 'anime' ? animeReviews : mangaReviews

    const score: any = title.score || title.scored
    const color = score >= 7.5 ? 'green' : 
                (score >= 5 && score <= 7.5) ? 'orange' : 
                (score <= 4.9) ? 'red' : 'white'

    const id: any = title?.mal_id

    const place = title.rank == '1' ? <span>&#129351;</span> : title.rank == '2' ? <span>&#129352;</span> : title.rank == '3' ? <span>&#129353;</span> : title.rank
    
    useEffect(() => {
        topic ==='anime' ? dispatch(fetchAnimeReviews(id)) : dispatch(fetchMangaReviews(id))
    },[topic, id])
    
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
                        <p className="title-rank">Rank: {place}</p>
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
                        <Link className="title-link" to={`/reviews/${id}`}>See reviews ({reviews.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}