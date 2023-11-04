import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Assistir from "./pages/Assistir"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/assistir" element={ <Assistir /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;