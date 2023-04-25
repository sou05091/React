//const MyDivArticle = (probs)=> {

import NewFile from "./NewFile";
import style from "./MyDiv.module.css";
import "./MyDiv.css";
//state 변수  1단계 사용
import { useState } from "react";

// 매개변수를 procs로 사용하지 않고 오브젝트에 매캐변수명을 널어서 사용
const MyDivArticle = ({ aname }) => {
  // const aname = probs.aname
  let n = aname === undefined ? "0" : aname.slice(-1);
  //   let cnt = 0;
  //state 변수  2단계 사용
  const [cnt, setCnt] = useState(0);
  //clik 이벤트 처리
  //   const like = (n) => {cnt = cnt + n; console.log(cnt)}
  const like = () => {
    setCnt(cnt + 1);
    console.log(cnt);
  }
  console.log(n);
  return (
    <article>
      <header>
        <h1 className={style.mah1}>{aname || "NewFile0"}</h1>
      </header>
      <ul className={style.aul}>
        <li className={style.ali}>{n === "0" ? "NewFile0" : aname}1</li>
        <li className={style.ali}>{"NewFile" + n}2</li>
      </ul>
      {n === "1" && (
        <footer>
          <h2>
            <span onClick={() => like(2)}>❤{cnt}</span>
          </h2>
        </footer>
      )}
      {/* n==1일 경우만 적용 */}
      {/* {n === '2' || <footer><h2>2 : {cnt}</h2></footer>} */}
      {/* n==2 가 아닐경우만 적용 */}
    </article>
  );
};
export default MyDivArticle;
