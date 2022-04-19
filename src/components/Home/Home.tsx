import React from "react";

import { Head } from "../Header/Head";
import { RandomTitlesContainer } from "../RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../Titles";
import { Navigation } from "../Navigation/Navigation";

import { Box } from '@mui/material';

import './Home.scss'

export const Home: React.FC = () => {
    return (
        <Box style={{display : 'flex', height: '100vh'}}>
            <div className='sidebar'>
                <Navigation/>
            </div>
            <div style={{width: '90vw'}}>
                <Head/>
                <RandomTitlesContainer/>
                <Titles/>
            </div>
        </Box>
    )
}