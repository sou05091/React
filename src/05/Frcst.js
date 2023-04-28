import { useState } from "react";
import data from "./dataFrcst.json";

const Frcst = () => {
  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
  const [bodyTag, setbodyTag] = useState("");
  //dtKey.map((item) => console.log(data[item]));
  //usestate 함수 사용법
  let dtcn = {};
  //dtcn빈공간 생성
  //dtKey.map((item, idx) => console.log(data[item], data[cnKey[idx]]));
  dtKey.map((item, idx) => (dtcn[data[item]] = data[cnKey[idx]]));
  //dtcn에 data[item] 입력, 
  //map함수 먼지 사용법, data라는 함수가 있는지
  console.log(dtcn);
  //상세정보
  const detail = (k) => {
    // let dtcnItem = dtcn[k].split(',')
    // dtcnItem = dtcnItem.map((item) => <div>{item}</div>)
    console.log();
    let tempTag;
    setbodyTag(dtcn[k]);
  };
  let dtTag = [];
  dtTag = Object.keys(dtcn).map((item) => (
    <button key={item} onClick={() => detail(item)}>
      {item}
    </button>
  ));


  return (
    <main className="contain">
      <article>
        <header>
          <h1>초미세먼지 주간예보</h1>
        </header>
        <div className="grid">{dtTag}</div>
        <div>{bodyTag}</div>
      </article>
    </main>
  );
};
export default Frcst;
