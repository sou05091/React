import { useState, useEffect, useRef} from "react";

const Travel = () => {
//키원드 input
const txt1 = useRef();

useEffect(() => {
    txt1.current.focus();
},[])

const show = (e) => {
    e.preventDefault();
    if (txt1.current.value === '') return;
    let kw = encodeURI(txt1.current.value)
    console.log(kw);

}
const showClear = () => {

}

return (
    <main className="container">
        <article>
            <form>
                <div className="grif">
                    <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요"></input>
                </div>
                <button onClick={() => show()}>검색</button>
                <button onClick={() => showClear()}>취소</button>
            </form>
        </article>
    </main>
);

};
export default Travel;