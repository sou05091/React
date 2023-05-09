import { useState, useRef, useEffect } from "react";
const MyRef = () => {
const txtref = useRef();

  useEffect(() => {
    txtref.current.focus();
  }, []);

  const itemArr = useRef([]);
  //useRef 훅을 사용하여 itemArr이라는 ref 객체를 생성하고 있습니다. 이 ref 객체는 배열 형태로 항목을 저장할 예정
  const [itemTag, setItemTag] = useState();
  //useState 훅을 사용하여 itemTag라는 상태(state) 변수와 setItemTag라는 상태 업데이트 함수를 생성하고 있습니다. itemTag 변수는 나중에 itemArr 배열의 내용을 렌더링할 때 사용
  
  const addItem = (e) => {
    e.preventDefault();
    // 버튼 클릭시 새로고침 방지를 위한 함수
    itemArr.current = [...itemArr.current, txtref.current.value];
    //... 문법은 배열 스프레드 연산자로, 기존 배열의 요소들을 그대로 유지하면서 새로운 값을 추가한 새로운 배열을 만듭니다.
    itemArr.current = new Set(itemArr.current);
    //Set은 중복된 값을 허용하지 않는 자료구조이기 때문에, itemArr.current 배열을 Set으로 변환한 다음 중복된 값을 제거하고, 다시 itemArr.current에 할당하는 코드
    itemArr.current = [...itemArr.current];
    //중복 제거된 itemArr.current 배열을 다시 배열 형태로 변환하여 할당하는 코드
    let tempTag = itemArr.current.map((item, idx) => <div key={'sp'+idx}>{item}</div>);
    setItemTag(tempTag);
    // setItemTag는 React의 useState 훅을 사용하여 생성된 상태 변수를 업데이트하는 함수
    console.log("add Item = ", itemArr.current);
  };
  const resetItem = () => {
    console.log("reset Item");
  };

  return (
    <main className="container">
      <article>
        <header>
          <form>
            <div className="grid">
              <div>
                <label htmlFor="txt1">과일/채소 입력</label>
                <input
                  ref={txtref}
                  type="text"
                  id="txt1"
                  name="txt1"
                  required
                ></input>
              </div>
              <div>
                <button key={'sp'} onClick={(e) => addItem(e)}>등록</button>
                <button onClick={(e) => resetItem(e)}>취소</button>
              </div>
            </div>
          </form>
        </header>
        <div className="grid"></div>
            {itemTag}
      </article>
    </main>
  );
};

export default MyRef;
