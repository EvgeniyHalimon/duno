import React from "react";

import { Head } from "../Header/Head";
import { RandomTitlesContainer } from "../RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../Titles";
import { Navigation } from "../Navigation/Navigation";

import { Box } from '@mui/material';

export const Home: React.FC = () => {
    return (
        <Box style={{display : 'flex', height: '152vh'}}>
            <Navigation/>
            <div style={{width: '93vw'}}>
                <Head/>
                <RandomTitlesContainer/>
                <Titles/>
            </div>
        </Box>
    )
}