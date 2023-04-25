import MyDivArticle from "./MyDivArticle";
// import './MyDiv.css'

const NewFile = ()=> {

    return(
        <main className="container">
            <h1 className="mah1">My Div</h1>
            <MyDivArticle />
            <MyDivArticle aname='NewFile1'/>
            <MyDivArticle aname='NewFile2'/>
        </main>

    );
}
export default NewFile;