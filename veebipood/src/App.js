
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
//import Koduleht from './pages/Koduleht';
import Avaleht from './pages/Avaleht';
import HaldaTooteid from './pages/HaldaTooteid';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import UksikToode from './pages/UksikToode';

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

    <Link to='/poed'>  
    <button>Poed</button>
    </Link>

    <Link to='/halda-tooteid'>  
    <button>Halda Tooteid</button>
    </Link>

    {/* localhost:3000                "Tere" */}
    {/* localhost:3000/ostukorv    "Ostukorv" */}
    <Routes>
      <Route path='' element={ <Avaleht/> } />
      <Route path='ostukorv' element={ <Ostukorv /> } />
      <Route path='lisa-toode' element={ <LisaToode/> } />
      <Route path='seaded' element={ <Seaded/> } />
      <Route path='poed' element={ <Poed/> } />
      <Route path='halda-tooteid' element={ <HaldaTooteid/> } />
      <Route path='toode/:number' element={ <UksikToode/> } />
      <Route path='*' element={ <div>404 Not Found </div> } />
    </Routes>

<br></br>

    <div>Meie telefon: {localStorage.getItem("telefon")}</div>
    <div>Meie email: {localStorage.getItem("email")}</div>

    </div>
  );
}

export default App;
