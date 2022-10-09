import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import './App.css';
import { useRef, useState } from 'react';

function App() {

const [sisselogitud, muudaSisselogitud] = useState("ei");
const [sonum, muudaSonum] = useState("");
const kasutajaNimiRef = useRef();
const paroolRef = useRef();

const logiSisse = () => {
  if (paroolRef.current.value === "123") {
  muudaSisselogitud("jah")
  muudaSonum("Oled sisselogitud");
  } else {
    muudaSonum("Vale parool")
  }

}

  return (

    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajaNimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      </div> }

    { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
    { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button> }

    <div>HTML-CSS KODUTÖÖ</div>

    <Link to="/">
    <button>Avaleht</button>
    </Link>

    <Link to="/kontakt">
    <button>Kontakt</button>
    </Link>

    <Link to="/meist">
    <button>Meist</button>
    </Link>
    
    <Link to='/seaded'>  
    <button>Seadetesse</button>
    </Link>

    <Routes>
      <Route path='' element={ <Avaleht/> } />
      <Route path='kontakt' element={ <Kontakt /> } />
      <Route path='meist' element={ <Meist/> } />
      <Route path='seaded' element={ <Seaded/> } />
    </Routes>

      <button className="nupp">Helehall tekst</button>
      <text className='tekst'>Sinine tekst</text>
      <img className='pilt' src="https://play-lh.googleusercontent.com/jkpabs01pnEU5Jc9U3MuWdwwoWi8v7x33RZNYyLP2T8a2j1csnjOy3_-KI6JU8JntlNW" alt="" />
    </div>
  );
}

export default App;
