import React from "react";

import { useDispatch } from "react-redux";

import { Box, Button } from '@mui/material';

import { isMangaFlag } from '../../store/actions/manga-action-creators';
import { isAnimeFlag } from '../../store/actions/anime-action-creators';

export const Switcher: React.FC = () => {
    const dispatch = useDispatch()

    function chooseTopic(string: string){
        localStorage.setItem("topic", string)
        if(string === "anime"){
            dispatch(isAnimeFlag(true))
            dispatch(isMangaFlag(false))
        } else if (string === "manga"){
            dispatch(isMangaFlag(true))
            dispatch(isAnimeFlag(false))
        }
        
    }

    return(
        <Box>
            <Button
                onClick={() => { chooseTopic('anime') }}
            >
                Anime
            </Button>
            <Button
                onClick={() => { chooseTopic('manga') }}
            >
                Manga
            </Button>
        </Box>
    )
}