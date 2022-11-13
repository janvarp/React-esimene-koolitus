import { useState } from "react";

function Kontakt() {

    const [naitaTelKristiine, muudaNaitaTelKristiine] = useState(false);
    const [naitaTelUlemiste, muudaNaitaTelUlemiste] = useState(false);
    const [naitaTelTasku, muudaNaitaTelTasku] = useState(false);

    return ( 
    <div>
        <div>See on kontaktide leht</div>
        <div>Vota meiega uhendust</div>
        <br />

        <div onClick={() => muudaNaitaTelKristiine(!naitaTelKristiine)}>Kristiine keskus</div>
        {naitaTelKristiine && <div>+3984572985</div>}
        <div>Endla 45</div>
        <br />

        <div onClick={() => muudaNaitaTelUlemiste(!naitaTelUlemiste)}>Ulemiste keskus</div>
        {naitaTelUlemiste && <div>+3948573222</div>}
        <div>Suur-Sojamae 4</div>
        <br />

        <div onClick={() => muudaNaitaTelTasku(!naitaTelTasku)}>Tasku keskus</div>
        {naitaTelTasku && <div>+4875398343</div>}
        <div>Turu 2</div>

    </div> );
}

export default Kontakt;