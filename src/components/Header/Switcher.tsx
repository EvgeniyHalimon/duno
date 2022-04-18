import React from "react";

import { useDispatch } from "react-redux";

import { Box, Button } from '@mui/material';

import { fetchPaginatedMangas, isMangaFlag, setCurrentMangaPage } from '../../store/actions/manga-action-creators';
import { fetchPaginatedAnimes, isAnimeFlag, setCurrentAnimePage } from '../../store/actions/anime-action-creators';

export const Switcher: React.FC = () => {
    const dispatch = useDispatch()

    function chooseTopic(string: string){
        localStorage.setItem("topic", string)
        if(string === "anime"){
            dispatch(isAnimeFlag(true))
            dispatch(isMangaFlag(false))
            window.location.reload()
        } else if (string === "manga"){
            dispatch(isMangaFlag(true))
            dispatch(isAnimeFlag(false))
            window.location.reload()
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