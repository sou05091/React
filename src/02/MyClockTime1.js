import { useState } from "react";

const MyClockTime = () => {
    let t = new Date().toLocaleTimeString()
    const [myTime, setMyTime] = useState(t);
    return(
        <footer>
            <h1 onclick = {()=> changeTime()}>{myTime}</h1>
        </footer>
    );
}
export default MyClockTime;