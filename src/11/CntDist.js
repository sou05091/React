// const CntDist = (probs) => {
//     const num = probs.num;
import { Link } from "react-router-dom";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";
import { useRecoilValue } from "recoil";
const CntDist = () => {
  const num2 = useRecoilValue(CntAtomsTwice);
  const num = useRecoilValue(CntAtoms);
  return (
    <article>
      <form>
        <div className="grid">
          <div>
            <h1>
              입력값 : {num}, 입력값 2배: {num2}
            </h1>
            <footer>
              <Link to="/">입력화면 이동</Link>
            </footer>
          </div>
        </div>
      </form>
    </article>
  );
};
export default CntDist;
