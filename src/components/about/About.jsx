import React from 'react';
import './About.css'
import CV from '../../assets/RominaVilattaMontenegro-CV.pdf'


const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>Sobre mi</h2>

      <div className='about__container container grid'>

          <div className='about__data'>

            <p className='about__description'>
            

 Me gusta estar en constante aprendizaje, por lo cual actualmente me encuentro cursando la especialización de Frontend.
<br/>
<br/>
Soy persona muy responsable y comprometida. Poseo gran capacidad de comunicación e iniciativa, lo cual me permite participar fácilmente en dinámicas que requieren trabajo en equipo.
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
