import { useState } from "react";

function Jalus() {
    const [naitaEmail, uuendaNaitaEmail] = useState(false);
    const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon"));

    return ( 
    <>
    <br></br>
    <div>Meie telefon:
         {telefon}
         { telefon.startsWith("+372") === false &&
          <button onClick={() => uuendaTelefon("+372" + telefon)}>
            Lisa suunakood
            </button>}
         </div>
    <div>Meie email:
       {/* naitaTel === true && localStorage.getItem("email")}
       { naitaTel === false && <buttononClick={() => uuendaNaitaEmail}>Vaata</button> */}
       {naitaEmail === true ?
            localStorage.getItem("email") :
                <button onClick={() => uuendaNaitaEmail}>Vaata</button>}
       </div>

    </> );
}

export default Jalus;