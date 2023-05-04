import { useEffect } from "react";
import dataTaccident from "./dataTaccident.json";

const TaccidentNav2 = ({ sel1, c3, sel3, setSel3, setselData, selData }) => {
    const data = dataTaccident.data;
    const c3Arr = c3.filter((item) => item[0] === sel1);

  const show = (item) => {
    console.log(item);
  };

  // const btTag = data.map((item) => 
  // item.사고유형_대분류 === sel3[0] && item.사고유형_중분류 ===sel3[1] (
  //   <li key={item}>
  //     {/* <button onClick={() => resultobj(item)}>{item}</button> */}
  //   </li>
  // ), [sel3]);

  const btTag = data
  .filter((item) => item.사고유형_대분류 === sel3[0] && item.사고유형_중분류 === sel3[1])
  .map((item) => {
    const { 경상자수, 부상신고자수, 사고건수, 사망자수, 중상자수 } = item;
    return (
      <li key={item}>
        <div>경상자수: {경상자수}</div>
        <div>부상신고자수: {부상신고자수}</div>
        <div>사고건수: {사고건수}</div>
        <div>사망자수: {사망자수}</div>
        <div>중상자수: {중상자수}</div>
      </li>
    );
  });



//   useEffect(() => {
//     console.log("useEffect [sel1]" +sel3);
//   }, [sel3]);

  return (
      <div>{btTag}</div>
  );
};
export default TaccidentNav2;
