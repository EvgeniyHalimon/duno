import { Box } from "@mui/system";

import { Search } from "../Search/Search";
import { Switcher } from '../Switcher/Switcher';
import './Head.scss'

export const Head = () => {
    return(
        <Box className="header" data-testid="head">
            <Switcher/>
            <Search/>
        </Box>
    )
}