import CntDist from "./CntDist";
import CntInput from "./CntInput";
const Cnt = () => {
  return (
    <main className="container">
      <CntInput num = {num} setNum = {setNum}/>
      <CntDist dist = {num}/>
    </main>
  );
};
export default Cnt;
