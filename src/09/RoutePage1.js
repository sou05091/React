import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const fruits = useParams().item;
    const fruits2 = useParams().item2;

    return(
        <article>
            <header>
                <h1>RoutePage1</h1>
            </header>
            <h1>
            {fruits}
            {fruits2}
            </h1>
        </article>
    )
}
export default RoutePage1;