import { useState, useRef } from "react";
const MyRef = () => {
    let cnt1 = 1;
    const [cnt2, setCnt2] = useState(1) ;
    const cnt3 = useRef(1);

    const showCnt = () => {
        console.log('cnt1 =', cnt1, 'cnt2 =', cnt2, 'cnt3 = ', cnt3.current);
    }

    const showCnt1 = () => {
        cnt1 = cnt1 + 1 ;
        showCnt();
    }

    const showCnt2 = () => {
        setCnt2(cnt2 + 1) ;
        showCnt();
    }

    const showCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>state 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt3.current}</h1></div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수</button>
                    <button onClick={() => showCnt2()}>state 변수</button>
                    <button onClick={() => showCnt3()}>Ref 변수</button>
                </div>
            </article>
        </main>
    );
}


export default MyRef;