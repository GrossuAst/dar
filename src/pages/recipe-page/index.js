import styles from './recipe-page.module.css';
import { getInfoAboutRecipe } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Preloader from '../../components/ui/preloader';
import MainRecipeInfo from '../../components/main-recipe-info';
import MainRecipeInstruction from '../../components/main-recipe-instruction';
import MainRecipeImage from '../../components/main-recipe-image';

const RecipePage = ({ chooseCurrentRecipe, recipesToShow }) => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [reciepeData, setRecipeData] = useState(null);

    useEffect(() => {
        getRecipeData();
    }, [id]);

    function retryGetRecipeData() {
        getRecipeData();
    };

    function getRecipeData() {
        isError && setError(false);
        setLoading(true);
        getInfoAboutRecipe(id)
            .then((res) => {
                setRecipeData(res);
                setError(false);
                chooseCurrentRecipe(res.name)
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    // function getNextRecipeData() {
    //     const currentIndex = recipesToShow.findIndex((recipe) => recipe.id === reciepeData.id);
    //     if(currentIndex !== -1 && currentIndex < recipesToShow.length - 1) {
    //         const nextRecipeId = recipesToShow[currentIndex + 1].id;
    //     }
    // };

    return (
        <>
            {
                isLoading ? 
                (
                    <section className={ styles.preloaderContainer }>
                        <Preloader />
                    </section>
                ) 
                :
                (
                    <section className={ styles.recipeSection }>
                        <MainRecipeInfo 
                            reciepeData={ reciepeData }
                        />
                        <MainRecipeInstruction 
                            reciepeData={ reciepeData }
                        />
                        <MainRecipeImage 
                            reciepeData={ reciepeData }
                            recipesToShow={ recipesToShow }
                        />
                    </section>    
                )
            }
        </>
    )
};

export default RecipePage;