import React from "react";
import { Navigation } from "./Navigation";
import { Box } from '@mui/material';
import { Slider } from "./Slider";
import { Titles } from "./Titles";
import { Head } from "./Header/Head";

export const Home: React.FC = () => {
    return (
        <Box style={{display : 'flex', height: '100vh'}}>
            <div className='sidebar'>
                <Navigation/>
            </div>
            <div style={{width: '90vw'}}>
                <Head/>
                <Slider/>
                <Titles/>
            </div>
        </Box>
    )
}