import { useState, useRef } from "react";

function LisaToode() {

    const [s6num, muudaS6num] = useState(""); // useState muudab HTMLs muutuja v22rtust
    const nimiRef = useRef();

const lisa = () => {
    if (nimiRef.current.value === '') {
muudaS6num('Ei saa lisada ilma nimeta!');
    } else {
muudaS6num('Lisatud:' + nimiRef.current.value);
    }  // mine loogeliste sulguse blokki nr 1 kui sulgude ees on t6si
                                                  // kui ei ole t6si, mine blokki nr 2  
muudaS6num("Lisatud!" + nimiRef.current.value);   
}

    return (
         <div>
            <div>{s6num}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisa}>Lisa uus toode</button>
        
    </div> );
}

export default LisaToode;

// tab <-/->