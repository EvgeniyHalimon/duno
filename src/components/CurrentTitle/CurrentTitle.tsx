import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navigation } from "../Navigation/Navigation";
import { fetchAnimeReviews } from "../../store/actions/anime-action-creators";
import { fetchMangaReviews } from "../../store/actions/manga-action-creators";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { getScoreColor } from "../../utils/getColor";
import { getFromStorage } from "../../utils/storage";
import { IGenre, ITitle } from "../../types/types";
import './CurrentTitle.scss'

interface ISliderInfo{
    title: ITitle
}

export const CurrentTitle: React.FC<ISliderInfo> = ({title}) => {
    const dispatch = useDispatch()
    const titleScore = getFromStorage('topic') === 'anime' ? title.score : title.scored

    const {animeReviews} = useTypesSelector(state => state.anime)
    const {mangaReviews} = useTypesSelector(state => state.manga)

    const reviews = getFromStorage('topic') === 'anime'  ? animeReviews : mangaReviews

    const score: any = title.score || title.scored

    const id: any = title?.mal_id

    const getPlaceEmoji = (rank: any) => {
        if(rank === 1) return <span>&#129351;</span>
        if(rank === 2) return <span>&#129352;</span>
        if(rank === 3) return <span>&#129353;</span>
        return rank
    }
    
    useEffect(() => {
        getFromStorage('topic') === 'anime'  ? dispatch(fetchAnimeReviews(id)) : dispatch(fetchMangaReviews(id))
    },[getFromStorage('topic'), id])
    
    return(
        <div className="current-title-wrapper">
            <Navigation />
            <div
                className="title"
            >
                <div className="title-item">
                    <img className="title-poster-current" src={title.images?.webp.large_image_url} alt={`${title.title}-poster`} />
                    <div className="title-info">
                        <p className="title-title_name">{title.title} / {title.title_japanese}</p>
                        <p>{getFromStorage('topic') === 'anime'  ? `Rating: ${title.rating}` : null}</p>
                        <p>{title.type}</p>
                        <p>{title.aired?.string || title.published?.string}</p>
                        <p className="title-rank">Rank: {getPlaceEmoji(title.rank)}</p>
                        <p>Status: {title.status}</p>
                        <p
                            style={{color: getScoreColor(score)}}
                        >{titleScore === null ? null : `Score: ${getScoreColor(score)}`}</p>
                        <p>{title.scored_by === null ? null : `Scored by: ${title.scored_by} users`} </p>
                        <div className="title-genres">
                            {title.genres?.map((genre: IGenre) => <p className="title-name" key={genre.mal_id}>{genre.name}</p>)}
                        </div>
                        <p className="title-synopsis">{title.synopsis}</p>
                        <p>{getFromStorage('topic') === 'anime'  ? `Duration: ${title.duration}` : null}</p>
                        <p>{getFromStorage('topic') === 'anime'  ? `Episodes: ${title.episodes}` : `Chapters: ${title.chapters}`}</p>
                        <Link className="title-link" to={`/reviews/${id}`}>See reviews ({reviews.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}