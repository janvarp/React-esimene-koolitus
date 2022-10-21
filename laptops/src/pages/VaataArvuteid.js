function VaataArvuteid() {
    const margid = JSON.parse(localStorage.getItem('margid') || []);
    const mudelid = JSON.parse(localStorage.getItem('mudelid')|| []);
    const maksumused = JSON.parse(localStorage.getItem('maksumused')|| []);

    return ( 
        <div>
            <div>{margid}</div>
            <div>{mudelid}</div>
            <div>{maksumused}</div>
        </div>
     );
}

export default VaataArvuteid;