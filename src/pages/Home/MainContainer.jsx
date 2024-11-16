import { Outlet } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";

const MainContainer = () => {
    return (
        <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-3"><LeftSideNav></LeftSideNav></div>
            <div className="md:col-span-6">
                <Outlet></Outlet>
            </div>
            <div className="md:col-span-3"><RightSideNav></RightSideNav></div>
        </div>
    );
};

export default MainContainer;