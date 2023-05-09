import BoxRows from "./BoxRows";
import { useRef, useState, useEffect } from "react";

const Box = () => {
  
  const [mblist, setmblist] = useState();
  let seldt;

  useEffect(() => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -1);
    seldt = yesterday.getFullYear();

    let month = yesterday.getMonth()+1;
    month = month < 10 ? `0${month}` : month;

    let day = yesterday.getDate();
    day = day < 10 ? `0${day}` : day; 

    seldt = `${seldt}${month}`;
    seldt = `${seldt}${day}`;
    console.log(seldt);
    getData(seldt);
  },[])

  //console.log(mblist);
  const dt = useRef();

  const getDt = () => {
    let seldt = dt.current.value.replaceAll('-','')
    console.log(seldt);
    getData(seldt);
  }

  useEffect(() => {
    
  },[seldt])



  //데이터 가져오기
  const getData = (sd) => {
    let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="
    url = url + sd;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => setmblist(data.boxOfficeResult.dailyBoxOfficeList))
    .catch((err) => console.log(err));
  }

  return (
    <main className="container">
      <article>
        <header>
          <nav>
            <ul><li><h1>일일박스오피스</h1></li></ul>
            <ul><li><input ref={dt} type="date" id = "dt" name="dt" onChange={() => getDt()}/></li></ul>
          </nav>
        </header>
        <table>
          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col">영화명</th>
              <th scope="col">매출액</th>
              <th scope="col">증감</th>
            </tr>
          </thead>
            {mblist && <BoxRows mb={mblist}/>}
        </table>
      </article>
    </main>
  );
};
export default Box;
