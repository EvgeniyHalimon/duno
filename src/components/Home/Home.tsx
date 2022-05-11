import { Box } from '@mui/material';

import { Head } from "../Header/Head";
import { RandomTitlesContainer } from "../RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../Titles";
import { Navigation } from "../Navigation/Navigation";
import { getFromStorage, setToStorage } from "../../utils/storage";
import './Home.scss';

export const Home: React.FC = () => {

    if(getFromStorage('topic') === null){
        setToStorage('topic', 'anime')
    }

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