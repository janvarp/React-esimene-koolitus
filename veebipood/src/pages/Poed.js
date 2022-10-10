// kogus = useState(5)    ---> a) 0  b) kogus-1 => 5-1 => 4
// s6num = useState("Tere")   ---> a) "Edukalt lisatud"  b) "MIdagi on puudu"
// array = useState(["uks", "kaks", "kolm"])  ---> ["uks","kaks"]

import { useRef, useState } from "react";

function Poed() {
    const [poed, uuendaPoed] = useState(["Kristiine","Mustam2e","Kesklinn","6ism2e","P6hja-Tallinn","Lasnam2e"])
    const poodRef = useRef();

    const sortAZ = () => {
        poed.sort();
        uuendaPoed(poed.slice());
    }

    const sortZA = () => {
        poed.sort().reverse();
        uuendaPoed(poed.slice());
    }

    const kustuta = (index) => {
    poed.splice(index,1);   // esimene on mitmendat kustutan, koma jarel teine mitu tukki kustutan
    uuendaPoed(poed.slice());   // HTMLi muutmiseks (eraldi kasklkus - muuda HTMLi, sest React on effektiivne ja React ei lahe iga muutuja peale HTMLi ka muutma)
                            // kask HTMLi muutmiseks on useState parempoolen funktsioon const [vasak,parem] = useState(algavaartus)
}

    const lisa = () => {
        poed.push(poodRef.current.value);
        uuendaPoed(poed.slice());
    }

    const filtreeri = () => {
        const vastus = poed.filter(element => element.includes("m2e"));
        uuendaPoed(vastus);
    }

    const muudaK6iki = () => {
        const vastus = poed.map(element => element + "--");
        uuendaPoed(vastus);
    }

    return ( 
    <div>
        <label>Uus pood</label> <br />
        <input ref={poodRef} type="text" /> <br />
        <button onClick={lisa}>Sisesta</button> <br />

        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={filtreeri}>Jata alles "m2e" sisaldavad</button>
        <button onClick={muudaK6iki}>Lisa taiendavad -- loppu</button>

        {/* .map() on funktsionaalsus, mis kehtib alati array-dele
         map on ukshaaval iga elemendi v]tmine ja tema muutmine html-ks*/}
        <div>{["","",""].map((e,i) => <div key={i}>{i}. Tere</div>)}</div>
        <div>{poed.map((pood, index) =>
        <div key={pood}>
            {pood}
             <button onClick={() =>kustuta(index)}>x</button>
             </div>)}
        </div>

        <div key={"Kristiine"}>Kristiine <button onClick={() => kustuta(0)}>x</button> </div>
        <div key={"Mustam2e"}>Mustam2e <button onClick={() => kustuta(1)}>x</button> </div>
        <div key={"Kesklinn"}>Kesklinn <button onClick={() => kustuta(2)}>x</button> </div>
        <div key={"6ism2e"}>6ism2e <button onClick={() => kustuta(3)}>x</button> </div>
        <div key={"P6hja-Tallinn"}>P6hja-Tallinn <button onClick={() => kustuta(4)}>x</button> </div>
        <div key={"L2snam2e"}>Lasnam2e <button onClick={() => kustuta(5)}>x</button> </div>
    </div>  );
}

export default Poed;