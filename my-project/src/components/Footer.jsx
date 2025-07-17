import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="https://placehold.co/100x100/FFD700/000?text=LL" alt="Little Lemon Footer Logo" className="h-24 rounded-lg" />
          </div>

          {/* Doormat Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Doormat Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
              <li><a href="#" className="hover:text-yellow-400">Reservations</a></li>
              <li><a href="#" className="hover:text-yellow-400">Order Online</a></li>
              <li><a href="#" className="hover:text-yellow-400">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Social Media Links</h4>
            <ul className="space-y-2">
              <li>Address</li> {/* Assuming this is a placeholder for a social media link, based on the image */}
              <li>Phone number</li> {/* Assuming this is a placeholder for a social media link, based on the image */}
              <li>Email</li> {/* Assuming this is a placeholder for a social media link, based on the image */}
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer