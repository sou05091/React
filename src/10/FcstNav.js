import { Link } from "react-router-dom";

const FcstNav = ()=> {
    return(
        <main className="container">
        <nav>
            <ul>
                <li>기상청 단기 예보</li>
            </ul>
            <ul>
                <li><Link to='/' role="button">단기 예보 Home</Link></li>
            </ul>
        </nav>
        </main>
    )
}
export default FcstNav;