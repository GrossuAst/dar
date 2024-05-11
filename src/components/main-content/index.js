import styles from './main-content.module.css';

import RecipesList from '../recipes-list';
import Paging from '../paging';

const MainContent = ({ isLoading, recipesToShow, isError, retryGetData }) => {
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
            />
            <Paging />
        </section>
    )
};

export default MainContent;