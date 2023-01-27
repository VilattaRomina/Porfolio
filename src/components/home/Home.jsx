import './Home.css';
// import Social from './Social';
import Data from './Data'
import Img from '../../assets/perfil.png'

const Home = () => {
   

    return (
        <section className='home section' id='home'>
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <div className='home__img'>
                        <img src={Img} alt='perfil'/>
                    </div>
                    <Data />
                </div>

              
            </div>
        </section>
    );
}

export default Home;
