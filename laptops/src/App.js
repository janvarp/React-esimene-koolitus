import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';


function App() {
  return (
    <div>

<Link to="/">
    <button>Avalehele</button>
    {/*  alt="" /> */}
    </Link>

    <Link to="/all">
    <button>Vaata sylearvuteid</button>
    {/* > */}

    </Link>
    <Link to="/add">
    <button>Lisa sylearvuti</button>
    </Link>

<Routes>
      <Route path='' element={ <Avaleht/> } />
      <Route path='all' element={ <VaataArvuteid /> } />
      <Route path='add' element={ <LisaArvuti/> } />
    </Routes>
      
    </div>
  );
}

export default App;
