import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducer/reducer";
import updateTitles from './reducer/title-reducer/title-reducer';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = {
    title: ReturnType<typeof updateTitles>,
}