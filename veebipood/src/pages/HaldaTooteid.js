import {useState} from "react";
import {Link} from "react-router-dom";

function HaldaTooteid() {
    const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

    const kustuta = (index) => {
        tooted.splice(index,1); // .splice(mitmendat_kustutan, mitu_tukki)
        uuendaTooted(tooted.slice());
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }
                                // .map( (uks_element, jarjekorraNumber) => millega_igauhe_asendan )
    return ( 
    <div>
        {tooted.map((element, index) => 
        <div key={index}>
            {element}
            <button onClick={() => kustuta(index)}>x</button>
            <Link to={"/muuda/" + index}>
            <button>Muuda</button>
            </Link>
        </div>)}
    </div> );
}

export default HaldaTooteid;

// {} loogelised sulud - viide mingile muutujal ( (index) - {index} )