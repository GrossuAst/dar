import styles from './recipe-card.module.css';
import Stub from '../../images/image-stub.png';

const RecipeCard = () => {
    return (
        <article className={ styles.card }>
            <div className={ styles.container }>
                <h4 className={ styles.title }>Наименование блюда</h4>
                <img className={ styles.image } src={ Stub } />
                {/* <div className={ styles.image } /> */}
            </div>
            <div className={ styles.descriptionContainer }>
                <p className={ styles.description }>
                    Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, 
                    выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, 
                    таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
                </p>
                <div className={ styles.infoContainer }>
                
                </div>
            </div>
        </article>
    )
};

export default RecipeCard;