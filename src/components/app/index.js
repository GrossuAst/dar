import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/home';
import RecipePage from '../../pages/recipe-page';

const App = () => {
    return (
        <div className={ styles.wrapper }>
            <Routes>
                <Route path='/' element={ <Home /> } >
                    <Route path=':id' element={<RecipePage />}/>
                </Route>
                <Route path='*' />
            </Routes>
        </div>
    )
};

export default App;