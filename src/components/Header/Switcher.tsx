import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { isTitleFlag, setCurrentTitlePage } from '../../store/actions/title-action-creators';

import { setToStorage } from "../../utils/storage";

export const Switcher: React.FC = () => {
    const dispatch = useDispatch()

    function chooseTopic(string: string){
        setToStorage("topic", string)
        if(string === 'anime'){
            dispatch(isTitleFlag('anime'))
            dispatch(setCurrentTitlePage(1))
        } else if(string === 'manga'){
            dispatch(isTitleFlag('manga'))
            dispatch(setCurrentTitlePage(1))
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