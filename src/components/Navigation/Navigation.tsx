import React from "react";

import { Link } from 'react-router-dom';

import { Box } from "@mui/material";
import { useTypesSelector } from "../../hooks/useTypesSelector";

import './Navigation.scss' 

export const Navigation: React.FC = () => {
    const {isAnime} = useTypesSelector(state => state.anime)

    return(
        <Box sx={{ flexGrow: 1 }}>
            <ul className="navigation">
                <li>
                    <Link 
                        to='/'
                        className="navigation-link"
                    >
                        HOME</Link>
                </li>
                <li>
                    <Link 
                        to={isAnime ? '/popular+anime' : '/popular+manga'}
                        className="navigation-link"
                    >
                        POPULAR</Link>
                </li>
                <li>
                    <Link 
                        to='/genres'
                        className="navigation-link"
                    >
                        GENRES</Link>
                </li>
            </ul>
        </Box>
    )
}