import React from 'react';
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { PopularAnime } from './pages/PopularAnime';
import { PopularManga } from './pages/PopularManga';
import { Genres } from './pages/Genres';
import { Genre } from './pages/Genre';
import { SearchResultList } from './components/SearchList';
import { Title } from './pages/Title';
import { ITitle } from './types/types';

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
            <Route path='/popular+anime' element={<PopularAnime/>}/>
            <Route path='/popular+manga' element={<PopularManga/>}/>
            <Route path='/genres/:name' element={<Genre/>}/>
            <Route path='/genres' element={<Genres/>}/>
            <Route path='/search+result+list' element={<SearchResultList/>}/>
            <Route path='/title/:id' element={<Title/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
