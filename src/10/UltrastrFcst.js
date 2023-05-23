import { useParams } from "react-router-dom";
import FcstTable from "./FcstTable";
import { useState, useEffect } from "react";
import code from './getcode.json'

const UltrastrFcst = () => {
  const { x, y, dt } = useParams();
  const [items, setItems] = useState();
  const [w, setW] = useState();
  const [ops, Setops] = useState();

  const getData = () => {
    let servisekey = `vhYH%2BRoHzI4MivTFpcrv5aVwqVE1np0oVvWL4U98zWxlKSz4KyV4KLNz6EkuqKulPNLTXBQ%2BWKRUvMSJKlGi3g%3D%3D`;
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${servisekey}&`;
    url = url + `numOfRows=60&`;
    url = url + `pageNo=1&`;
    url = url + `base_date=${dt}&`;
    url = url + `base_time=0630&`;
    url = url + `nx=${x}&`;
    url = url + `ny=${y}&`;
    url = url + `dataType=JSON`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));
  };

  const UltraView = ({items}) => {
    const tags = [];
    for(let i = 0; i < items.length; i = i+1){
        tags.push(
            // <div className="grid" key={'div' + i}>
                <FcstTable item = {items[i]}/>
            //     {(i + 1 < items.length) && <FcstTable item = {items[i+1]}/>}
            // </div>
        );
    }
    return <>{tags}</>
  }

  useEffect(() => {
    const temp = code.filter((items) => items["예보구분"] === "단기예보");
    const setops = temp.map((items) => 
    <option value=''>
        {items["항목명"] + "(" + items["항목값"] + ")"}
    </option>
    )
    Setops(setops);
  },[])


  return (
    <article>
        <div className="grid">
        {useParams().area}
        <select>
            <option value=''>선택</option>
            {ops}
        </select>
        </div>
          {getData()}
        <table>
        <thead>
                <tr>
                    <th>항목명</th>
                    <th>예측일자</th>
                    <th>예측시간</th>
                    <th>예보 값</th>
                </tr>
            </thead>
            {items && <UltraView items={items} />}
        </table>
    </article>
  );
};
export default UltrastrFcst;
