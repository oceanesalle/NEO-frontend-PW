import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';


function App() {
  return (
    <div className="App">
     <Hero />
     <Plans />
     <Team />
     <Footer />
    </div>
  );
}

export default App;
