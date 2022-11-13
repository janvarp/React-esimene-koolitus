import { useEffect, useState } from "react";

function Avaleht() {

    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json(res))
        .then(data => uuendaPostitused(data))
    }, []);

    return ( 
    <div>
        <div>See on avaleht</div>
        <img src="https://f11.pmo.ee/H3M0e5b-Yyu_Gl1A6rPlS7CsDCc=/800x380/smart/https%3A%2F%2Fk2-telecast.s3.amazonaws.com%2F18-100-121%252Fd6f22f6ececd59fae95d5b3c19f6c8e7_K2%2Bkoduleht1%2B.png" alt="" />
        {postitused.map(element => 
        <div>
        <div><i>{element.userID}</i></div>
        <div><u>{element.id}</u></div>
        <div><b>{element.tile}</b></div>
        <div>{element.body}</div>
        </div>
        )}
    </div> );
}

export default Avaleht;