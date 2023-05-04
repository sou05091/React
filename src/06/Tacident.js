import dataTaccident from "./dataTaccident.json";
import TaccidentD from "./TaccidentD";
import TaccidentNav from "./TaccidentNav";
import TaccidentNav2 from "./TaccidentNav2";
import TaccidentNav3 from "./TaccidentNav3";
import { useState, useEffect } from "react";

const Tacident = () => {
  const data = dataTaccident.data;
  let c1 = data.map((item) => item.사고유형_대분류);
  // let c2 = data.map((item) => (item.사고유형_대분류) = (item.사고유형_중분류));
  const c3 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
  // for(let item of dataca){
  //     let temp = [item.사고유형_대분류, item.사고유형_중분류];
  //     // temp.push(item.사고유형_대분류);
  //     // temp.push(item.사고유형_중분류);
  //     c3.push(temp);
  // }
  // c2 = [c1,c2];
  c1 = new Set(c1); // set 안으로 들어오면 중복된 값이 없어진다. (집합)
  c1 = [...c1]; //한개씩 배열로 변경
  console.log(c1);
  // console.log(c2);
  console.log(c3);
  // dataca.map((item) => (console.log([item.사고유형_대분류])));
  const [sel1, setSel1] = useState(0);
  const [sel3, setSel3] = useState([]);
  // const [selData, setselData] = useState({});
  const selData = dataTaccident[0]; // 첫 번째 데이터를 선택

  return (
    <>
      <TaccidentD c1={c1} sel1={sel1} setSel1={setSel1} />
      <TaccidentNav sel1={sel1} c3={c3} sel3={sel3} setSel3={setSel3}/>
      <TaccidentNav3 selData={selData} />;
    </>
  );
};
export default Tacident;
