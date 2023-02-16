import React, {useContext} from 'react';
import './About.css'
import CV from '../../assets/RominaVilattaMontenegro-cv.pdf'
import { ThemeContext } from '../../context';


const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='about section' id='about' >
      <h2 className='section__title' style={{color: darkMode && '#fff'}}>Sobre mi</h2>

      <div className='about__container container grid'>

          <div className='about__data'>

            <p className='about__description'>
            

 Me gusta estar en constante aprendizaje, por lo cual actualmente me encuentro cursando la carrera <b>CERTIFIED TECH DEVELOPER</b>.
<br/>
<br/>
 Adquirí conocimientos de HTML, CSS, JavaScript, POO, React, MySQL Workbench, Java, Git, GITHub, GITLab y Scrum.
 <br/>
<br/>
Ahora con todo lo aprendido y la experiencia alcanzada, me encuentro en la búsqueda laboral para dar mis primeros pasos en esta apasionante disciplina.
            </p>


            <a download='' href={CV} className='button button--flex'>Download CV
            <i class="uil uil-file-download download_icon"></i>
            </a>
          </div>
      
    </div>
    </section>   
  );
}

export default About;
