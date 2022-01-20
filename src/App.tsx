import React from 'react';
import { Home } from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { PopularAnime } from './pages/PopularAnime';
import { PopularManga } from './pages/PopularManga';
import { Genres } from './pages/Genres';

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
            <Route path='/genres' element={<Genres/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
