import {useState, useContext} from 'react';
import { ThemeContext } from '../../context';
import './Header.css';


const Header = () => {

    /*=========== Toggle Menu =============*/ 
    const[ToggleNav, setToggleNav] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    /*=========== DarkMode =============*/
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
      <header className='header' style={{backgroundColor: darkMode ? 
      '#1f1a2e' : "white", color: darkMode && '#fff'
    }}>
        <nav className='nav container' >
            <a href='index.html' className='nav__logo'></a>

            <div className={ToggleNav ? 'nav__menu show-menu' : 'nav__menu'} style={{backgroundColor: darkMode ? '#1f1a2e' : "white", color: darkMode && "white"
      }} >
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' 
                        onClick={()=> setActiveNav('#home')}
                        className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'} 
                        style={{color: darkMode && '#fff'}}>
                            <i className='uil uil-home nav__icon'></i> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#about' 
                        onClick={()=> setActiveNav('#about')}
                        className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
                        style={{color: darkMode && '#fff'}}>
                            <i className='uil uil-user nav__icon'></i> Sobre mi
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#skills' 
                         onClick={()=> setActiveNav('#skills')}
                        className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
                        style={{color: darkMode && '#fff'}}>
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#portfolio' 
                         onClick={()=> setActiveNav('#portfolio')}
                        className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}style={{color: darkMode && '#fff'}}>
                            <i className='uil uil-scenery nav__icon'></i> Portfolio
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#contact' 
                         onClick={()=> setActiveNav('#contact')}
                        className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
                        style={{color: darkMode && '#fff'}}>
                            <i className='uil uil-message nav__icon'></i> Contacto
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#theme' className= 'nav__link' onClick={handleClick} style={{ color: darkMode && "white"
      }} >
                            {theme.state.darkMode ? <i class="uil uil-sun"></i> :  <i class="uil uil-moon"></i>} 
                        </a>
                    </li>
                </ul>

                <i class='uil uil-times nav__close' style={{color: darkMode && "white"
      }} onClick={()=> setToggleNav(!ToggleNav)}></i>
            </div>

            <div className='nav__toggle'  onClick={()=> setToggleNav(!ToggleNav)}>
            <i class="uil uil-apps" style={{ color: darkMode && "white"
      }} ></i>
            </div>
        </nav>
      </header>

    );
}

export default Header;
