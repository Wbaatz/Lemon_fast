import React from 'react'

const MenuItem = ({ imageSrc, title, price, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/FFD700/000?text=${title.replace(/\s/g, '+')}`; }}
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-yellow-600 font-semibold">{price}</span>
        </div>
        <p className="text-gray-700 text-sm mb-6">{description}</p>
        <button className="flex items-center text-green-700 font-bold hover:text-green-900 transition duration-300">
          Order a delivery
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default MenuItem