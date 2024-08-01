import React from 'react';
import annualFunctionImg from '../../assets/annaul_function.jpg';
import academicsImg from '../../assets/academics.jpg';
import principalImg from '../../assets/principal.jpg';
import coCurricularImg from '../../assets/co_curricular.jpg'; // Add this image
import sportsImg from '../../assets/sports.jpg'; // Add this image
import artsImg from '../../assets/arts.jpg'; // Add this image
import eventImg from '../../assets/event.jpg'; // Add this image

const About = () => {
  return (
    <div className="container py-16">
      {/* Annual Function Section */}
      <div className="flex flex-wrap items-center mb-16">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img src={annualFunctionImg} alt="Annual Function" className="w-full h-160 object-cover rounded shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="mb-6">Founded in 1985, Springdale Public School has a rich history of delivering exceptional education and nurturing holistic development in students. Over the years, we have grown from a modest institution into a beacon of learning, known for our commitment to academic excellence and student well-being.</p>
          <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">Our mission is to equip students with the necessary tools to navigate and succeed in an ever-evolving world. We are committed to:

Empowering Students: Providing them with a strong foundation of knowledge, skills, and values that will serve them throughout their lives.
Encouraging Personal Growth: Supporting students in their journey of self-discovery, helping them develop confidence, resilience, and a love for learning.
Preparing Future Leaders: Guiding students to become proactive and thoughtful leaders who are well-prepared to make positive contributions to society.</p>
          <h2 className="text-3xl font-semibold mt-8 mb-4">Principal's Bio</h2>
          <p><b>Dr. Bajaj Khanna</b>, our Principal, holds a Doctorate in Educational Leadership and has over 25 years of experience in school administration. With a passion for fostering educational excellence, He is highly regarded for his innovative approach and unwavering commitment to student success. His leadership ensures that Springdale Public School remains a trusted institution for quality education.</p>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-12 border-t-2 border-gray-200" />

      {/* Images Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src={academicsImg} alt="Academics" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Explore our dynamic curriculum that blends core subjects with exciting electives, sparking curiosity and academic brilliance.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={principalImg} alt="Principal" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Meet our Principal who inspires and leads our educational initiatives.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={coCurricularImg} alt="Co-Curricular Activities" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Our vibrant co-curricular activities that foster holistic development.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={sportsImg} alt="Sports" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Encouraging physical fitness and teamwork through various sports.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={artsImg} alt="Arts" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Celebrating creativity and artistic expression through diverse programs.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={eventImg} alt="Event" className="w-full h-60 object-cover rounded shadow-lg mb-2" />
          <p>Showcasing special events and activities that bring our community together.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
