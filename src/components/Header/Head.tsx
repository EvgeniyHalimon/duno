import { Search } from "./Search";
import { Switcher } from './Switcher';

import { Box } from "@mui/system";

import './Head.scss'

export const Head: React.FC = () => {
    return(
        <Box className="header">
            <Switcher/>
            <Search/>
        </Box>
    )
}