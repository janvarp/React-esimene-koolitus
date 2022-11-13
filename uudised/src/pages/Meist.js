import { useState } from "react"

function Meist() {

    const [kontakt, naitaKontakt] = useState("");

    return ( 

    <div>
        <div>See on leht meist</div>
        <div>Meie tootajad</div>
        <br />

        <div>Arvo Part</div>
        <div>Uudisteklippide taustamuusika</div>
        <button onClick={() => naitaKontakt("+345345335")}>Vota uhendust</button>
        <br /> <br />

        <div>Kelly Sildaru</div>
        <div>Pustolreporter</div>
        <button onClick={() => naitaKontakt("+362426634")}>Vota uhendust</button>
        <br /> <br />

        <div>Edward Von Longus</div>
        <div>Uudiste kujundaja</div>
        <button onClick={() => naitaKontakt("+324573462")}>Vota uhendust</button>
        <br /> <br />
        
        <div>Kerli Koiv</div>
        <div>Valisturgude spetsialist</div>
        <button onClick={() => naitaKontakt("+467335222")}>Vota uhendust</button>
        <br /> <br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}

    </div> );
}

export default Meist;