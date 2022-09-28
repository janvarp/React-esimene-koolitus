
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Lamborghini from './pages/Lamborghini';
import Mercedes from './pages/Mercedes';
import Ferrari from './pages/Ferrari';

function App() {
  return (
    <div >
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/lamborghini">
        <button>Lamborghinist lähemalt</button>
      </Link>
      <Link to="/mercedes">
        <button>Mercedesest lähemalt</button>
      </Link>
      <Link to="/ferrari">
        <button>Ferrarist lähemalt</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='lamborghini' element={ <Lamborghini /> } />
        <Route path='mercedes' element={ <Mercedes /> } />
        <Route path='ferrari' element={ <Ferrari />} />
      </Routes>
    </div>
  );
}

export default App;
