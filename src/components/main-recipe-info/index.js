import styles from './main-recipe-info.module.css';

const MainRecipeInfo = ({ reciepeData }) => {
    return (
        <section className={ styles.mainInfoContainer }>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Кухня
                </h3>
                <p className={ styles.cuisine }>
                    { reciepeData && reciepeData.cuisine }
                </p>
            </div>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Теги
                </h3>
                <ul className={ styles.tags }>
                    {
                        reciepeData && reciepeData.tags.map((tag, index) => (
                            <li key={ index }>
                                <p className={ styles.tag }>
                                    #{ tag }{ <>&nbsp;</> }
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Калорийность
                </h3>
                <p className={ styles.calories }>
                    { reciepeData && reciepeData.caloriesPerServing } ккал
                    <span className={ styles.perServing }>
                        100 грамм
                    </span>
                </p>
            </div>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Количество порций
                </h3>
                <p className={ styles.servings }>
                    { reciepeData && reciepeData.servings }
                </p>
            </div>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Описание
                </h3>
                <p className={ styles.description }>
                    Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, 
                    выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, 
                    таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
                </p>
            </div>
        </section>
    )
};

export default MainRecipeInfo;