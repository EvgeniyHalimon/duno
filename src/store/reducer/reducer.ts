import { combineReducers } from "redux";

import updateTitles from "./title-reducer/title-reducer";

const reducer = combineReducers({
    title: updateTitles
})

export default reducer