import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Assistir from "./pages/Assistir"
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/assistir/:id" element={ <Assistir /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;