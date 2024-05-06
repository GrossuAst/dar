import styles from './recipes-list.module.css';

import Preloader from '../ui/preloader';
import RecipeCard from '../recipe-card';

const RecipesList = ({ isLoading }) => {
    return (
        <section className={ `${styles.content} ${isLoading && styles.preloaderContainer}` }>
            {
                isLoading ? <Preloader /> :
                (            
                    <ul className={ styles.list }>
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
                    </ul>
                )
            }

        </section>
    )
};

export default RecipesList;