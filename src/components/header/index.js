import styles from './header.module.css';
import Arrow from '../../images/arrow.svg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isRecipePage = location.pathname !== '/';

    return (
        <header className={ `${styles.header} ${isRecipePage && styles.recipePageHeader}` }>
            {
                isRecipePage && <img src={ Arrow } className={ styles.arrow }/>
            }
            <h1 className={ styles.title }>
                {
                    isMainPage ? 'Сборник рецептов из разных стран мира' : 'Наименование блюда длинное'
                }
            </h1>
        </header>
    )
};

 export default Header;