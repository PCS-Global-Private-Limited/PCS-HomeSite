import React, { useState } from 'react';
import './TeamShowcase.scss';

// Leader images
import Alok from './Alok.png';
import Manish from './Manish.png';
import Abhishek from './Abhishek.png';
import Dipanwita from './Dipanwita.png';

// MERN team
import MERN_Aparna from './MERN_Aparna.png';
import MERN_Atrika from './MERN_Atrika.png';
import MERN_Bharath from './MERN_Bharath.png';
import MERN_Medhun from './MERN_Medhun.png';
import MERN_Raj from './MERN_Raj.png';
import MERN_Rittima from './MERN_Rittima.png';
import MERN_Sonu from './MERN_Sonu.png';

// IOT team
import IOT_Snehashis from './IOT_Snehashis.png';

// Salesforce team
import SF_Madhumita from './SF_Madhumita.png';
import SF_Sampurna from './SF_Sampurna.png';

// Java team
import Java_Anita from './Java_Anita.png';
import Java_Nayan from './Java_Nayan.png';
import Java_Rahul from './Java_Rahul.png';
import Java_Shivani from './Java_Shivani.png';
import Java_Subhadip from './Java_Subhadip.png';

// Data Science team
import Data_Isha from './Data_Isha.png';
import Data_Prantik from './Data_Prantik.png';
import Data_Sagnik from './Data_Sagnik.png';
import Data_Sancharita from './Data_Sancharita.png';
import Data_Shreya from './Data_Shreya.png';
import Data_Subhasis from './Data_Subhasis.png';

// Designer
import Designer_Tapasi from './Designer_Tapasi.png';

// Management (using Dipanwita as example, you can add more)
import mgmt1 from './Dipanwita.png';

// Example leaders data
const leaders = [
  { name: 'Alok Halder', designation: 'CEO & MD', img: Alok },
  { name: 'Abhishek Ghosh', designation: 'Chief Technology Officer', img: Abhishek },
  { name: 'Manish Bhattacharjee', designation: 'Chief Operating Officer', img: Manish },
  { name: 'Dipanwita Mukherjee', designation: 'Project Manager', img: Dipanwita },
];

// Helper to get team members by prefix
const getTeamMembers = (members, prefix, designation = 'Member') =>
  members.map((m) => ({
    name: m.name,
    img: m.img,
    designation,
  }));

const teams = {
  'MERN Stack': [
    { name: 'Bharath Simha Reddy', img: MERN_Bharath, designation: ' Software Engineer' },
    // { name: 'Piyush Mishra', img: MERN_Piyush, designation: 'Trainee Software Engineer' },
    { name: 'Aparna', img: MERN_Aparna, designation: 'Trainee Software Engineer' },
    { name: 'Atrika', img: MERN_Atrika, designation: 'Trainee Software Engineer' },
    { name: 'Medhun', img: MERN_Medhun, designation: 'Software Engineer' },
    { name: 'Raj Jasiwal', img: MERN_Raj, designation: 'Trainee Software Engineer' },
    { name: 'Rittima Biswas', img: MERN_Rittima, designation: 'Trainee Software Engineer' },
    { name: 'Sonu Mondal', img: MERN_Sonu, designation: 'Trainee Software Engineer' },
  ],
  'Internet of Things': [
    { name: 'Abhishek Ghosh', designation: 'Sr. IoT Expert', img: Abhishek },
    { name: 'Snehashis Dolai', img: IOT_Snehashis, designation: 'IoT Engineer' },
  ],
  'Salesforce': [
    { name: 'Alok Halder', designation: 'Sr. Salesforce Trainer', img: Alok },
    { name: 'Madhumita', img: SF_Madhumita, designation: 'Salesforce Specialist' },
    { name: 'Sampurna', img: SF_Sampurna, designation: 'Salesforce Specialist' },
  ],
  'JAVA Developer': [
    { name: 'Anita Acharjya', img: Java_Anita, designation: 'Sr. Software Engineer' },
    { name: 'Nayan', img: Java_Nayan, designation: 'Java Trainer' },
    { name: 'Rahul Kumar Rajak', img: Java_Rahul, designation: 'Java Developer' },
    { name: 'Shivani', img: Java_Shivani, designation: 'Java Developer' },
    { name: 'Subhadip', img: Java_Subhadip, designation: 'Java Developer' },
  ],
  'Data Science and Python': [
    { name: 'Isha', img: Data_Isha, designation: 'Data Analyst' },
    { name: 'Prantik', img: Data_Prantik, designation: 'Data Science' },
    { name: 'Sagnik', img: Data_Sagnik, designation: 'Data Science' },
    { name: 'Sancharita', img: Data_Sancharita, designation: 'Data Science' },
    { name: 'Shreya', img: Data_Shreya, designation: 'Data Science' },
    { name: 'Subhasis', img: Data_Subhasis, designation: ' Python' },
  ],
  'Design': [
    { name: 'Shreya', img: Data_Shreya, designation: 'Canva & Figma Designer' },
    { name: 'Tapasi', img: Designer_Tapasi, designation: 'Canva & Photoshop Designer' },
  ],
  'Management': [
    { name: 'Isha', img: Data_Isha, designation: 'Human Resources Assistant' },
    { name: 'Dipanwita', img: mgmt1, designation: 'Back Office Handler' },
  ],
};

const TeamShowcase = () => {
  const [carouselIndex, setCarouselIndex] = useState({});

  // Handle carousel navigation
  const handleNext = (team) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [team]: Math.min((prev[team] || 0) + 1, teams[team].length - 3)
    }));
  };
  const handlePrev = (team) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [team]: Math.max((prev[team] || 0) - 1, 0)
    }));
  };

  return (
    <div className="team-showcase-container">
      <div className="team-showcase">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            LEADERSHIP IN ACTION
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our managers lead by example, driving innovation, fostering teamwork, and guidinng the company toward sustainable growth and excellence.
          </p>
        </div>

        {/* Leaders Section */}
        <div className="leaders-banner">
          {leaders.map((leader, idx) => (
            <div className="leader-card" key={idx}>
              <img src={leader.img} alt={leader.name} />
              <p className="leader-name">{leader.name}</p>
              <p className="leader-designation">{leader.designation}</p>
            </div>
          ))}
        </div>

        {/* Driven by Passion Section */}
        <div className="driven-section">
          <h2>Driven by Passion</h2>
          <p className="driven-desc">
            Our teams are led by visionaries and powered by passionate professionals who drive innovation every day.
          </p>
        </div>

        {/* Teams Section */}
        {Object.entries(teams).map(([teamName, members]) => {
          const idx = carouselIndex[teamName] || 0;
          const visibleMembers = members.slice(idx, idx + 3);

          return (
            <div className="team-section" key={teamName}>
              <div className="team-header">
                <h3>{teamName}</h3>
                {members.length > 3 && (
                  <div className="carousel-arrows">
                    {idx > 0 && (
                      <button className="arrow-btn" onClick={() => handlePrev(teamName)}>&lt;</button>
                    )}
                    {idx < members.length - 3 && (
                      <button className="arrow-btn" onClick={() => handleNext(teamName)}>
                        {idx === 0 ? 'View All →' : '→'}
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="team-members">
                {visibleMembers.map((member, index) => (
                  <div className="member-card" key={index}>
                    <img src={member.img} alt={member.name} />
                    <p className="member-name">{member.name}</p>
                    <p className="member-designation">{member.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamShowcase;
