// kogus = useState(5)    ---> a) 0  b) kogus-1 => 5-1 => 4
// s6num = useState("Tere")   ---> a) "Edukalt lisatud"  b) "MIdagi on puudu"
// array = useState(["uks", "kaks", "kolm"])  ---> ["uks","kaks"]

import { useState } from "react";

function Poed() {
    const [poed, uuendaPoed] = useState(["Kristiine","Mustam2e","Kesklinn","6ism2e","P6hja-Tallinn","Lasnam2e"])

    const sortAZ = () => {
        poed.sort();
        uuendaPoed(poed.slice());
    }

    const sortZA = () => {
        poed.sort().reverse();
        uuendaPoed(poed.slice());
    }

    return ( <div>
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>

        {/* .map() on funktsionaalsus, mis kehtib alati array-dele
         map on ukshaaval iga elemendi v]tmine ja tema muutmine html-ks*/}

        <div>{poed.map(pood => <div>{poed}</div>)}</div>

        <div>Kristiine</div>
        <div>Mustam2e</div>
        <div>Kesklinn</div>
        <div>6ism2e</div>
        <div>P6hja-Tallinn</div>
        <div>Lasnam2e</div>
    </div>  );
}

export default Poed;