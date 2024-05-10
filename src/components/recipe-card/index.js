import styles from './recipe-card.module.css';
import Stub from '../../images/image-stub.png';
import EmptyStarIcon from '../../images/empty-star-icon.svg';
import FullStarIcon from '../../images/full-star-icon.svg';
import WatchICon from '../../images/watch-icon.svg';

import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, image, difficulty, cookTimeMinutes, prepTimeMinutes, cuisine, mealType }) => {

    return (
        <Link to={`/${id}`} className={ styles.link }>
            <article className={ styles.card }>
                <div className={ styles.container }>
                    <h4 className={ styles.title }>
                        { title }
                    </h4>
                    <img className={ styles.image } src={ image || Stub } alt={ `Фото блюда ${title}` }/>
                </div>
                <div className={ styles.descriptionContainer }>
                    {/* Api не предоставляет развернутое описание блюда. ЗАГЛУШКА ??? */}
                    <p className={ styles.description }>
                        Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, 
                        выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, 
                        таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
                    </p>
                    <div className={ styles.infoContainer }>
                        <div className={ styles.cookTimeMinutes }>
                            <img src={ WatchICon } />
                            <p className={ styles.text }>
                                { cookTimeMinutes + prepTimeMinutes } минут    
                            </p>
                        </div>
                        <div className={ styles.difficulty }>
                            <p className={ `${styles.difficulty} ${styles.text}` }>Сложность:</p>
                            <div className={ styles.starsContainer }>
                                {
                                    difficulty === 'Easy' ? 
                                    ( 
                                        <>
                                            <img src={ FullStarIcon } className={ styles.starIcon } />
                                            <img src={ EmptyStarIcon } className={ styles.starIcon } />
                                        </> 
                                    ) : 
                                    difficulty === 'Medium' && (
                                        <>
                                            <img src={ FullStarIcon } className={ styles.starIcon } />
                                            <img src={ FullStarIcon } className={ styles.starIcon } />
                                        </>
                                    )
                                }
                                <img src={ EmptyStarIcon } className={ styles.starIcon } />
                            </div>
                        </div>
                        <p className={ `${styles.cuisine} ${styles.text}` }>
                            { cuisine }
                        </p>
                        <p className={ `${styles.mealType} ${styles.text}` }> 
                            {
                                mealType.map((type, index) => (
                                    <span key={ index }>{ type }{ index !== mealType.length - 1 && ', ' }</span>
                                ))
                            }
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    )
};

export default RecipeCard;