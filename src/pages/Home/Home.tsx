import { Box } from '@mui/material';

import { Head } from "../../components/Header/Head";
import { RandomTitlesContainer } from "../../components/RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../../components/Titles";
import { Navigation } from "../../components/Navigation/Navigation";
import { getFromStorage, setToStorage } from "../../utils/storage";
import './Home.scss';
import { useEffect } from 'react';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { useDispatch } from 'react-redux';
import { isTitleFlag } from '../../store/actions/title-action-creators';

export const Home = () => {

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