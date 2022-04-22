import React from "react";

import { Link } from 'react-router-dom';

import { Box } from "@mui/material";

import './Navigation.scss' 

export const Navigation: React.FC<any> = () => {

    return(
        <Box sx={{ flexGrow: 1 }} className='sidebar'>
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
                        to={'/popular'}
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