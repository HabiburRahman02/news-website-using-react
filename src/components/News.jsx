/* eslint-disable react/prop-types */
import { FaShareAlt, FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FaRegBookmark } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const [showFullDes, setShowFullDes] = useState(false);
    const {
        author,
        details,
        image_url,
        rating,
        title,
        total_view,
        _id
    } = news;


    return (
        <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
            {/* Author and Share */}
            <div className="flex items-center p-4 bg-gray-100">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h2 className="text-lg font-semibold">{author.name}</h2>
                    <p className="text-xs text-gray-500">{author.published_date}</p>
                </div>
                <button className="ml-auto flex gap-2 text-gray-600 hover:text-gray-800">
                    <FaRegBookmark size={20}></FaRegBookmark>
                    <FaShareAlt size={20} />
                </button>
            </div>

            {/* Title and Image */}
            <div className="px-4">
                <h1 className="text-lg font-bold mb-2">{title}</h1>
                <img
                    src={image_url}
                    alt="News"
                    className="rounded-lg w-full object-cover mb-2"
                />
            </div>

            {/* Description */}
            <div className="px-4">
                <p className="text-sm text-gray-600 mb-3">
                    {/* {details.slice(0, 100)}... */}
                    {showFullDes ? details : details.slice(0, 200)}
                </p>
                <button
                    onClick={() => setShowFullDes(!showFullDes)}
                    className="text-pink-500 font-medium underline">
                    {showFullDes ? 'Show Less' : 'Read More'}
                </button>
                <Link to={`/newsDetails/${_id}`}>  <button className='ml-4 text-green-500 mb-5'>News Details</button></Link>
            </div>

            {/* Footer with Rating and Views */}
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center text-yellow-500">
                    <AiFillStar size={18} />
                    <span className="ml-1 font-bold text-gray-800">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500 text-lg">
                    <FaEye className="mr-1" />
                    <span className="text-md">{total_view}</span>
                </div>
            </div>
        </div>
    );
};
export default News