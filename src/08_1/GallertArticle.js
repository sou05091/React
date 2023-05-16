import styles from "./Gallery.module.css";

const GalleryArticle = ({ item }) => {
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) => <div className={styles.keyword}>{i}</div>)
  return (
    <article>
      <header>
        <h2>{item.galTitle}</h2>
        <span>{item.galPhotographyLocation}</span>
      </header>
      <div>
        <img src={item.galWebImageUrl}/>
      </div>
      {tags}
    </article>
  );
};
export default GalleryArticle;
