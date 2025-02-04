import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import ImageDisplay from './components/ImageDisplay';
import reactLogo from './assets/react.svg'
import NamesGenerator from './components/NamesGenerator';



// Composant pour la page d'accueil
const Home = () => {
  const version = "1.0.0"; 

  return (
    <div className="container">
      <img src={reactLogo} alt="Logo" className="logo" />

      <h1>
        Bienvenue sur la page d'accueil utilisant React <span className="version">{version}</span>
      </h1>

      <p className="description">Ceci est une application de tests pour mesurer les performances de React</p>

      <nav className="nav-container">
        <Link to="/names-generator" className="button">
          🚀 Test N°1: Générateur de noms
        </Link>
        <Link to="/image-display" className="button">
          🖼️ Test N°2: Affichage d'images
        </Link>
      </nav>
    </div>
  );
};


// Composant principal de l'application
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/names-generator" element={<NamesGenerator />} />
        <Route path="/image-display" element={<ImageDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;