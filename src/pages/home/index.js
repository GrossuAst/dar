import styles from './home.module.css';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../components/header';
import MainMenu from '../../components/main-menu';
import MainContent from '../../components/main-content';

const Home = ({ 
    isLoading, 
    recipesToShow, 
    isError, 
    retryGetData, 
    currentRecipe, 
    initialData,
    setCuisine,
    cuisine,
    mealType,
    setMealType
}) => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <>
            <Header 
                currentRecipe={ currentRecipe }
            />
            {/* <main className={ `${ styles.main }` } style={ !isMainPage && { max-width: 0 } }> */}
            <main className={styles.main} style={!isMainPage ? { maxWidth: '100%' } : undefined}>
                {!isMainPage && <Outlet />}
                {
                    isMainPage && (
                        <>
                            <MainMenu 
                                initialData={ initialData }
                                setCuisine={ setCuisine }
                                cuisine={ cuisine }
                                mealType={ mealType }
                                setMealType={ setMealType }
                            />
                            <MainContent 
                                isLoading={ isLoading }
                                recipesToShow={ recipesToShow }
                                isError={ isError }
                                retryGetData={ retryGetData }
                            />
                            
                        </>
                    )
                }
                {/* {<Outlet />} */}
            </main>
        </>
    )
};

export default Home;