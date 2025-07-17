# Little Lemon Restaurant - React + Vite

A modern, responsive web application for a Mediterranean restaurant, built with React, Vite, and Tailwind CSS.
![Homepage Screenshot](./Images/img1.png)
![Homepage Screenshot](./Images/img2.png)
![Homepage Screenshot](./Images/img3.png)
![Homepage Screenshot](./Images/img4.png)
![Homepage Screenshot](./Images/img5.png)
![Homepage Screenshot](./Images/img6.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [Styling](#styling)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Assets](#assets)
- [License](#license)

---

## Overview
This project is a single-page application (SPA) for the fictional "Little Lemon" restaurant. It demonstrates modern React development practices, including component-based architecture, routing, state management, and responsive design using Tailwind CSS. The app is bootstrapped with Vite for fast development and build times.

## Features
- **Home Page**: Showcases the restaurant, weekly specials, testimonials, and an about section.
- **About Page**: Brief information about the restaurant.
- **Navigation Bar**: Responsive navigation with links to Home, About, Menu, Reservations, Order Online, and Login.
- **Booking Modal**: Users can reserve a table via a modal form with validation.
- **Menu Section**: Highlights weekly specials with images and descriptions.
- **Testimonials**: Displays customer reviews.
- **Footer**: Contains navigation, contact, and placeholder social media links.
- **Responsive Design**: Works well on desktop and mobile devices.

## Project Structure
```
my-project/
├── public/                # Static assets (if any)
├── src/
│   ├── assets/            # Images and SVGs (e.g., logo, food photos)
│   ├── components/        # Reusable UI components (Navbar, Hero, Menu, Booking, etc.)
│   ├── pages/             # Page components (Home, About)
│   ├── index.css          # Tailwind CSS import
│   ├── App.jsx            # Main app layout and routing outlet
│   └── main.jsx           # App entry point, router setup
├── index.html             # HTML entry point
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration with React and Tailwind plugins
├── README.md              # Project documentation
└── ...
```

## Pages & Components
- **Home Page (`src/pages/Home.jsx`)**: Composes the main landing page using Hero, Menu, Testimonial, AboutSection, and Footer components.
- **About Page (`src/pages/About.jsx`)**: Simple page with a heading about the restaurant.
- **Navbar (`src/components/Navbar.jsx`)**: Responsive navigation bar with links and a mobile menu.
- **Hero (`src/components/Hero.jsx`)**: Prominent section with restaurant intro, image, and a button to open the booking modal.
- **Booking & BookingForm (`src/components/Booking.jsx`, `BookingForm.jsx`)**: Modal form for table reservations with validation and feedback.
- **Menu & MenuItem (`src/components/Menu.jsx`, `MenuItem.jsx`)**: Displays weekly specials with images, prices, and descriptions.
- **Testimonial & TestimonialCard (`src/components/Testimonial.jsx`, `TestimonialCard.jsx`)**: Customer reviews in a grid layout.
- **AboutSection (`src/components/AboutSection.jsx`)**: Additional info and images about the restaurant.
- **Footer (`src/components/Footer.jsx`)**: Contains navigation, contact, and social media placeholders.

## Styling
- **Tailwind CSS** is used for all styling. The configuration is minimal, with Tailwind imported in `src/index.css`.
- **Responsive Design**: All components are styled to be mobile-friendly and adapt to different screen sizes.

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-project
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Available Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint on the project

## Assets
- **Logo**: `src/assets/Logo.svg`
- **Food Images**: `src/assets/restauranfood.jpg`, `greek salad.jpg`, `lemon dessert.jpg`, `bruchetta.svg`
- **About Images**: `src/assets/Mario and Adrian A.jpg`, `Mario and Adrian B.jpg`

> _Note: Some images are placeholders or large files and may not be included in the repository._

## License
This project is for educational/demo purposes. Please replace or update this section with your own license if you intend to use it in production.
