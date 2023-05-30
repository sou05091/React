import { useEffect, useState } from "react";
const CntInput = () => {
    const [num, setNum] = useState(0);
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
    useEffect(() => {
      console.log("num", num)
    })
    return(
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
      </article>
    )
}
export default CntInput;