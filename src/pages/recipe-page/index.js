import styles from './recipe-page.module.css';
import { getInfoAboutRecipe } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Preloader from '../../components/ui/preloader';
import MainRecipeInfo from '../../components/main-recipe-info';
import MainRecipeInstruction from '../../components/main-recipe-instruction';
import MainRecipeImage from '../../components/main-recipe-image';

const RecipePage = ({ chooseCurrentRecipe, recipesToShow, setCurrentRecipe, isRandomRecipeGenerated }) => {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [reciepeData, setRecipeData] = useState(null);

    useEffect(() => {
        getRecipeData();
    }, []);

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

    return (
        <>
            {
                isLoading ? 
                (
                    <section className={ styles.preloaderContainer }>
                        <Preloader />
                    </section>
                ) :
                !reciepeData ? (<>По такому адресу рецепт не найден</>) :
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
                            setRecipeData={ setRecipeData }
                            recipesToShow={ recipesToShow }
                            setCurrentRecipe={ setCurrentRecipe }
                            isRandomRecipeGenerated={ isRandomRecipeGenerated }
                        />
                    </section>    
                )
            }
        </>
    )
};

export default RecipePage;