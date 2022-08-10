import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Fitness from './components/Fitness/Fitness';


function App() {
  return (
    <div className="App">
     <Hero />
     <Plans />
     <Fitness />
     <Team />
     <Contact/> 
     <Footer />
     
    </div>
  );
}

export default App;
