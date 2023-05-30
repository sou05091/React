// const CntDist = (probs) => {
//     const num = probs.num;
const CntDist = ({dist}) => {
    return(
        <article>
        <form>
          <div className="grid">
            <div>
              <h1>
                입력값 : {dist}, 입력값 2배: {dist * 2}
              </h1>
            </div>
          </div>
        </form>
      </article>
    )
}
export default CntDist;