/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from "react";
import styles from "./Gallery.module.css";
import GalleryView from "./GalleryView.js";
import { RingLoader } from 'react-spinners';
const Gallery = () => {
  //로딩중 화면 만들기
  const [isLoading, setIsLoading] = useState();
  //State 변수 사용
  const [items, setItems] = useState();
  //input 재어
  const txt1 = useRef();
  //컴포넌트가 처음 랜더링 되었을때 한번 실행
  useEffect(() => {
    //input 에 fucus 맞추기
    txt1.current.focus();
  }, []);

  //컴포넌트 해당하는 state변수가 변경이 될때마다 실행
  useEffect(() => {
    //input 에 fucus 맞추기
    console.log("useEffect", items);
  }, [items]);

  //사용자 정의 함수
  const getData = (kw, num, no) => {
    let apikey = `vhYH%2BRoHzI4MivTFpcrv5aVwqVE1np0oVvWL4U98zWxlKSz4KyV4KLNz6EkuqKulPNLTXBQ%2BWKRUvMSJKlGi3g%3D%3D`;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = url + `serviceKey=${apikey}&`;
    url = url + `numOfRows=${num}&`;
    url = url + `pageNo=${no}&`;
    url = url + `MobileOS=ETC&`;
    url = url + `MobileApp=AppTest&`;
    url = url + `arrange=A&`;
    url = url + `keyword=${kw}&`;
    url = url + `_type=json`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));
    //let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json`
  };
  const show = (e) => {
    e.preventDefault();
    //공백체크
    if (txt1.current.value === "") return;
    let kw = encodeURI(txt1.current.value);
    getData(kw, 10, 1);
    console.log(txt1.current.value, kw);
  };
  const showClear = (e) => {};
  return (
    <main className="container">
      <form>
        <article>
          <header>
            <h1 className={styles.title}>한국관광공사_관광사진 정보</h1>
          </header>
          <div className="grid">
            <div>
              <input
                ref={txt1}
                type="text"
                id="txt1"
                name="txt1"
                placeholder="키워드를 입력하세요."
                required
              />
            </div>
              <div className={styles.btDiv}>
                <button onClick={(e) => show(e)}>확인</button>
                <button onClick={(e) => showClear(e)}>취소</button>
              </div>
          </div>
        </article>
        {items && <GalleryView content={items} />}
      </form>
    </main>
  );
};

export default Gallery;
