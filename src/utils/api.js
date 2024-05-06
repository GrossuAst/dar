import { apiConfig } from "./constants";
import { BASE_URL } from "./constants";

function checkRespone(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export function getAllRecipes() {
    return fetch(`${ BASE_URL + '?limit=0' }`, {
        method: 'GET',
        headers: apiConfig.headers
    }).then((res) => {
        return checkRespone(res);
    })
};

// export function getInfoAboutRecipe(id) {
//     return fetch(`${ BASE_URL + '/' + `${ id }`}`, {
//         method: 'GET',
//         headers: apiConfig.headers
//     }).then((res) => {
//         return checkRespone(res);
//     })
// };