import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h6 className="font-semibold text-lg mb-4">All Category</h6>
            <div className="space-y-2">
                {
                    categories.map(category =>
                        <NavLink
                            to={`/category/${category.category_id}`}
                            className={({ isActive }) => `w-full bg-gray-100 hover:bg-gray-200 mb-2 text-lg font-semibold flex py-4 rounded-lg px-4`}
                            key={category.category_id}>
                            <button
                            >{category.category_name}
                            </button>
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;