import React, {useContext} from 'react';
import { ThemeContext } from '../../context';

const Data = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='home__data' >
            <h1 className='home__title' style={{color: darkMode && '#fff'}}> Hola, soy Romi</h1>
            <h3 className='home__subtitle' style={{color: darkMode && '#fff'}}> Desarrolladora Frontend</h3>
            <p className='home__description'> Responsable, comprometida y con
                gran capacidad de comunicación e iniciativa. </p>

            <a href='#contact' className='button button--flex'> Contactame
                <i class="uil uil-message"></i> </a>
        </div>

    );
}

export default Data;
