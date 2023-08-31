import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CurrentTitle } from "../components/CurrentTitle/CurrentTitle";
import { fetchCurrentTitle } from "../store/actions/title-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";
import { Loading } from "../components/Loading/Loading";

export const TitleContainer = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {currentTitle} = useTypesSelector(state => state.title) 
    
    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchCurrentTitle(id))
    },[topic, id])

    if(!currentTitle){
        return <Loading/> 
    }

    return(
        <CurrentTitle title={currentTitle}/>
    )
}