import styles from './main-content.module.css';
import RecipesList from '../recipes-list';

import { getInitialRecipes } from '../../services/initial-recipes/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MainContent = ({ isLoading, recipesToShow, isError, retryGetData, currentPage, setCurrentPage, totalPages }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInitialRecipes());
    }, []);

    return (
        <section className={ styles.mainContent }>
            <div className={ styles.contentHeader }>
                <h2 className={ styles.contentTitle }>
                    Найденные рецепты
                    <span className={ styles.number }>{ recipesToShow.length }</span>
                </h2>    
            </div>
            <RecipesList 
                isLoading={ isLoading }
                recipesToShow={ recipesToShow }
                isError={ isError }
                retryGetData={ retryGetData }
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
                totalPages={ totalPages }
            />
        </section>
    )
};

export default MainContent;