import { Link } from "react-router-dom";

function Menuu() {
    return ( 
    <>
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
    </> );
}

export default Menuu;