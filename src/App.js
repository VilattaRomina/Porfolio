import './App.css'
import About from './components/about/About';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </>
    </div>
  );
}

export default App;
