import styles from './recipes-list.module.css';

import Preloader from '../ui/preloader';
import ErrorMessage from '../ui/error-message';
import RecipeCard from '../recipe-card';
import Paging from '../paging';

const RecipesList = ({ isLoading, recipesToShow, isError, retryGetData, currentPage, setCurrentPage, totalPages }) => {
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, recipesToShow.length);
    const currentItems = recipesToShow.slice(startIndex, endIndex);

    console.log(currentItems)

    return (
        <section className={ `${styles.content} ${isLoading && styles.preloaderContainer}` }>
            {
                isLoading && !isError ? <Preloader /> :
                isError && !isLoading ? <ErrorMessage retryGetData={ retryGetData } /> :
                recipesToShow.length === 0 ? (<p className={ styles.empty }>По вашему запросу ничего не найдено</p>) :
                (
                    <>
                        <ul className={ styles.list }>
                            {
                                currentItems.length > 0 && currentItems.map((recipe) => (
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
                        <Paging 
                            currentPage={ currentPage }
                            setCurrentPage={ setCurrentPage }
                            totalPages={ totalPages }
                        />
                    </>
                )
            }
        </section>
    )
};

export default RecipesList;