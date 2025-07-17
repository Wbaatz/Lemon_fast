import React from 'react'
import MenuItem from './MenuItem'
import lemon from '../assets/lemon dessert.jpg'
import greekSalad from '../assets/greek salad.jpg'
const Menu = () => {
  return (
     <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">This week's specials!</h2>
          <button className="bg-yellow-400 text-green-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
            Online Menu
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Greek Salad */}
          <MenuItem
            imageSrc={greekSalad}
            title="Greek salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          {/* Bruschetta */}
          <MenuItem
            imageSrc="src/assets/bruchetta.svg"
            title="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          />
          {/* Lemon Dessert */}
          <MenuItem
            imageSrc={lemon}
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </div>
      </section>
  )
}

export default Menu