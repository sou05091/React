import { useParams } from "react-router-dom";
import FcstTable from "./FcstTable";
import { useState, useEffect, useRef } from "react";
import code from "./getcode.json";

const UltrastrFcst = () => {
  const { x, y, dt } = useParams();
  const [items, setItems] = useState([]);
  const [ops, Setops] = useState([]);
  const [selectedItem, SetslectedItem] = useState("");
  const sel1 = useRef();

  useEffect(() => {
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
    getData();
  }, [dt, x, y]);

  useEffect(() => {
    const temp = code.filter((item) => item["예보구분"] === "단기예보");
    const setops = temp.map((item) => (
      <option value={item["항목값"]} key={item["항목값"]}>{item["항목명"] + "(" + item["항목값"] + ")"}</option>
    ));
    Setops(setops);
  }, []);

  const getSel = () => {
    let temp = code.find((item) => item["항목값"] === parseInt(sel1.current.value));
    console.log(temp);
    SetslectedItem(temp ? temp["항목값"] : "");
  };

  const UltraView = ({ items, selectedItem }) => {
    const tags = [];
    for (let i = 0; i < items.length; i = i + 1) {
      if (items[i].category === selectedItem) {
        tags.push(
          <FcstTable
            key={i}
            item={items[i]}
            selectedItem={selectedItem}
          />
        );
      }
    }
    return <tbody>{tags}</tbody>;
  };

  return (
    <article>
      <div className="grid">
        {useParams().area}
        <select ref={sel1} id="sel" name="sel" onChange={getSel}>
          <option value="">선택</option>
          {ops}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>항목명</th>
            <th>예측일자</th>
            <th>예측시간</th>
            <th>예보 값</th>
          </tr>
        </thead>
        <UltraView items={items} selectedItem={selectedItem} />
      </table>
    </article>
  );
};

export default UltrastrFcst;
