import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CurrentTitle } from "../components/CurrentTitle/CurrentTitle";

import { fetchCurrentAnimeTitle } from "../store/actions/anime-action-creators";
import { fetchCurrentMangaTitle } from "../store/actions/manga-action-creators";

import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";

export const TitleContainer: React.FC = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {currentAnimeTitle} = useTypesSelector(state => state.anime)
    const {currentMangaTitle} = useTypesSelector(state => state.manga) 
    
    const currentTitle = getFromStorage('topic') === "anime" ? currentAnimeTitle : currentMangaTitle

    useEffect(() => {
        getFromStorage('topic') === 'anime' ? dispatch(fetchCurrentAnimeTitle(id)) : dispatch(fetchCurrentMangaTitle(id))
    },[id])

    return(
        <CurrentTitle title={currentTitle}/>
    )
}