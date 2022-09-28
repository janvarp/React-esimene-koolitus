import { useState } from "react";

function Koduleht() {
    // contst ----> constant ehk konstantne väärtus (ei saa pärast initsialiseerimist uuesti väärtust anda)
    //let ---> initsialiseerimise jargselt saan ka muuta   locally entire function
   const [kogus, muudaKogus] = useState (5); // 1. tehakse valmis kogus muutuja
   const [s6num, muudaS6num] = useState ("Muuda kogust!");

const v2henda = () => {  // 2. tehakse valmis funktsioon, aga seda kaima ei panda
//kogus = kogus - 1
if (kogus > 0) {
muudaKogus(kogus - 1);
console.log("panen kaima vahenda funktsiooni"); // parem klops -> inspect -> console
console.log(kogus);
muudaS6num("Kogus vahendatud");
} else {
    muudaS6num("Kogus ei saa miinusesse minna!");
}
}

// function v2henda() {


// }

const suurenda = () => {  
    //kogus = kogus + 1
    muudaKogus(kogus + 1);
    muudaS6num("Kogus suurendatud");
    }

    const nulli = () => {  
        //kogus = 0
        muudaKogus(0);
    }

    return (  // 3. minnakse renderdama (HTMLKi joonistama)
    <div>
        <div>{s6num}</div>
        <button onClick={v2henda}>-</button> 
        {kogus}                                 {/* 5. kuvatakse valja kogus */}
        <button onClick={suurenda}>+</button> {/* 6. tehakse + nupp */}
        <br />
        { kogus !== 0 && <button onClick={nulli}>Nulli</button>}
        </div> );
}

export default Koduleht;