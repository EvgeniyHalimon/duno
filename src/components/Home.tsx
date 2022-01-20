import React, { useEffect, useState } from "react";
import { URL_MANGA_SEARCH, URL_RANDOM_ANIME, URL_RANDOM_MANGA, URL_TOP_ANIME } from "../constants/constants";
import axios from "axios";
import { Navigation } from "./Navigation";
import { Box } from '@mui/material';
import { Slider } from "./Slider";
import { Titles } from "./Titles";
import { Head } from "./Head";

export const Home: React.FC = () => {
    const [topAnime, setTopAnime] = useState([])

    async function getData(){
        const data = await axios.get(`${URL_TOP_ANIME}?page=1&limit=5`)
        const data1 = await axios.get(`${URL_MANGA_SEARCH}?q=berserk`)
        const a = await axios.get(`${URL_RANDOM_ANIME}`)
        const m = await axios.get(`${URL_RANDOM_MANGA}`)
        console.log(data.data);
        console.log(data1.data);
        console.log(a.data.data);
        console.log(m.data);
    }

    useEffect(() => {
        getData()
    },[])

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