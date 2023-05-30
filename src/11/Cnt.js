import { BrowserRouter, Route, Routes } from "react-router-dom";
import CntDist from "./CntDist";
import CntInput from "./CntInput";
import { useEffect, useState } from "react";
const Cnt = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("num", num);
  });
  return (
    <BrowserRouter>
      <main className="container">
          <Routes>
            <Route path="/" element={<CntInput />} />
            <Route path="/page1" element={<CntDist />} />
            {/* <Route path="/page1" element={<CntInput num={num} setNum={setNum} />}/>
          <Route path="/page2" element={<CntDist dist={num} />} /> */}
          </Routes>
      </main>
    </BrowserRouter>
  );
};
export default Cnt;
