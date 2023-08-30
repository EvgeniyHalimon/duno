import { Box } from '@mui/material';
import { useEffect } from 'react';

import { Head } from "../../components/Header/Head";
import { RandomTitlesContainer } from "../../components/RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../../components/Titles";
import { Navigation } from "../../components/Navigation/Navigation";
import { getFromStorage, setToStorage } from "../../utils/storage";
import { useTypesSelector } from '../../hooks/useTypesSelector';
import './Home.scss';

export const Home = () => {

    if(getFromStorage('topic') === null){
        setToStorage('topic', 'anime')
    }
   
    const {isTitle} = useTypesSelector(state => state.title)

    useEffect(() => {
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