import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import {
  Home,
  Popular,
  Genre,
  Genres,
  SearchResult,
  CertainTitle,
  Reviews,
  ErrorSearch,
  ErrorPage,
} from './pages';
import { Layout } from './components';
import { theme } from './MuiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/genres/:name" element={<Genre />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/search-result-list" element={<SearchResult />} />
            <Route path="/title/:id" element={<CertainTitle />} />
            <Route path="/reviews/:id" element={<Reviews />} />
            <Route path="/title-not-found" element={<ErrorSearch />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
