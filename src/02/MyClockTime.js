import { useState } from "react";

const MyClockTime = () => {
    let t = new Date().toLocaleTimeString()
    //state 변수로 변경(state변수는 직접 변경 불가), 배열 myTime = 변수, SetMyTime 함수로 선언 
    const [myTime, setMyTime] = useState(t);
    setInterval(()=> setMyTime(new Date().toLocaleTimeString()), 1000);
    //setInterval(()=>console.log(setMyTime(new Date().toLocaleTimeString()), 1000));
    return(
        <footer>
            <h1>{t}</h1>
        </footer>
    );
}
export default MyClockTime;

// const MyClockTime = () => {
//     let myTime = new Date().toLocaleTimeString();
//     return(
//         <footer>
//             <h1>{myTime}</h1>
//         </footer>
//     );
// }
// export default MyClockTime;