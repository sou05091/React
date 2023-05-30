import CodeList from "./CodeList";
//import code from "./getcode.json";
import { useState, useEffect } from "react";
const CodeGubun = () => {
  const selItem = (e) => {
    console.log(e.target.value);
    setSel(e.target.value);
  };

  const [sel, setSel] = useState("");

  //sel이 바뀔때마다 실행
  useEffect(() => {}, [sel]);

  return (
    <>
      <article>
        <form>
          <div className="grid">
            <div>
              <select id="sel" name="sel" onChange={selItem}>
                <option value="">선택</option>
                <option value="단기예보">단기예보</option>
                <option value="초단기예보">초단기예보</option>
              </select>
            </div>
            <div>
            {sel === "" ? <h1>값을 선택하세요.</h1> : <CodeList sell={sel} />}
            </div>
          </div>
          <footer>
            <ul>
                <li></li>
            </ul>
          </footer>
        </form>
      </article>
    </>
  );
};
export default CodeGubun;
