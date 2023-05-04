import { useEffect } from "react";

const TaccidentD = ({ c1, sel1, setSel1 }) => {
  console.log(c1);
  const show = (item) => {
    console.log(item);
  };

  const btTag = c1.map((item) => (
    <li key={item}>
      <button onClick={() => setSel1(item)}>{item}</button>
    </li>
  ));

  // useEffect(() => {
  //   console.log("useEffect []" + sel1);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect [sel1]" +sel1);
  // }, [sel1]);

  // useEffect(() => {
  //   console.log("No useEffect" +sel1);
  // });

  return (
    <main className="container">
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <h2>사고유형_대분류</h2>
              </li>
            </ul>
            <ul>{btTag}</ul>
          </nav>
        </header>
      </article>
    </main>
  );
};
export default TaccidentD;
