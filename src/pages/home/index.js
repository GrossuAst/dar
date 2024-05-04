import styles from './home.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header';

const Home = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <>
            <Header/>
            <main className={ styles.main }>
                {!isMainPage && <Outlet />}
                {
                    isMainPage && (
                        <>
                            <section className={ styles.mainMenu }>
                                <div className={ styles.projectDescription }>
                                    <div className={ styles.imageStub }></div>
                                    <p className={ styles.text }>
                                        В нашей жизни, когда время становится все более ценным ресурсом, 
                                        задача планирования приема пищи становится все более сложной.
                                    </p>
                                    <p className={ styles.text }>
                                        Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? 
                                        Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
                                    </p>
                                    <p className={ styles.text }>
                                        Наш сервис поможет: выбирайте параметры - и вперед!
                                    </p>
                                </div>
                            </section>
                            <section className={ styles.mainContent }>
                                <h2>Найденные рецепты <span>299</span></h2>
                            </section>
                        </>
                    )
                }

            </main>
        </>
    )
};

export default Home;