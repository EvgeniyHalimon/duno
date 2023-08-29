import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Home } from './pages/Home/Home';
import { SearchResultList } from './pages/SearchList';
import { Genres } from './pages/Genres/Genres';
import { Genre } from './pages/Genre';
import { TitleContainer } from './pages/TitleContainer';
import { Popular } from './pages/Popular';
import { Error } from './pages/404/404';
import { ErrorSearch } from './pages/404/ErrorSearch';
import { Reviews } from './pages/Reviews/Reviews';
import { store } from './store/store';


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
            <Route path='/' element={<Home/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/genres/:name' element={<Genre/>}/>
            <Route path='/genres' element={<Genres/>}/>
            <Route path='/search-result-list' element={<SearchResultList/>}/>
            <Route path='/title/:id' element={<TitleContainer/>}/>
            <Route path='/reviews/:id' element={<Reviews/>}/>
            <Route path='/title-not-found' element={<ErrorSearch/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
