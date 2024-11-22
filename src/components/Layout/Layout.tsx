import { Box } from '@mui/material';
import { useEffect } from 'react';

import { Navigation } from '../../components/Navigation/Navigation';
import { getFromStorage, setToStorage } from '../../utils';
import { useTypedSelector } from '../../hooks';
import { Outlet } from 'react-router-dom';
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
