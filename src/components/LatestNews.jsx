import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div>
            <div className="flex items-center gap-6 bg-base-200 p-2">
                <button className="btn bg-red-500 text-white px-6 rounded-none">Latest</button>
                <div className="flex">
                    <Marquee className="font-semibold">
                        <p>   I can be a React component, multiple React components, or just some text.</p>
                        <p>   I can be a React component, multiple React components, or just some text.</p>
                        <p>   I can be a React component, multiple React components, or just some text.</p>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;