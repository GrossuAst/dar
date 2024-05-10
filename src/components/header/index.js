import styles from './header.module.css';
import Arrow from '../../images/arrow.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ currentRecipe }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isRecipePage = location.pathname !== '/';

    function handleArrowClick() {
        navigate('/');
    };

    return (
        <header className={ `${styles.header} ${isRecipePage && styles.recipePageHeader}` }>
            {
                isRecipePage && 
                <img src={ Arrow } className={ styles.arrow }
                    onClick={ handleArrowClick }
                />
            }
            <h1 className={ styles.title }>
                {
                    isMainPage ? 'Сборник рецептов из разных стран мира' : currentRecipe ? currentRecipe : 'Наименование блюда'
                }
            </h1>
        </header>
    )
};

 export default Header;