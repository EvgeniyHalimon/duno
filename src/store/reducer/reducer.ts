import { combineReducers } from "redux";
import updateAnimes from "./anime-reducer/anime-reducer";
import updateMangas from "./manga-reducer/manga-reducer";

const reducer = combineReducers({
    anime: updateAnimes,
    manga: updateMangas
})

export default reducer