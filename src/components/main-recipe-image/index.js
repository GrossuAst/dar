import styles from './main-recipe-image.module.css';

import { useNavigate } from 'react-router-dom';

const MainRecipeImage = ({ reciepeData, recipesToShow }) => {
    const navigate = useNavigate();

    function getNextRecipe() {
        const index = reciepeData && findIndexById(recipesToShow, reciepeData.id);
        if (index !== -1 && index < recipesToShow.length - 1) {
            const nextRecipeId = recipesToShow[index + 1].id;
            navigate(`/${nextRecipeId}`);
        }
    };

    function getPrevRecipe() {
        const index = reciepeData && findIndexById(recipesToShow, reciepeData.id);
        if(index > 0) { 
            const prevRecipeId = recipesToShow[index - 1].id;
            navigate(`/${prevRecipeId}`);
        }
    };
    
    function findIndexById(array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    const index = reciepeData && findIndexById(recipesToShow, reciepeData.id);

    return (
        <section className={ styles.imageContainer } >
            <img className={ styles.image } src={ reciepeData && reciepeData.image } />
            <div className={ styles.buttons }>
                <div 
                    className={ `${ styles.button } ${ styles.leftButton } ${ (index === 0 || recipesToShow.length === 1) && styles.leftButtonDisabled }` }
                    onClick={ getPrevRecipe }
                />
                <div 
                    className={ 
                        `${ styles.button } ${ styles.rightButton } 
                        ${ (index === recipesToShow.length - 1 || recipesToShow.length === 1) && styles.rightButtonDisabled }` 
                    }
                    onClick={ getNextRecipe }
                />
            </div>
        </section>
    )
};

export default MainRecipeImage;