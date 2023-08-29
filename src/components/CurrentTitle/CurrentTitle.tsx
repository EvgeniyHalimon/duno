import { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navigation } from "../Navigation/Navigation";
import { fetchTitleReviews } from "../../store/actions/title-action-creators";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { getScoreColor } from "../../utils/getColor";
import { getFromStorage } from "../../utils/storage";
import { IGenre, ITitle } from "../../types/types";
import './CurrentTitle.scss'

interface ISliderInfo{
    title: ITitle
}

export const CurrentTitle: FC<ISliderInfo> = ({title}) => {
    const dispatch = useDispatch()
    const {titleReviews} = useTypesSelector(state => state.title)
    
    const topic = getFromStorage('topic')
    const isAnime = topic === 'anime'
    
    const titleScore = isAnime ? title.score : title.scored

    const score = title.score || title.scored

    const id = title?.mal_id

    const getPlaceEmoji = (rank: number | null | undefined) => {
        if(rank === 1) return <span>&#129351;</span>
        if(rank === 2) return <span>&#129352;</span>
        if(rank === 3) return <span>&#129353;</span>
        return rank
    }
    
    useEffect(() => {
        dispatch(fetchTitleReviews(id))
    },[topic, id])
    
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
                        <p>{isAnime  ? `Rating: ${title.rating}` : null}</p>
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
                        <p>{isAnime  ? `Duration: ${title.duration}` : null}</p>
                        <p>{isAnime  ? `Episodes: ${title.episodes}` : `Chapters: ${title.chapters}`}</p>
                        <Link className="title-link" to={`/reviews/${id}`}>See reviews ({titleReviews ? titleReviews.length : 0})</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}