import { combineReducers } from '@reduxjs/toolkit';
import updateTitles from './title-reducer/title-reducer';

const rootReducer = combineReducers({
  title: updateTitles,
});

export default rootReducer;
