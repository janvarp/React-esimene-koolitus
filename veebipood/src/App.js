
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Koduleht from './pages/Koduleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
    <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" alt="" />
    <button className="nupp">Nupp</button>

    <Link to="/">
    <button>Avalehele</button>
    {/* <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" alt="" /> */}
    </Link>

    <Link to="/ostukorv">
    <button>Ostukorvi</button>
    {/* <div>Lalalalal</div> */}

    </Link>
    <Link to="/lisa-toode">
    <button>Uut toodet lisama</button>
    </Link>
    
    <Link to='/seaded'>  
    <button>Seaded</button>
    </Link>

    {/* localhost:3000                "Tere" */}
    {/* localhost:3000/ostukorv    "Ostukorv" */}
    <Routes>
      <Route path='' element={ <Koduleht/> } />
      <Route path='ostukorv' element={ <Ostukorv /> } />
      <Route path='lisa-toode' element={ <LisaToode/> } />
      <Route path='seaded' element={ <Seaded/> } />
      <Route path='*' element={ <Koduleht />} />
    </Routes>

    </div>
  );
}

export default App;
