import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CurrentTitle } from "../components/CurrentTitle/CurrentTitle";
import { fetchCurrentTitle } from "../store/actions/title-action-creators";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getFromStorage } from "../utils/storage";

export const TitleContainer: React.FC = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {currentTitle} = useTypesSelector(state => state.title) 
    
    const topic = getFromStorage('topic')

    useEffect(() => {
        dispatch(fetchCurrentTitle(id))
    },[topic, id])

    if(!currentTitle){
        return <h1>Loading..</h1> 
    }

    return(
        <CurrentTitle title={currentTitle}/>
    )
}