import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

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
    <h2 className='section__title'>Hablemos</h2>
    <span className='section__subtitle'>Podes contactarme a traves de</span>

    <div className='contact__container container grid'>
      <div className='contact__content'>
        <h3 className='contact__title'>Hablemos</h3>

        <div className='contact__info'>
            <div className='contact__card'>
                <i className='uil uil-envelope contact__card-icon'></i>
                <span className='contact__card-data'></span>

                <a href='' className='contact__button'>vilattaromina@gmail.com <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>

            <div className='contact__card'>
                <i className='uil uil-linkedin contact__card-icon'></i>
                <span className='contact__card-data'></span>

                <a href='https://www.linkedin.com/in/rominavilattamontenegro/' className='contact__button'>romina-vilatta-montenegro <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>

            <div className='contact__card'>
                <i className='uil uil-github contact__card-icon'></i>
                <span className='contact__card-data'></span>

                <a href='https://github.com/VilattaRomina' className='contact__button'>VilattaRomina <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>
        </div>
      </div> 
      <div className='contact__content'>
        <h3 className='contact__title'>Escribime</h3>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
        <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input 
                    type='text'
                    name='name'
                    className='contact__form-input'
                    placeholder='Inserte su mensaje'
                    ></input>
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Email</label>
                    <input 
                    type='email'
                    name='email'
                    className='contact__form-input'
                    placeholder='Inserte su email'
                    ></input>
                </div>
                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Mensaje</label>
                    <textarea name='message' cols='30' rows='10' className='contact__form-input' placeholder='Escribe tu mensaje'></textarea>
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