import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg" // Replace with your own image URL
        alt="404 Not Found"
        className="w-64 h-auto mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-700">Oops! Page Not Found</h1>
      <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
