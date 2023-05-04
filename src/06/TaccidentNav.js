import { useEffect } from "react";
import dataTaccident from "./dataTaccident.json";
import TaccidentNav2 from "./TaccidentNav2";

const TaccidentNav = ({ sel1, c3, sel3, setSel3 }) => {
  const data = dataTaccident.data;
  const c3Arr = c3.filter((item) => item[0] === sel1);

  const show = (item) => {
    console.log(item);
  };

  const btTag = c3Arr.map((item) => (
    <li key={item}>
      <button onClick={() => setSel3(item)}>{item[1]}</button>
    </li>
  ));

  //   useEffect(() => {
  //     console.log("useEffect [sel1]" +sel3);
  //   }, [sel3]);


  return (
    <main className="container">
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <h2>사고유형_중분류</h2>
              </li>
            </ul>
            <ul>{btTag}</ul>
            {/* <TaccidentNav2 sel1={sel1} c3={c3} sel3={sel3} setSel3={setSel3} selData = {selData} setselData = {setselData}/> */}
          </nav>
        </header>
      </article>
    </main>
  );
};
export default TaccidentNav;
