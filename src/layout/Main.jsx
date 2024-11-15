import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;