import { Box } from "@mui/system";

import { Search } from "./Search";
import { Switcher } from './Switcher';
import './Head.scss'

export const Head = () => {
    return(
        <Box className="header">
            <Switcher/>
            <Search/>
        </Box>
    )
}