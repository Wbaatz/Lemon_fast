import React from 'react'
import BookingForm from './BookingForm'

const Booking =({ onClose, onSubmissionSuccess }) => {
 return (
    <div className="fixed text-black inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close booking form"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Book Your Table</h2>
        <BookingForm onSubmissionSuccess={onSubmissionSuccess} />
      </div>
    </div>
  );
}

export default Booking