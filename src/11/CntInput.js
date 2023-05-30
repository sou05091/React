import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { CntAtoms } from "./CntAtoms";
const CntInput = () => {
  const [num, setNum] = useRecoilState(CntAtoms);
  const cal = (e) => {
    e.preventDefault();
    setNum(num + 1);
  };
  const min = (e) => {
    e.preventDefault();
    setNum(num - 1);
    if (num <= 0) {
      setNum(num + 0);
    }
  };
  return (
    <article>
      <form>
        <div className="grid">
          <div>
            <button onClick={(e) => cal(e)}>+</button>
          </div>
          <div>
            <input type="text" readOnly value={num}></input>
          </div>
          <div>
            <button onClick={(e) => min(e)}>-</button>
          </div>
        </div>
      </form>
      <Link to="/page1">출력화면 이동</Link>
    </article>
  );
};
export default CntInput;
