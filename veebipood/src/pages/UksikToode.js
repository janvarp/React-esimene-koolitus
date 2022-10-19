import { useParams } from "react-router-dom";

function UksikToode() {
    const { number } = useParams();
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const leitudToode = tooted[number];


    return ( 
    <div>
        {leitudToode !== undefined && 
        <div>
        <div>{leitudToode.nimi}</div>
        <div>{leitudToode.hind}</div>
        <img src={leitudToode.pilt} alt="" />
        <div>{leitudToode.aktiivne + 0}</div>
        </div>
        }
        {leitudToode === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default UksikToode;