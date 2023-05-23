import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouteMain = () => {
    return(
        <BrowserRouter>
        <main className="container">
            <RouteNav />
            <Routes>
                <Route path='/' element={<RouteHome />}/>
                <Route path='/page1/:item/:item2' element={<RoutePage1 />}/>
                <Route path='/page2' element={<RoutePage2 />}/>
            </Routes>
        </main>
        </BrowserRouter>
    )
}
export default RouteMain;