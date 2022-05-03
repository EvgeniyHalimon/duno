import React, { useEffect } from "react";

import { CurrentTitle } from "../components/CurrentTitle/CurrentTitle";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchCurrentAnimeTitle } from "../store/actions/anime-action-creators";
import { fetchCurrentMangaTitle } from "../store/actions/manga-action-creators";

export const TitleContainer: React.FC = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const topic: string | null = localStorage.getItem('topic')

    const {currentAnimeTitle} = useTypesSelector(state => state.anime)
    const {currentMangaTitle} = useTypesSelector(state => state.manga) 
    
    const currentTitle = topic === "anime" ? currentAnimeTitle : currentMangaTitle

    useEffect(() => {
        topic === 'anime' ? dispatch(fetchCurrentAnimeTitle(id)) : dispatch(fetchCurrentMangaTitle(id))
    },[id])

    return(
        <CurrentTitle title={currentTitle}/>
    )
}