import './App.css'
import About from './components/about/About';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import { useContext } from 'react';
import { ThemeContext } from './context';
function App() {
const theme = useContext(ThemeContext);
 const darkMode = theme.state.darkMode;

  return (
      <div  className= "App" style={{backgroundColor: darkMode ? '#1f1a2e' : "white", color: darkMode && "white"
      }}>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </div>
   
  );
}

export default App;
