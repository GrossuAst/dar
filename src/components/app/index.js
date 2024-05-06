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

    return (
        <div className={ styles.wrapper }>
            <Routes>
                <Route path='/' element={ <Home isLoading={ isLoading } /> } >
                    <Route path=':id' element={<RecipePage /> } />
                </Route>
                <Route path='*' />
            </Routes>
        </div>
    )
};

export default App;