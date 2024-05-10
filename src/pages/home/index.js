import styles from './home.module.css';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../components/header';
import MainMenu from '../../components/main-menu';
import MainContent from '../../components/main-content';

const Home = ({ isLoading, recipesToShow, isError, retryGetData, currentRecipe }) => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <>
            <Header 
                currentRecipe={ currentRecipe }
            />
            <main className={ styles.main }>
                {!isMainPage && <Outlet />}
                {
                    isMainPage && (
                        <>
                            <MainMenu />
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