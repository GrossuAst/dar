import styles from './main-menu.module.css';

import Filter from '../filter';

const MainMenu = ({ initialData, setCuisine, cuisine, mealType, setMealType, difficulty, setDifficulty }) => {
    return (
        <>
        <section className={ styles.mainMenu }>
            <div className={ styles.projectDescription }>
                <div className={ styles.imageStub } />
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
            <Filter 
                initialData={ initialData }
                setCuisine={ setCuisine }
                cuisine={ cuisine }
                mealType={ mealType }
                setMealType={ setMealType }
                difficulty={ difficulty }
                setDifficulty={ setDifficulty }
            />
        </section>
        </>
    )
};

export default MainMenu;