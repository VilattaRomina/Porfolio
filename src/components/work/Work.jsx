import React, {useContext} from 'react'
import { ThemeContext } from '../../context';
import './Work.css'
import Works from './Works'

const Work = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='work section' id='portfolio'>
        <h2 className='section__title'  style={{color: darkMode && '#fff'}}>Portfolio</h2>
        <span className='section__subtitle'>Proyectos recientes</span>
        
        <Works />
        
    </section>


  )
}

export default Work