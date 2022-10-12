import { useParams } from "react-router-dom";

function UksikToode() {
    const { number } = useParams();
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const leitudToode = tooted[number];


    return ( 
    <div>
        {leitudToode !== undefined && <div>{leitudToode}</div> }
        {leitudToode === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default UksikToode;