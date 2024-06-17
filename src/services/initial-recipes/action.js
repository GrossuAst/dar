import { getAllRecipes } from "../../utils/api";

export const GET_INITIAL_RECIPES = 'GET_INITIAL_RECIPES';
export const GET_INITIAL_RECIPES_SUCCESS = 'GET_INITIAL_RECIPES_SUCCESS';
export const GET_INITIAL_RECIPES_FAILED = 'GET_INITIAL_RECIPES_FAILED';

export function getInitialRecipes(data) {
    return function(dispatch) {
        dispatch({ type: GET_INITIAL_RECIPES,  })
        getAllRecipes()
            .then((res) => {
                dispatch({
                    type: GET_INITIAL_RECIPES_SUCCESS,
                    payload: res.recipes
                })
            })
            .catch((err) => {

            })
            .finally(() => {
                
            })
    }
}