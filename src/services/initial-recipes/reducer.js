import { GET_INITIAL_RECIPES, GET_INITIAL_RECIPES_FAILED, GET_INITIAL_RECIPES_SUCCESS } from "./action";

const initialState = {
    initialRecipes: [],
    feedRequest: false,
    feedFailed: false
};

export const initialRecipesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_RECIPES:
            return {
                ...state,
                feedRequest: true,
                feedFailed: false
            };
        case GET_INITIAL_RECIPES_SUCCESS:
            return {
                ...state,
                initialRecipes: action.payload,
                feedRequest: false,
                feedFailed: false
            }
        case GET_INITIAL_RECIPES_FAILED: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            }
        default:
            return state;
    }
};