import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '..';
import { getFromStorage, setToStorage } from '../../utils';
import { useTypedSelector } from '../../hooks';
import './Layout.scss';

export const Layout = () => {
  if (getFromStorage('topic') === null) {
    setToStorage('topic', 'anime');
  }

  const { isTitle } = useTypedSelector((state) => state.title);

  useEffect(() => {}, [isTitle]);

  return (
    <Box className="layout" data-testid="layout">
      <Navigation />
      <Outlet />
    </Box>
  );
};
