import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { ThemeContext } from '../../context';

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_tb1agck", "template_yodaxxe", form.current, "Pnuk1SOvGYag1Hrg-")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='contact section' id='contact' >
      <h2 className='section__title' style={{ color: darkMode && '#fff' }}>Hablemos</h2>
      <span className='section__subtitle'>Podes contactarme a través de</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title' style={{ color: darkMode && '#fff' }}></h3>

          <div className='contact__info'>
            <div className='contact__card' style={{
              backgroundColor: darkMode ?
                '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
            }}>
              <i className='uil uil-envelope contact__card-icon'></i>
              <span className='contact__card-data'></span>

              <a href='' className='contact__button' style={{
                color: darkMode && '#fff'
              }}>vilattaromina@gmail.com </a>
            </div>

            <div className='contact__card' style={{
              backgroundColor: darkMode ?
                '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
            }}>
              <i className='uil uil-linkedin contact__card-icon'></i>
              <span className='contact__card-data'></span>

              <a href='https://www.linkedin.com/in/rominavilattamontenegro/' className='contact__button' style={{
                color: darkMode && '#fff'
              }}>romina-vilatta-montenegro <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>

            <div className='contact__card' style={{
              backgroundColor: darkMode ?
                '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
            }}>
              <i className='uil uil-github contact__card-icon'></i>
              <span className='contact__card-data'></span>

              <a href='https://github.com/VilattaRomina' className='contact__button' style={{
                color: darkMode && '#fff'
              }}>VilattaRomina <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>
          </div>
        </div>
        <div className='contact__content'>
          <h3 className='contact__title'></h3>

          <form ref={form} onSubmit={sendEmail} className='contact__form' >
            <div className='contact__form-div' >
              <label className='contact__form-tag' style={{
                backgroundColor: darkMode ?
                  '#1f1a2e' : "white", color: darkMode && '#fff'
              }}>Name</label>
              <input
                type='text'
                name='name'
                className='contact__form-input'
                placeholder='Inserta tu nombre'
                style={{
                  backgroundColor: darkMode ?
                    '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
                }}
              ></input>
            </div>
            <div className='contact__form-div'>
              <label className='contact__form-tag' style={{
                backgroundColor: darkMode ?
                  '#1f1a2e' : "white", color: darkMode && '#fff'
              }}>Email</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='Inserta tu email'
                style={{
                  backgroundColor: darkMode ?
                    '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
                }}
              ></input>
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag' style={{
                backgroundColor: darkMode ?
                  '#1f1a2e' : "white", color: darkMode && '#fff'
              }}>Mensaje</label>
              <textarea name='message' cols='30' rows='10' className='contact__form-input' placeholder='Escribí tu mensaje' style={{
                backgroundColor: darkMode ?
                  '#1f1a2e' : "white", color: darkMode && '#fff', border: darkMode && '2px solid #fff'
              }}></textarea>
            </div>

            <button className='button button--flex'>
              Enviar mensaje
            </button>
          </form>
        </div>


      </div>
    </section>
  )
}

export default Contact