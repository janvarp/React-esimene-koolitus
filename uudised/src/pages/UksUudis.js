import { useParams } from "react-router-dom";

function UksUudis() {

    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];

    return ( 
    <div>
        {leitudUudis}
    </div> );
}

export default UksUudis;