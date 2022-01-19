import React from "react";

import { Link } from 'react-router-dom';

import { Box } from "@mui/material";

export const Navigation: React.FC = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/popular+anime'>Popular</Link></li>
                <li><Link to='/popular+manga'>Popular</Link></li>
                <li><Link to='/genres'>Genres</Link></li>
            </ul>
        </Box>
    )
}