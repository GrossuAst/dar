import styles from './filter.module.css';
import { useState, useEffect } from 'react';

const Filter = ({ initialData, setCuisine, cuisine, mealType, setMealType }) => {
    const cuisines = [...new Set(initialData.map(item => item.cuisine))];
    cuisines.sort((a, b) => a.localeCompare(b));
    cuisines.unshift('Все страны и регионы');
    let mealTypes = initialData.map(item => item.mealType);
    mealTypes = [...new Set(mealTypes.flatMap(types => types))];
    mealTypes.unshift('Все типы');

    // кухня
    const [selectedRegion, setSelectedRegion] = useState(cuisines[0]);
    const [isRegionSelectActive, setRegionSelectActive] = useState(false);
    // тип блюда
    const [selectedType, setSelectedType] = useState(null);
    const [isTypeSelectActive, setTypeSelectActive] = useState(false);

    function changeRegion(region) {
        setSelectedRegion(region);
        setRegionSelectActive(false);
        setCuisine(region);
    };

    function changeMealType(type) {
        setSelectedType(type);
        setTypeSelectActive(false);
        setMealType(type);
    };

    function handleRegionButtonClick() {
        isRegionSelectActive && setRegionSelectActive(false);
        !isRegionSelectActive && setRegionSelectActive(true);
        isTypeSelectActive && setTypeSelectActive(false);
    };

    function handleMealTypeButtonClick() {
        isTypeSelectActive && setTypeSelectActive(false);
        !isTypeSelectActive && setTypeSelectActive(true);
        isRegionSelectActive && setRegionSelectActive(false);
    };

    useEffect(() => {
        function handleClickOutside(evt) {
            if (!evt.target.closest(`.${ styles.dropdown }`)) {
                setRegionSelectActive(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isRegionSelectActive]);

    return (
        <div className={ styles.filterContainer }>

            {/* кухня */}
            <div className={ styles.dropdownContainer }>
                <h3 className={ styles.dropdownTitle }>Кухня:</h3>
                <div className={ styles.dropdown }>
                    <div className={ styles.dropdownBtn }
                        onClick={ handleRegionButtonClick }
                    >
                        { cuisine }
                        <div className={ !isRegionSelectActive ? styles.arrow : `${styles.arrow} ${styles.arrowOpened}` } />
                    </div>
                    <ul className={ styles.dropdownContent } style={ { display: isRegionSelectActive ? 'block' : 'none' } }>
                        {
                            cuisines.map((item, index) => (
                                <li key={ index } className={ styles.dropdownItem } 
                                    onClick={ () => changeRegion(item) }
                                >
                                    <p  className={ styles.itemText } >
                                        { item }
                                    </p>
                                </li>
                            ))
                        }
                    </ul>    
                </div>
            </div>

            {/* тип блюда */}
            <div className={ styles.dropdownContainer }>
                <h3 className={ styles.dropdownTitle }>Тип блюда:</h3>
                <div className={ styles.dropdown }>
                    <div className={ styles.dropdownBtn }
                        onClick={ handleMealTypeButtonClick }
                    >
                        { mealType }
                        <div className={ !isTypeSelectActive ? styles.arrow : `${styles.arrow} ${styles.arrowOpened}` } />
                    </div>
                    <ul className={ styles.dropdownContent } style={ { display: isTypeSelectActive ? 'block' : 'none' } }>
                        {
                            mealTypes.map((item, index) => (
                                <li key={ index } className={ styles.dropdownItem } 
                                    onClick={ () => changeMealType(item) }
                                >
                                    <p  className={ styles.itemText } >
                                        { item }
                                    </p>
                                </li>
                            ))
                        }
                    </ul>    
                </div>
            </div>
        </div>
    )
};

export default Filter;