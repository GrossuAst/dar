import styles from './recipes-list.module.css';

import Preloader from '../ui/preloader';
import ErrorMessage from '../ui/error-message';
import RecipeCard from '../recipe-card';

const RecipesList = ({ isLoading, recipesToShow, isError, retryGetData }) => {

    return (
        <section className={ `${styles.content} ${isLoading && styles.preloaderContainer}` }>
            {
                isLoading && !isError ? <Preloader /> :
                isError && !isLoading ? <ErrorMessage retryGetData={ retryGetData } /> :
                recipesToShow.length === 0 ? (<p className={ styles.empty }>По вашему запросу ничего не найдено</p>) :
                (
                    <ul className={ styles.list }>
                        {
                            recipesToShow.length > 0 && recipesToShow.map((recipe) => (
                                <li key={ recipe.id }>
                                    <RecipeCard 
                                        id={ recipe.id }
                                        title={ recipe.name }
                                        image={ recipe.image }
                                        difficulty={ recipe.difficulty }
                                        cookTimeMinutes={ recipe.cookTimeMinutes }
                                        prepTimeMinutes={ recipe.prepTimeMinutes }
                                        cuisine={ recipe.cuisine }
                                        mealType={ recipe.mealType }
                                    />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </section>
    )
};

export default RecipesList;