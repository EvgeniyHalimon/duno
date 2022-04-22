import React from 'react';
import { Home } from './components/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { Genres } from './pages/Genres/Genres';
import { Genre } from './pages/Genre';
import { SearchResultList } from './components/SearchList';
import { TitleContainer } from './pages/TitleContainer';
import { Popular } from './pages/Popular';
import { Error } from './pages/404/404';
import { ErrorSearch } from './pages/404/ErrorSearch';

const theme = createTheme({
  spacing: 5
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
            <Route path='/search+result+list' element={<SearchResultList/>}/>
            <Route path='/title/:id' element={<TitleContainer/>}/>
            <Route path='/title+not+found' element={<ErrorSearch/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
