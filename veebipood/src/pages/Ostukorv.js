import { useState } from "react";

function Ostukorv() {
    // const ostukorv = ["Nobe", "Mercedes", "Tesla", "BMW"];
    const [ostukorv, uuendaOstukorv] = useState(["Nobe", "Mercedes", "Tesla", "BMW"]);

    const kustuta = (jarjekorraNumber) => {
        ostukorv.splice(jarjekorraNumber,1); // splice - kustutan
        console.log(ostukorv);
        uuendaOstukorv(ostukorv.slice()); // slice - teen koopia
    }

    const lisa = (klikitudToode) => {
        ostukorv.push(klikitudToode);
        uuendaOstukorv(ostukorv.slice()); // push - lisa 1 loppu juurde
    }

    const tyhjenda = () => {
        uuendaOstukorv([]);
    }

    return ( 
    <div>
        {ostukorv.length === 0 && <div>Ostukorv on tuhi!</div>}
        { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} toodet</div>}
        { ostukorv.length > 0 && <button onClick={tyhjenda}>Tuhjenda</button>}
        {ostukorv.map((element, jarjekorraNumber) =>
            <div key={jarjekorraNumber}>
                {element}
                <button onClick={() => kustuta(jarjekorraNumber)}>x</button>
                <button onClick={() => lisa(element)}>Lisa</button>
            </div>)}
        </div> );
}

export default Ostukorv;