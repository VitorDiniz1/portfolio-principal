
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Title from './Components/Title';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='container'>
        <Title title='Sobre mim' />
        <About />
        
        <Title title=' Meus Projetos' />
        <Portfolio />

        <Title title=' Tecnologia e Habilidades' />
        <Skills />

        <Title title=' Entre em contato comigo' />
        <Contact />

      </div>

    </div>
    /*ajeitar o vh, por cores, hover,animacoes,ajeitar o contato,portfolio */
  );
}

export default App;
