import { Box } from "@mui/system";
import React from "react";
import { Search } from "./Search";
import { Switcher } from './Switcher';

export const Head: React.FC = () => {
    return(
        <Box>
            <Switcher/>
            <Search/>
        </Box>
    )
}