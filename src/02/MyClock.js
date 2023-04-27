
import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
import '../App.css';
const MyClock = () => {
    return(
        <div className="App">
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                <MyClockTime />
            </article>
        </main>
        </div>
    );
}
export default MyClock;