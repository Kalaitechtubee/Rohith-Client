import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaHamburger, FaCookieBite, FaStar, FaTag } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/Image2.jpg';
import image3 from '../assets/images/Image3.jpg';
import image4 from '../assets/images/Image4.jpg';
import image5 from '../assets/images/Image5.jpg';
import image6 from '../assets/images/Image6.jpg';
import image7 from '../assets/images/Image7.jpg';
import image8 from '../assets/images/Image8.jpg';
import image9 from '../assets/images/Image9.jpg';
import image10 from '../assets/images/Image10.jpg';
import image11 from '../assets/images/Image11.jpg';
import image12 from '../assets/images/Image12.jpg';
import image13 from '../assets/images/Image13.jpg';
import image14 from '../assets/images/Image14.jpg';
import image15 from '../assets/images/Image15.jpg';
import image16 from '../assets/images/Image16.jpg';
import image17 from '../assets/images/Image17.jpg';
import image18 from '../assets/images/Image18.jpg';
import image19 from '../assets/images/Image19.jpg';
import image20 from '../assets/images/Image20.jpg';

const Home = () => {
    const products = [
        // Cakes
        { id: 1, category: 'cakes', name: 'Black Forest Cake', description: 'Classic black forest cake with cherries.', price: 750, image: image1 },
        { id: 2, category: 'cakes', name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: 850, image: image2 },
        { id: 3, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Dark chocolate truffle layered cake.', price: 950, image: image3 },
        { id: 4, category: 'cakes', name: 'Pineapple Cake', description: 'Light and fluffy pineapple-flavored cake.', price: 700, image: image4 },
        { id: 5, category: 'cakes', name: 'Butterscotch Cake', description: 'Creamy butterscotch cake with caramel drizzle.', price: 800, image: image5 },

        // Donuts
        { id: 6, category: 'donuts', name: 'Glazed Donut', description: 'Classic glazed donut.', price: 80, image: image6 },
        { id: 7, category: 'donuts', name: 'Chocolate Donut', description: 'Delicious chocolate-coated donut.', price: 100, image: image7 },
        { id: 8, category: 'donuts', name: 'Strawberry Donut', description: 'Donut with strawberry glaze.', price: 90, image: image8 },
        { id: 9, category: 'donuts', name: 'Blueberry Donut', description: 'Donut with blueberry glaze.', price: 95, image: image9 },
        { id: 10, category: 'donuts', name: 'Caramel Donut', description: 'Donut topped with rich caramel glaze.', price: 105, image: image10 },

        // Cookies
        { id: 11, category: 'cookies', name: 'Chocolate Chip Cookie', description: 'Crunchy cookie with chocolate chips.', price: 50, image: image11 },
        { id: 12, category: 'cookies', name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal and raisin cookie.', price: 60, image: image12 },
        { id: 13, category: 'cookies', name: 'Peanut Butter Cookie', description: 'Rich peanut butter-flavored cookie.', price: 70, image: image13 },
        { id: 14, category: 'cookies', name: 'Almond Biscotti', description: 'Italian almond-flavored biscotti.', price: 90, image: image14 },
        { id: 15, category: 'cookies', name: 'Sugar Cookie', description: 'Soft sugar cookies with sprinkles.', price: 65, image: image15 },

        // Special Items
        { id: 16, category: 'special', name: 'Macarons', description: 'French macarons with assorted flavors.', price: 500, image: image16 },
        { id: 17, category: 'special', name: 'Eclairs', description: 'French pastry filled with custard and topped with chocolate.', price: 300, image: image17 },
        { id: 18, category: 'special', name: 'Cheesecake', description: 'New York-style creamy cheesecake.', price: 900, image: image18 },
        { id: 19, category: 'special', name: 'Brownie', description: 'Chocolate brownie with walnuts.', price: 150, image: image19 },
        { id: 20, category: 'special', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 750, image: image20 },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    const handleCategoryFilter = (category) => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
        setActiveCategory(category);
    };

    const categories = [
        { name: 'all', label: 'All', icon: <FaStar />, bgColor: 'bg-gray-100' },
        { name: 'cakes', label: 'Cakes', icon: <FaBirthdayCake />, bgColor: 'bg-yellow-100' },
        { name: 'donuts', label: 'Donuts', icon: <FaHamburger />, bgColor: 'bg-pink-100' },
        { name: 'cookies', label: 'Cookies', icon: <FaCookieBite />, bgColor: 'bg-teal-100' },
        { name: 'special', label: 'Special', icon: <FaStar />, bgColor: 'bg-purple-100' },
    ];

    // Apply 10% discount to all items
    const discountedProducts = filteredProducts.map(product => ({
        ...product,
        discountedPrice: product.price * 0.9, // 10% discount
    }));

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <div className="py-12 text-center text-white shadow-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 sm:py-24">
                <h1 className="mt-10 text-3xl font-extrabold tracking-wide sm:text-5xl">Welcome to DD Bakery</h1>
                <p className="mt-4 text-base sm:text-lg">Delicious treats baked with love</p>
            </div>

            {/* Advertisement Section */}
            <div className="p-4 text-center bg-yellow-100 sm:p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="flex items-center justify-center text-xl font-bold text-yellow-800 sm:text-3xl">
                         <FaTag className="mx-2" /> FLAT 10% OFF ON ALL ITEMS! 
                    </h2>
                    <p className="mt-2 text-sm text-yellow-700 sm:text-lg sm:mt-4">Hurry up! Offer valid for a limited time only. 🕒</p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="container p-4 mx-auto sm:p-8">
                <div className="flex flex-wrap justify-center gap-2 my-4 sm:gap-4 sm:my-6">
                    {categories.map(category => (
                        <button
                            key={category.name}
                            onClick={() => handleCategoryFilter(category.name)}
                            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md transition-all duration-300 ${activeCategory === category.name ? `${category.bgColor} text-black scale-105` : 'bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105'}`}
                        >
                            {category.icon}
                            <span className="text-xs font-semibold sm:text-sm">{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
                    {discountedProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

          

{/* // Contact Section */}
<div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 sm:py-16">
    <div className="container px-4 mx-auto sm:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-800 sm:text-4xl">
            Get in Touch
        </h2>
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* Location Card */}
            <div className="relative group">
                <div className="absolute transition duration-300 opacity-25 -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur group-hover:opacity-75"></div>
                <div className="relative p-6 transition duration-300 transform bg-white shadow-lg rounded-xl group-hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="ml-4 text-xl font-semibold text-gray-800">Location</h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">334,Mettu Street,</p>
                    <p className="leading-relaxed text-gray-600">Kodungalur,Vandavasi,Tiruvannamalai</p>
                </div>
            </div>
            {/* 334,mettu street, kodungalur,vandavasi,tv malai */}
            {/* Contact Info Card */}
            <div className="relative group">
                <div className="absolute transition duration-300 opacity-25 -inset-1 bg-gradient-to-r from-blue-400 to-teal-500 rounded-xl blur group-hover:opacity-75"></div>
                <div className="relative p-6 transition duration-300 transform bg-white shadow-lg rounded-xl group-hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="ml-4 text-xl font-semibold text-gray-800">Contact Info</h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">Phone:7418194020</p>
                    <p className="leading-relaxed text-gray-600">Email:avinashamutha8@gmail.com</p>
                </div>
            </div>

            {/* Business Hours Card */}
            <div className="relative group">
                <div className="absolute transition duration-300 opacity-25 -inset-1 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-xl blur group-hover:opacity-75"></div>
                <div className="relative p-6 transition duration-300 transform bg-white shadow-lg rounded-xl group-hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="ml-4 text-xl font-semibold text-gray-800">Business Hours</h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="leading-relaxed text-gray-600">Sat: 9:00 AM - 9:00 PM</p>
                    <p className="leading-relaxed text-gray-600">Sun: 10:00 AM - 6:00 PM</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/*  */}
{/* // ... (rest of the code remains the same) */}

            <Footer />
        </div>
    );
};

export default Home;
