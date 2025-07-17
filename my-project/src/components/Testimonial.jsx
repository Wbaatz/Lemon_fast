import React from 'react'
import TestimonialCard from './TestimonialCard'
const Testimonial = () => {
    return (
        <section className="bg-gray-200 py-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TestimonialCard rating="★★★★★" name="John Doe" review="Review text" />
                <TestimonialCard rating="★★★★☆" name="Jane Smith" review="Review text" />
                <TestimonialCard rating="★★★★★" name="Peter Jones" review="Review text" />
                <TestimonialCard rating="★★★★☆" name="Alice Brown" review="Review text" />
            </div>
        </section>
    )
}

export default Testimonial