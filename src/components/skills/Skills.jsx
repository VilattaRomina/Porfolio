import React, {useContext} from 'react'
import { ThemeContext } from '../../context'
import Backend from './Backend'
import Frontend from './Frontend'
import './Skills.css'


const Skills = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title' style={{color: darkMode && '#fff'}}>Skills</h2>
        <span className='section__subtitle'>Mi nivel técnico</span>

        <div className='skills__container container grid'>
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills