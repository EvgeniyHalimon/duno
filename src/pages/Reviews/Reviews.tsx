import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navigation } from '../../components/Navigation/Navigation';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { fetchCurrentTitle, fetchTitleReviews } from '../../store/actions/title-action-creators';
import { getFromStorage } from '../../utils/storage';
import { IReview } from '../../types/types';
import './Reviews.scss';

export const Reviews = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const topic = getFromStorage('topic') as string;
    const {titleReviews, currentTitle} = useTypesSelector(state => state.title)

    useEffect(() => {
        dispatch(fetchTitleReviews(Number(id)))
        dispatch(fetchCurrentTitle(id))
    },[topic, id])

    return(
        titleReviews.length === 0 ?
        <div className='wrapper-reviews'>
            <h1 className='review-title'>No review's yet</h1> 
        </div> :
        <div className='review-wrapper'>
            <div className='review-list'>
                {
                    currentTitle ? <h1 className='review-list-title' id="top">Review's on {currentTitle.title}</h1> :
                    <h1>Loading..</h1>    
                }
                {titleReviews && titleReviews.map((review: IReview) => 
                    <div className='review' key={review.mal_id}>
                        <div className='user'>
                            <img className='user-image' src={review.user.images.webp.image_url} alt={`${review?.user?.username}-avatar`}/>
                            <p className='user-username'>Review by <i>{review?.user?.username}</i></p>
                        </div>
                        <div className='review-block'>
                            <p className='review-block-text'>{review?.review}</p>
                            <div className='review-block-score'>
                                <p>Score: {review?.score}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <a className='anchor' href='#top'>&#11014;</a>
        </div>
    )
}