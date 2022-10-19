import { useState, useRef } from "react";

function LisaToode() {

    const [s6num, muudaS6num] = useState(""); // useState muudab HTMLs muutuja v22rtust
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef();

const lisa = () => {
    if (nimiRef.current.value === '') {
muudaS6num('Ei saa lisada ilma nimeta!');
    } else {
muudaS6num('Lisatud:' + nimiRef.current.value);
let tootedLS = localStorage.getItem("tooted"); 
tootedLS = JSON.parse(tootedLS)  || [];         //  || - kui vasakul mainitud on tuhjus siis vota jargmine
const uusToode = {
    "nimi": nimiRef.current.value,
    "hind": Number(hindRef.current.value),
    "pilt": piltRef.current.value,
    "aktiivne": aktiivneRef.current.checked,
}
tootedLS.push(uusToode);
tootedLS = JSON.stringify(tootedLS);
localStorage.setItem("tooted", tootedLS);
    }  // mine loogeliste sulguse blokki nr 1 kui sulgude ees on t6si
                                                  // kui ei ole t6si, mine blokki nr 2  
muudaS6num("Lisatud!" + nimiRef.current.value);   
}

return (
    <div>
        <div>{s6num}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <label>Uue toote hind</label> <br />
        <input ref={hindRef} type="number" /> <br />
        <label>Uue toote pilt</label> <br />
        <input ref={piltRef} type="text" /> <br />
        <label>Uue toote aktiivsus</label> <br />
        <input ref={aktiivneRef} type="checkbox" /> <br />
        <button onClick={lisa}>Lisa uus toode</button>
    </div> );
}

export default LisaToode;

// tab <-/->