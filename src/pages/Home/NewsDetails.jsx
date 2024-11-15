import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";

const NewsDetails = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <div className="grid md:grid-cols-12 gap-6">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-4">News Here</h2>
                    <div>
                        {
                            data.map(news => <NewsCard
                                key={news._id}
                                news={news}
                            ></NewsCard>)
                        }
                    </div>
                </section>
                <div className="col-span-3"> <RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default NewsDetails;