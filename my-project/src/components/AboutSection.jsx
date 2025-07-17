import React from 'react'

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Little Lemon</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Chicago</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col space-y-4">
          <img
            src="https://placehold.co/200x200/FFD700/000?text=About+Image+1"
            alt="About Little Lemon 1"
            className="w-48 h-48 object-cover rounded-lg shadow-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/FFD700/000?text=About+Image+1'; }}
          />
          <img
            src="https://placehold.co/200x200/FFD700/000?text=About+Image+2"
            alt="About Little Lemon 2"
            className="w-48 h-48 object-cover rounded-lg shadow-xl self-end"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/FFD700/000?text=About+Image+2'; }}
          />
        </div>
      </section>
  )
}

export default AboutSection