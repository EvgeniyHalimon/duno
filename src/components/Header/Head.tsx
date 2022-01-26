import React from "react";
import { Search } from "./Search";
import { Switcher } from './Switcher';
import { Box } from "@mui/system";

export const Head: React.FC = () => {
    return(
        <Box className="header">
            <Switcher/>
            <Search/>
        </Box>
    )
}