import { useLoaderData } from "react-router-dom";
import News from "../../components/News";

const MainContent = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <h6 className="font-semibold text-lg mb-4">All Content Here{data?.length}</h6>
            <div>
                {
                    data?.map(news => <News
                        news={news}
                        key={news._id}></News>)
                }
            </div>
        </div>
    );
};

export default MainContent;