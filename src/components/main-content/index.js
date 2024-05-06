import styles from './main-content.module.css';

import RecipesList from '../recipes-list';
import Paging from '../paging';

const MainContent = ({ isLoading }) => {
    return (
        <section className={ styles.mainContent }>
            <div className={ styles.contentHeader }>
                <h2 className={ styles.contentTitle }>
                    Найденные рецепты
                    <span className={ styles.number }>299</span>
                </h2>    
            </div>
            <RecipesList 
                isLoading={ isLoading }
            />
            <Paging />
        </section>
    )
};

export default MainContent;