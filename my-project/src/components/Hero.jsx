import React from 'react'
import restaurantFood from '../assets/restauranfood.jpg'
import { useState } from 'react'
import Booking from './Booking';

const Hero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const handleBookingSubmission = (message) => {
    setSubmissionMessage(message); 
    setShowBookingModal(false); 
    setTimeout(() => {
      setSubmissionMessage('');
    }, 3000);
  };
  return (
   <header className="bg-gray-800 text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 rounded-lg m-4">
      {submissionMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-50 animate-fade-in-down">
          {submissionMessage}
        </div>
      )}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">Little Lemon</h1>
          <h2 className="text-4xl font-bold mb-4">Chicago</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button   onClick={() => setShowBookingModal(true)} className="bg-yellow-400 text-green-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
            Reserve a Table
          </button>
        </div>
        <div className="flex-shrink-0">
          <img src={restaurantFood}
            alt="Delicious food platter"
            className="w-full md:w-80 h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
        {showBookingModal && (
        <Booking
          onClose={() => setShowBookingModal(false)}
          onSubmissionSuccess={handleBookingSubmission}
        />
      )}
      </header>
  )
}

export default Hero