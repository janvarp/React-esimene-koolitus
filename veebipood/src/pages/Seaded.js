import { useRef, useState } from 'react';

function Seaded() {
const [keel, uuendaKeel] = useState(localStorage.getItem('veebilehe_keel') || 'EST');
const telRef = useRef(); // ref - inputi seest vaartuse kattesaamiseks
const emailRef = useRef();

// ---KOODI VÄRVIDE TÄHENDUSED
// tumesinine - function, const (deklareerin tüübi), HTMLs on tag <div> <img>
// sinine - meie tehtud muutuja
// helesinine - JavaScripti enda muutuja, HTMLi atribuut  --- src="", onClick="", className=""
// kollane - funktsioonid
// punane/oranž - sõnad jutumärkides

//const muudaKeelEST = () => {
//    uuendaKeel('EST');
//    localStorage.setItem('veebilehe_keel', 'EST');
//}

//const muudaKeelENG = () => {
//    uuendaKeel('ENG');
//    localStorage.setItem('veebilehe_keel', 'ENG');
//}

//const muudaKeelRUS = () => {
 //   uuendaKeel('RUS');
 //   localStorage.setItem('veebilehe_keel', 'RUS');
//}

    const muudaKeel = (uusKeel) => {
    uuendaKeel(uusKeel)
    localStorage.setItem("veebilehe_keel", uusKeel);
    }

    const salvetsaTel = () => {
        localStorage.setItem("telefon", telRef.current.value);
    }
    // localStorage-s salvestame setItem abil, andes kaasa votme ja vaarstuse mille salvestan
    // salvestame et teha kuskil mujal getItem

    const salvestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
    }

    return ( 
    <div>
        <label>Meie telefoninumber</label>
        <input ref={telRef} defaultValue={localStorage.getItem("telefon")} type="text" />
        <button onClick={salvetsaTel}>Sisesta</button>
        <br />
        <label>Meie email</label>
        <input ref={emailRef} defaultValue={localStorage.getItem("email")} type="text" />
        <button onClick={salvestaEmail}>Sisesta</button>

        <button onClick={() => muudaKeel("EST")}>Muuda eesti keelseks</button>
        <button onClick={() => muudaKeel("ENG")}>Muuda inglise keelseks</button>
        <button onClick={() => muudaKeel("RUS")}>Muuda vene keelseks</button>

        { keel === 'EST' && <div>Veebilehe keel on: eesti</div>}
        { keel === 'ENG' && <div>Veebilehe keel on: inglise</div>}
        { keel === 'RUS' && <div>Veebilehe keel on: vene</div>}
        { keel === 'ENG' && <div>Welcome!</div>}

        
    </div> );
}

export default Seaded;

// {} - JavaScriptis tähistavad koodiblokki:
//        const funktsioon = () => {koodiblokk}
//        if () {koodiblokk} else {koodiblokk}
//      HTMLs    dünaamika
//        { tingimuslause && <div>}
//        onClick={fnkts}
//        ref={blablbalbalbalRef}
// || - kui on vasakul tühjus, võta parem
// && - kui on vasakul tõde, tee parem
// === - kui vasak pool ja parem pool on võrdsed, siis on tõde
// () - defineerivad funktsiooni
// () => {} funktsiooni tähistus
// !== - kui vasak pool ja parem pool ei ole võrdsed, on tõde