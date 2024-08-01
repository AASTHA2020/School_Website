import React from 'react';

const Contact = () => {
  return (
    <div className="container py-16 px-4 lg:px-0">
      <h1 className="text-4xl font-bold mb-6 text-center text-dark">Contact Us</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Contact Information */}
        <div className="lg:w-1/3 space-y-6">
          <p className="text-lg font-semibold text-gray-800 mb-2 bg-gray-100 p-4 rounded-lg shadow-md h-32 flex items-center">
            <span className="font-bold text-yellow-600">Address:</span> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2 bg-gray-100 p-4 rounded-lg shadow-md h-16 flex items-center">
            <span className="font-bold text-yellow-600">Phone:</span> +1 (123) 456-7890
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4 bg-gray-100 p-4 rounded-lg shadow-md h-16 flex items-center">
            <span className="font-bold text-yellow-600">Email:</span> <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-semibold mb-6 text-center text-dark">Contact Form</h2>
          <form className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 py-3 px-6 rounded-lg text-white font-bold hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
