import { BookmarkIcon, PhoneIcon, PrinterIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <div>
                        <h3 className="text-2xl font-bold mb-4">Yoga School</h3>
                        <p className="text-gray-400 mb-2">
                            <BookmarkIcon className="h-5 w-5 inline-block mr-2" />
                            123 Street, City, Country
                        </p>
                        <p className="text-gray-400 mb-2">

                            <PhoneIcon className="h-5 w-5 inline-block mr-2" />
                            +1 234 567 890
                        </p>
                        <p className="text-gray-400 mb-2">
                            <PrinterIcon className="h-5 w-5 inline-block mr-2" />
                            info@yogaschool.com
                        </p>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Classes
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Schedule
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex flex-col">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                Youtube
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                Instagram
                            </a>
                        </div>
                    </div>


                    {/* add a subscribe form */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Subscribe</h4>
                        <form className="flex flex-col">
                            <input

                                type="email"
                                placeholder="Email"
                                className="bg-gray-900 text-white rounded mb-2 py-1 px-2"
                            />
                            <button
                                type="submit"
                                className="bg-gray-500 hover:bg-gray-900 rounded text-white py-1 px-2"
                            >
                                Subscribe
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
