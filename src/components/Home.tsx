import React from "react";

import { Head } from "./Header/Head";
import { Navigation } from "./Navigation";
import { RandomTitlesContainer } from "./RandomTitlesContainer";
import { Titles } from "./Titles";

import { Box } from '@mui/material';

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