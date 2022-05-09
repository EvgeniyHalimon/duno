import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/Navigation/Navigation';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { fetchAnimeReviews, fetchCurrentAnimeTitle } from '../../store/actions/anime-action-creators';
import { fetchCurrentMangaTitle, fetchMangaReviews } from '../../store/actions/manga-action-creators';
import { getFromStorage } from '../../utils/storage';
import { IReview } from '../../types/types';
import './Reviews.scss';

export const Reviews = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const topic = getFromStorage('topic')

    const {animeReviews, currentAnimeTitle} = useTypesSelector(state => state.anime)
    const {mangaReviews, currentMangaTitle} = useTypesSelector(state => state.manga)
    const reviews = topic === 'anime' ? animeReviews : mangaReviews
    const title = topic === 'anime' ? currentAnimeTitle : currentMangaTitle

    useEffect(() => {
        if(topic === 'anime'){
            dispatch(fetchAnimeReviews(Number(id)))
            dispatch(fetchCurrentAnimeTitle(id)) 
        } else if (topic === 'manga'){
            dispatch(fetchMangaReviews(Number(id)))
            dispatch(fetchCurrentMangaTitle(id))
        }
    },[topic, id])

    return(
        reviews.length === 0 ?
        <div className='wrapper-reviews'>
            <Navigation/>
            <h1 className='review-title'>No review's yet</h1> 
        </div> :
        <div className='review-wrapper'>
            <Navigation/>
            <div className='review-list'>
                {
                    title ? <h1 className='review-list-title' id="top">Review's on {title.title}</h1> :
                    <h1>Loading..</h1>    
                }
                {reviews.map((review: IReview) => 
                    <div className='review' key={review.mal_id}>
                        <div className='user'>
                            <img className='user-image' src={review.user.images.webp.image_url} alt={`${review.user.username}-avatar`}/>
                            <p className='user-username'>Review by <i>{review.user.username}</i></p>
                        </div>
                        <div className='review-block'>
                            <p className='review-block-text'>{review.review}</p>
                            <p className='review-block-quantity'>{topic === 'anime' ? `Episodes watched : ${review.episodes_watched}` : `Chapter's read : ${review.chapters_read}`}</p>
                            <div className='review-block-score'>
                                <p>Character: {review?.scores.character}</p>
                                <p>Enjoyment: {review?.scores.enjoyment}</p>
                                <p>{topic === 'anime' ? `Sound: ${review?.scores.sound}` : `Art: ${review?.scores.art}`}</p>
                                <p>Story: {review?.scores.story}</p>
                                <p>Overall: {review?.scores.overall}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <a className='anchor' href='#top'>&#11014;</a>
        </div>
    )
}