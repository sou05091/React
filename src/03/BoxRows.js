const BoxRows = ({ mb }) => {
  // const mblist = [...probs.mblist]
  console.log("Boxrows", mb);
  let trTags = [];
  for (let row of mb) {
    console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
    if(row.rankInten == 0){
        row.rankInten = "⏺" + row.rankInten
    } else if(row.rankInten > 0){
        row.rankInten = "🔼" + row.rankInten
    } else {
        row.rankInten = "🔽" + row.rankInten
    }
    trTags.push(
      <tr className="mytr" key={row.movieCd}>
        <td>{row.rank}</td>
        <td>{row.movieNm}</td>
        <td>{parseInt(row.salesAmt).toLocaleString()}</td>
        <td>{row.rankInten}</td>
      </tr>
    );
  }
  console.log(trTags);
  return <>{trTags}</>;
};
export default BoxRows;
