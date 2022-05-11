import { Box, Button } from '@mui/material';

import { setToStorage } from "../../utils/storage";

export const Switcher: React.FC = () => {

    function chooseTopic(string: string){
        setToStorage("topic", string)
        
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