import { useState } from "react";
//import "./MyDiv.css";
import "./BoxRow.css";

const BoxRows = ({ mb }) => {
  // const mblist = [...probs.mblist]
  console.log("Boxrows", mb);
  const [footTag, setFootTag] = useState('');
  //클릭된 자료확인
  const showMv = (row) => {
    console.log(row);
    setFootTag(("["+row.movieCd+"] ,영화제목 : " + row.movieNm + " ,개봉일 : " + row.openDt));
  }
  let trTags = [];
  for (let row of mb) {
    console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
    // if(row.rankInten == 0){
    //     row.rankInten = "⏺" + row.rankInten
    // } else if(row.rankInten > 0){
    //     row.rankInten = "🔼" + row.rankInten
    // } else {
    //     row.rankInten = "🔽" + row.rankInten
    // }

    trTags.push(
      <tr className="mytr" key={row.movieCd} onClick={()=> showMv(row)}>
        <td>{row.rank}</td>
        <td>{row.movieNm}</td>
        <td>{parseInt(row.salesAmt).toLocaleString()}</td>
        <td>{row.rankInten}</td>
      </tr>
    );
  }

  console.log(trTags);
  return (
  <>
  <tbody>
    {trTags}
  </tbody>
  <tfoot>
    <tr>
    <td className="mytd" colSpan={4}>{footTag}</td>
    </tr>
  </tfoot>
  </>
  );
};
export default BoxRows;
