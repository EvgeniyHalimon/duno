import { Box } from '@mui/material';

import { Head } from "../Header/Head";
import { RandomTitlesContainer } from "../RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../Titles";
import { Navigation } from "../Navigation/Navigation";
import { getFromStorage, setToStorage } from "../../utils/storage";
import './Home.scss';
import { useEffect } from 'react';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { useDispatch } from 'react-redux';
import { isTitleFlag } from '../../store/actions/title-action-creators';

export const Home: React.FC = () => {

    const dispatch = useDispatch()

    if(getFromStorage('topic') === null){
        setToStorage('topic', 'anime')
    }

    const topic = getFromStorage('topic')
    const {isTitle} = useTypesSelector(state => state.title)

    useEffect(() => {
        if(topic === 'anime'){
            dispatch(isTitleFlag('anime'))
        } else if(topic === 'manga'){
            dispatch(isTitleFlag('manga'))
        }
    },[isTitle])

    return (
        <Box className="home">
            <Navigation/>
            <div className="home-wrapper">
                <Head/>
                <RandomTitlesContainer/>
                <Titles/>
            </div>
        </Box>
    )
}