import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../../pages/home';
import RecipePage from '../../pages/recipe-page';

import { getAllRecipes } from '../../utils/api';

// нужно добавить
// ui при ошибке с сервера, при пустом массиве
// страницу 404

const App = () => {
    const [isLoading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState([]);
    const [recipesToShow, setRecipesToShow] = useState([]);

    useEffect(() => {
        getAllRecipes()
            .then((res) => {
                // console.log(res)
                setInitialData(res.recipes);
                setRecipesToShow(res.recipes);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className={ styles.wrapper }>
            <Routes>
                <Route path='/' 
                    element={ 
                        <Home 
                            isLoading={ isLoading } 
                            recipesToShow={ recipesToShow }
                        /> 
                    } >
                    <Route path=':id' element={<RecipePage /> } />
                </Route>
                <Route path='*' />
            </Routes>
        </div>
    )
};

export default App;