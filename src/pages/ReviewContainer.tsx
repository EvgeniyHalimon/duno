import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchAnimeReviews } from "../store/actions/anime-action-creators";
import { fetchMangaReviews } from "../store/actions/manga-action-creators";
import { useDispatch } from "react-redux";
import { Review } from "./Review";

export const ReviewContainer: React.FC = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const topic: string | null = localStorage.getItem('topic')

    const {animeReviews} = useTypesSelector(state => state.anime)
    const {mangaReviews} = useTypesSelector(state => state.manga)
    const reviews = topic === 'anime' ? animeReviews : mangaReviews
    console.log("🚀 ~ file: ReviewContainer.tsx ~ line 19 ~ reviews", reviews)

    useEffect(() => {
        topic ==='anime' ? dispatch(fetchAnimeReviews(id)) : dispatch(fetchMangaReviews(id))
    },[topic, id])

    return(
        <Review review={reviews}/>
    )
}