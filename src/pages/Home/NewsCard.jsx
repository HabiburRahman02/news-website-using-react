/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const {
        details,
        image_url,
        title,
    } = news;

    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to='/' className="btn btn-primary">Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;