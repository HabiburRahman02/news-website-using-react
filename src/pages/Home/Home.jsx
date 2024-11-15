import LatestNews from "../../components/LatestNews";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import MainContainer from "./MainContainer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <MainContainer></MainContainer>
        </div>
    );
};

export default Home;