import styles from './app.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../../pages/home';
import RecipePage from '../../pages/recipe-page';
import NotFoundPage from '../../pages/not-found-page';

import { getAllRecipes } from '../../utils/api';

// предусмотреть прямой переход по ссылке с несуществующим айди рецепта
// в компоненте RecipePage добавить защиту в случае получения ошибки при загрузке данных и функцию повторного запроса

const App = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    // ui
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    // data
    const [initialData, setInitialData] = useState([]);
    const [recipesToShow, setRecipesToShow] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    // filter state
    const [cuisine, setCuisine] = useState('Все страны и регионы');
    const [mealType, setMealType] = useState('Все типы');
    const [difficulty, setDifficulty] = useState('Любая');

    useEffect(() => {
        filterRecipes();
    }, [cuisine, mealType, difficulty]);

    function filterRecipes() {
        let filteredRecipes = initialData.slice();

        if (cuisine !== 'Все страны и регионы') {
            filteredRecipes = filteredRecipes.filter((item) => item.cuisine === cuisine);
        }
    
        if (mealType !== 'Все типы') {
            filteredRecipes = filteredRecipes.filter((item) => item.mealType.includes(mealType));
        }
    
        if (difficulty !== 'Любая') {
            filteredRecipes = filteredRecipes.filter((item) => item.difficulty === difficulty);
        }
    
        setRecipesToShow(filteredRecipes);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        isMainPage && currentRecipe && setCurrentRecipe(null);
    }); 

    function retryGetData() {
        getData();
    };

    function getData() {
        isError && setError(false);
        setLoading(true);
        getAllRecipes()
            .then((res) => {
                setInitialData(res.recipes);
                setRecipesToShow(res.recipes);
                setError(false);
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    function chooseCurrentRecipe(name) {
        setCurrentRecipe(name);
    };

    return (
        <div className={ styles.wrapper }>
            <Routes>
                <Route path='/' 
                    element={
                        <Home 
                            isLoading={ isLoading } 
                            recipesToShow={ recipesToShow }
                            isError={ isError }
                            retryGetData={ retryGetData }
                            currentRecipe={ currentRecipe }
                            initialData={ initialData }

                            setCuisine={ setCuisine }
                            cuisine={ cuisine }
                            mealType={ mealType }
                            setMealType={ setMealType }
                            difficulty={ difficulty }
                            setDifficulty={ setDifficulty }
                        /> 
                    } 
                >
                    <Route path=':id' 
                        element={
                            <RecipePage 
                                chooseCurrentRecipe={ chooseCurrentRecipe }
                                recipesToShow={ recipesToShow }
                                setCurrentRecipe={ setCurrentRecipe }
                            /> 
                        } 
                    />
                </Route>
                <Route path='*' element={ <NotFoundPage /> } />
            </Routes>
        </div>
    )
};

export default App;