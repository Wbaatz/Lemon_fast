import React from 'react'

const TestimonialCard = ({ rating, name, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105">
      <div className="text-yellow-500 text-2xl mb-2">{rating}</div>
      <img
        src="https://placehold.co/80x80/FFD700/000?text=User"
        alt={`${name}'s profile`}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/FFD700/000?text=User'; }}
      />
      <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-700 text-sm">{review}</p>
    </div>
  );
};

export default TestimonialCard