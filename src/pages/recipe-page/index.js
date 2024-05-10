import styles from './recipe-page.module.css';
import { getInfoAboutRecipe } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../../components/ui/preloader';

const RecipePage = ({ chooseCurrentRecipe }) => {
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
                isLoading ? <Preloader /> :
                (
                    <section className={ styles.recipeSection }>

                    </section>    
                )
            }
        </>
    )
};

export default RecipePage;