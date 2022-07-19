import { NavLink } from 'react-router-dom';
import { Box } from "@mui/material";

import './Navigation.scss' 

export const Navigation: React.FC = () => {

    return(
        <Box sx={{ flexGrow: 1 }} className='sidebar'>
            <ul className="navigation">
                <li>
                    <NavLink 
                        to='/'
                        className="navigation-link"
                    >
                        HOME</NavLink>
                </li>
                <li>
                    <NavLink 
                        to={'/popular'}
                        className="navigation-link"
                    >
                        POPULAR</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/genres'
                        className="navigation-link"
                    >
                        GENRES</NavLink>
                </li>
            </ul>
        </Box>
    )
}