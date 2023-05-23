import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
import FcstTable from "./FcstTable";
import UltrastrFcst from "./UltrastrFcst";
import VilageFcst from "./VilageFcst";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Fcst = () => {
  return (
    <BrowserRouter>
      <main classname="container">
        <FcstNav />
        <Routes>
          <Route path="/" element={<FcstMain />} />
          {/* <Route path="/UltraFcst/:dt/:area:/x/:y" element={<UltrastrFcst />} /> */}
          <Route path="/UltraFcst/:dt/:area/:x/:y" element={<UltrastrFcst />} />
          <Route path="/VilageFcst/:dt/:area/:x/:y" element={<VilageFcst />} />
          {/* <Route path="/FcstTable" element={<FcstTable />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default Fcst;
