import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import updateAnimes from './reducer/anime-reducer/anime-reducer';
import updateMangas from './reducer/manga-reducer/manga-reducer';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = {
    anime: ReturnType<typeof updateAnimes>,
    manga: ReturnType<typeof updateMangas>
}