import React from 'react';

const Contact = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <h2 className="text-3xl font-semibold mt-8 mb-4">Contact Form</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded" rows="5"></textarea>
        <button type="submit" className="primary-btn mt-4">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
