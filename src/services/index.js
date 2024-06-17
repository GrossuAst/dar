import { combineReducers } from 'redux';
import { initialRecipesReducer } from './initial-recipes/reducer';

export const rootReducer = combineReducers({
    recipes: initialRecipesReducer,

});