import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Home } from './pages/Home/Home';
import { SearchResult } from './pages/SearchResult/SearchResult';
import { Genres } from './pages/Genres/Genres';
import { Genre } from './pages/Genre/Genre';
import { CertainTitle } from './pages/CertainTitle/CertainTitle';
import { Popular } from './pages/Popular/Popular';
import { Error } from './pages/404/404';
import { ErrorSearch } from './pages/404/ErrorSearch';
import { Reviews } from './pages/Reviews/Reviews';
import { store } from './store/store';
import { Layout } from './components/Layout/Layout';


const theme = createTheme({
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
          color: 'white !important'
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white !important'
        },
      },
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/popular' element={<Popular />} />
              <Route path='/genres/:name' element={<Genre />} />
              <Route path='/genres' element={<Genres />} />
              <Route path='/search-result-list' element={<SearchResult />} />
              <Route path='/title/:id' element={<CertainTitle />} />
              <Route path='/reviews/:id' element={<Reviews />} />
              <Route path='/title-not-found' element={<ErrorSearch />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
