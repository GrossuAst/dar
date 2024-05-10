import styles from './main-recipe-instruction.module.css';

const MainRecipeInstruction = ({ reciepeData }) => {
    return (
        <section className={ styles.recipeContainer }>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Общее время приготовления
                </h3>
                <p className={ styles.timeNumber }>
                    { reciepeData && reciepeData.cookTimeMinutes + reciepeData.prepTimeMinutes } минут
                </p>
            </div>
            <div className={ styles.infoContainer }>
                <h3 className={ styles.title }>
                    Инструкции по приготовлению
                </h3>
                <ul className={ styles.instruction }>
                    {
                        reciepeData && reciepeData.instructions.map((item, index) => (
                            <li key={ index } className={ styles.listItem }>
                                <div className={`${styles.pointIcon} ${index === reciepeData.instructions.length - 1 ? styles.lastPointIcon : ''}`} />
                                <p className={ styles.text }>
                                    {item}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
};

export default MainRecipeInstruction;