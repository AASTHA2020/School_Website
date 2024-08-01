import React from 'react';
import johnDoeImg from '../../assets/john_doe.jpg'; // Adjust the path based on your folder structure
import janeSmithImg from '../../assets/jane_smith.jpg'; // Adjust the path based on your folder structure
import emilyJohnsonImg from '../../assets/emily_johnson.jpg'; // Adjust the path based on your folder structure
import michaelBrownImg from '../../assets/michael_brown.jpg'; // Adjust the path based on your folder structure
import sophiaDavisImg from '../../assets/sophia_davis.jpg'; // Adjust the path based on your folder structure
import davidWilsonImg from '../../assets/david_wilson.jpg'; // Adjust the path based on your folder structure

const teamMembers = [
  { name: "John Doe", title: "Principal", img: johnDoeImg, description: "M.Ed, 20 years of experience in educational administration." },
  { name: "Jane Smith", title: "Vice Principal", img: janeSmithImg, description: "M.Sc. in Physics, 15 years of teaching experience." },
  { name: "Emily Johnson", title: "English Teacher", img: emilyJohnsonImg, description: "M.A. in English, 10 years of teaching experience." },
  { name: "Michael Brown", title: "Mathematics Teacher", img: michaelBrownImg, description: "M.Sc. in Mathematics, 8 years of teaching experience." },
  { name: "Sophia Davis", title: "Science Teacher", img: sophiaDavisImg, description: "M.Sc. in Chemistry, 12 years of teaching experience." },
  { name: "David Wilson", title: "Computer Science Teacher", img: davidWilsonImg, description: "B.Tech in Computer Science, 5 years of teaching experience." },
];

const OurTeam = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="mb-6">Meet our dedicated team of educators and administrators:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-lg font-medium">{member.title}</p>
            <p className="mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
