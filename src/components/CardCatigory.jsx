import React from 'react'
import { Link } from 'react-router-dom';
    export default function CardCatigory({ title = "Category Title", image = "https://placehold.co/200x200" , url  }) {
    return (
        <Link to={`${url}`} className="p-4 flex flex-col rounded-lg hover:shadow-md transition-shadow cursor-pointer w-[200px] min-w-[200px] max-w-[85vw] sm:max-w-none bg-white border border-gray-200 hover:border-orange-300 hover:scale-105 transition-transform">
            <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2 text-center truncate w-full max-w-[180px]">{title}</h3>
        </Link>
  )
}
