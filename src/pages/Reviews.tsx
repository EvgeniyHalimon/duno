import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { fetchAnimeReviews } from '../store/actions/anime-action-creators'
import { fetchMangaReviews } from '../store/actions/manga-action-creators'
import { IReview } from '../types/types'

export const Reviews = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const topic: string | null = localStorage.getItem('topic')

    const {animeReviews} = useTypesSelector(state => state.anime)
    const {mangaReviews} = useTypesSelector(state => state.manga)
    const reviews = topic === 'anime' ? animeReviews : mangaReviews
    console.log("🚀 ~ file: Reviews.tsx ~ line 17 ~ Reviews ~ reviews", reviews)

    useEffect(() => {
        topic ==='anime' ? dispatch(fetchAnimeReviews(id)) : dispatch(fetchMangaReviews(id))
    },[topic, id])

    return(
        <>
            {reviews.map((review: IReview) => 
                <div>
                    <img src={review.user.images.webp.image_url} alt={`${review.user.username}-avatar`}/>
                    <p>{review.user.username}</p>
                    <p>
                        {review.review.slice(0, 250)}
                        <Link to={`/reviews/${id}/${review.mal_id}`}>...</Link>
                    </p>
                    
                </div>
            )}
        </>
    )
}