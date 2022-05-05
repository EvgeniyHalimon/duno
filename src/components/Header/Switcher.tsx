import { useDispatch } from "react-redux";

import { isMangaFlag } from '../../store/actions/manga-action-creators';
import { Box, Button } from '@mui/material';

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
        <Box className="switcher">
            <Button
                onClick={() => { chooseTopic('anime') }}
            >
                <p className="topic">Anime</p> 
            </Button>
            <Button
                onClick={() => { chooseTopic('manga') }}
            >
                <p className="topic">Manga</p>
            </Button>
        </Box>
    )
}