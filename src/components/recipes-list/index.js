import styles from './recipes-list.module.css';

import Preloader from '../ui/preloader';
import RecipeCard from '../recipe-card';

const RecipesList = ({ isLoading, recipesToShow }) => {
    // console.log(recipesToShow)

    return (
        <section className={ `${styles.content} ${isLoading && styles.preloaderContainer}` }>
            {
                isLoading ? <Preloader /> :
                (
                    <ul className={ styles.list }>
                        {
                            recipesToShow.length > 0 && recipesToShow.map((recipe) => (
                                <li key={ recipe.id }>
                                    <RecipeCard 
                                        title={ recipe.name }
                                        image={ recipe.image }
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    // <ul className={ styles.list }>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    //     <li className={ styles.listItem }>
                    //         <RecipeCard />
                    //     </li>
                    // </ul>
                )
            }

        </section>
    )
};

export default RecipesList;