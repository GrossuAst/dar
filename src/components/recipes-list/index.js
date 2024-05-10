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
                                        cuisine={ recipe.cuisine }
                                        mealType={ recipe.mealType }
                                    />
                                </li>
                            ))
                        }
                    </ul>
                )
            }

            {/* <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
                <li className={ styles.listItem }>
                    <RecipeCard />
                </li>
            </ul> */}
        </section>
    )
};

export default RecipesList;