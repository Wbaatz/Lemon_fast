import React from 'react'
import { useState } from 'react';

const BookingForm = ({ onSubmissionSuccess }) => {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Default value
  const [guests, setGuests] = useState(1); // Default value
  const [occasion, setOccasion] = useState('Birthday'); // Default value

  // Stateful array for available times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({ date, time, guests, occasion });
    // Call the parent's submission success handler
    if (onSubmissionSuccess) {
      onSubmissionSuccess('Submission successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      {/* Date Input */}
      <div className="flex flex-col">
        <label htmlFor="res-date" className="text-gray-700 font-semibold mb-1">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      {/* Time Select */}
      <div className="flex flex-col">
        <label htmlFor="res-time" className="text-gray-700 font-semibold mb-1">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Number of Guests Input */}
      <div className="flex flex-col">
        <label htmlFor="guests" className="text-gray-700 font-semibold mb-1">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      {/* Occasion Select */}
      <div className="flex flex-col">
        <label htmlFor="occasion" className="text-gray-700 font-semibold mb-1">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      {/* Submit Button */}
      <input
        type="submit"
        value="Make Your reservation"
        className="bg-yellow-400 text-green-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 cursor-pointer mt-4"
      />
    </form>
  );
};
export default BookingForm