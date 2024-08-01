import React from 'react';
import annualFunctionImg from '../../assets/annaul_function.jpg'; // Adjust the path if needed
import academicsImg from '../../assets/academics.jpg'; // Adjust the path if needed
import principalImg from '../../assets/principal.jpg'; // Adjust the path if needed

const About = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mb-8">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
      <p className="mb-8">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p className="mb-8">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4">Principal's Message</h2>
      <p className="mb-8">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      
      {/* Images Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Annual Function</h2>
        <img src={annualFunctionImg} alt="Annual Function" className="w-full h-auto mb-8 rounded shadow-lg" />
        
        <h2 className="text-2xl font-semibold mb-4">Academics</h2>
        <img src={academicsImg} alt="Academics" className="w-full h-auto mb-8 rounded shadow-lg" />
        
        <h2 className="text-2xl font-semibold mb-4">Principal</h2>
        <img src={principalImg} alt="Principal" className="w-full h-auto mb-8 rounded shadow-lg" />
      </div>
    </div>
  );
};

export default About;
