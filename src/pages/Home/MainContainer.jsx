import CategoryNews from "./CategoryNews";
import LeftSideNav from "./LeftSideNav";
import MainContent from "./MainContent";
import RightSideNav from "./RightSideNav";

const MainContainer = () => {
    return (
        <div className="grid md:grid-cols-12 gap-6">
            <div className="col-span-3"><LeftSideNav></LeftSideNav></div>
            <div className="col-span-6">
                <MainContent>
                    <CategoryNews></CategoryNews>
                </MainContent>
            </div>
            <div className="col-span-3"><RightSideNav></RightSideNav></div>
        </div>
    );
};

export default MainContainer;