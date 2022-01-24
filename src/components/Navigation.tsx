import React,{useEffect} from "react";

import { Link } from 'react-router-dom';

import { Box } from "@mui/material";
import { useTypesSelector } from '../hooks/useTypesSelector';

export const Navigation: React.FC = () => {
    const {isAnime} = useTypesSelector(state => state.anime)

    useEffect(() => {
    
    },[isAnime])

    return(
        <Box sx={{ flexGrow: 1 }}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={isAnime ? '/popular+anime' : '/popular+manga'}>Popular</Link></li>
                <li><Link to='/genres'>Genres</Link></li>
            </ul>
        </Box>
    )
}