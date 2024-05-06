import styles from './home.module.css';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../components/header';
import MainMenu from '../../components/main-menu';
import MainContent from '../../components/main-content';

const Home = ({ isLoading }) => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <>
            <Header/>
            <main className={ styles.main }>
                {/* {!isMainPage && <Outlet />} */}
                {
                    isMainPage && (
                        <>
                            <MainMenu />
                            <MainContent 
                                isLoading={ isLoading }
                            />
                        </>
                    )
                }

            </main>
        </>
    )
};

export default Home;