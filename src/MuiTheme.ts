import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 5,
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: 'center',
          paddingBottom: '20px !important',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: 'white !important',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white !important',
        },
      },
    },
  },
});
