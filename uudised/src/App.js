
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import LisaUudis from './pages/LisaUudis';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import HaldaUudiseid from './pages/HaldaUudised';
import UksUudis from './pages/UksUudis';
import MuudaUudis from './pages/MuudaUudis';

function App() {
  return ( 
  <div>
    <Link to="/">
      <button>Avalehele</button>
    </Link>
    <Link to="/uudised">
      <button>Uudiste lehele</button>
    </Link>
    <Link to="/kontakt">
      <button>Vota meiega uhendust</button>
    </Link>
    <Link to="/meist">
      <button>Info meist</button>
    </Link>
    <Link to="/lisa-uudis">
      <button>Lisa uudis</button>
    </Link>
    <Link to="/halda">
      <button>Halda uudised</button>
    </Link>


    <Routes>
      <Route path="" element={ <Avaleht /> } />
      <Route path="uudised" element={  <Uudised /> } />
      <Route path="kontakt" element={  <Kontakt /> } />
      <Route path="meist" element={  <Meist /> } />
      <Route path="lisa-uudis" element={  <LisaUudis /> } />
      <Route path="halda" element={  <HaldaUudiseid /> } />
      <Route path="uudis/:index" element={  <UksUudis /> } />
      <Route path="muuda/:index" element={  <MuudaUudis /> } />
    </Routes>
  </div>);
}

export default App;
