import React from "react";

import { Head } from "../Header/Head";
import { RandomTitlesContainer } from "../RandomPaginatedTitles/RandomTitlesContainer";
import { Titles } from "../Titles";
import { Navigation } from "../Navigation/Navigation";

import { Box } from '@mui/material';

export const Home: React.FC = () => {
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