// kogus = useState(5)    ---> a) 0  b) kogus-1 => 5-1 => 4
// s6num = useState("Tere")   ---> a) "Edukalt lisatud"  b) "Midagi on puudu"
// array = useState(["uks", "kaks", "kolm"])  ---> ["uks","kaks"]

import { useRef, useState } from "react";

function Poed() {
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

    const aegRef = useRef();

    const lisa = () => {
        poed.push({nimi: poodRef.current.value, aeg: aegRef.current.value});
        uuendaPoed(poed.slice());
    }

    const filtreeri = () => {
        const vastus = poed.filter(element => element.nimi.includes("m2e"));
        uuendaPoed(vastus);
    }

    const muudaK6iki = () => {
        const vastus = poed.map(element => {return {...element, nimi: element.nimi + "--"}});
        uuendaPoed(vastus);
    }

    const [poed, uuendaPoed] = useState([
         {nimi: "Kristiine"     , aeg: "9-12"},
         {nimi: "Mustam2e"      , aeg: "10-21"},
         {nimi: "Kesklinn"      , aeg: "10-21"},
         {nimi: "6ism2e"        , aeg: "10-21"},
         {nimi: "P6hja-Tallinn" , aeg: "10-21"},
         {nimi: "Lasnam2e"      , aeg: "10-21"},
        ]);


    return ( 
    <div>
        <label>Uus pood</label> <br />
        <input ref={poodRef} type="text" /> <br />
        <label>Uue poe lahtiolekuaeg</label> <br />
        <input ref={aegRef} type="text" /> <br />
        <button onClick={lisa}>Sisesta</button> <br />

        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={filtreeri}>Jata alles "m2e" sisaldavad</button>
        <button onClick={muudaK6iki}>Lisa taiendavad -- loppu</button>

        {/* .map() on funktsionaalsus, mis kehtib alati array-dele
         map on ukshaaval iga elemendi v]tmine ja tema muutmine html-ks*/}
        <div>{["","",""].map((e,i) => <div key={i}>{i}. Tere</div>)}</div>

         <br /><br />

        <div>{poed.map((pood, index) =>
        <div key={index}>
            {pood.nimi} {pood.aeg}
             <button onClick={() =>kustuta(index)}>x</button>
             </div>)}
        </div>

        <div key={0}> Kristiine 9-22 <button onClick={() => kustuta(0)}>x</button> </div>
        <div key={1}>Mustam2e <button onClick={() => kustuta(1)}>x</button> </div>
        <div key={2}>Kesklinn <button onClick={() => kustuta(2)}>x</button> </div>
        <div key={3}>6ism2e <button onClick={() => kustuta(3)}>x</button> </div>
        <div key={4}>P6hja-Tallinn <button onClick={() => kustuta(4)}>x</button> </div>
        <div key={5}>Lasnam2e <button onClick={() => kustuta(5)}>x</button> </div>
    </div>  );
}

export default Poed;