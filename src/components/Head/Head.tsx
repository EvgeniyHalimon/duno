import { Box } from '@mui/system';

import { Search, Switcher } from '..';
import './Head.scss';

export const Head = () => {
  return (
    <Box className="header" data-testid="head">
      <Switcher />
      <Search />
    </Box>
  );
};
