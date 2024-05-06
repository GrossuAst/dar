import { apiConfig } from "./constants";

function checkRespone(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export function getAllRecipes() {
    return fetch(apiConfig.url, {
        method: 'GET',
        headers: apiConfig.headers
    })
};