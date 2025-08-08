import React, { useState } from 'react';
import './TeamShowcase.scss';

const TeamShowcase = () => {
  const [visibleTeams, setVisibleTeams] = useState({});

  const toggleTeam = (team) => {
    setVisibleTeams((prev) => ({
      ...prev,
      [team]: !prev[team],
    }));
  };

  const teams = {
  
    'Internet of Things': [
      { name: 'Alok ', img: '/images/AlokHalder.png', title: 'CEO & MD' },
      { name: 'Abhishek Ghosh', img: '/images/AbhishekhGhose_IoT.png' , title: 'Chief Technology Officer (CTO)' },
      { name: 'Manish', img: '/images/Manish.png', title: 'Chief Operating Officer (COO)' },
     
    ],
    'MERN Stack': [
      { name: 'Bharath Reddy', img: '/images/BHARATH_SIMHA_REDDY_Mern.png', title: 'Software Engineer' },
      { name: 'Aparna', img: '/images/Aparna_Mern.png' },
      { name: 'Sonu Mondal', img: '/images/SonuMondal_Mern.png' },
      { name: 'Atrika Show', img: '/images/Atrika_Mern.png' },
      { name: 'Medhun', img: '/images/Medhun_mern.png' },
      { name: 'Raj Jaiswal', img: '/images/RajJaiswal_mern.png' },
      { name: 'Rittima', img: '/images/Rittima_mern.png' }
    ],
    'JAVA Full-Stack': [
      { name: 'Anita Acharjya', img: '/images/Ankita_Java.png', title: ' Sr.Java Developer' },
      { name: 'Nayan Kumar Pramanik', img: '/images/Nayan_Kumar_Pramanik_Java.png' },
      { name: 'Rahul Kumar Rajak', img: '/images/Rahul_Kumar_Rajak_Java.png' },
      { name: 'Shivani Gupta', img: '/images/Shivani_gupta_Java.png' }, 
      { name: 'Subhadip Pradhan', img: '/images/SubhadipPradhan_Java.png' }
    ],
    'Data Science & Python': [ 
      { name: 'Isha', img: '/images/Isha_Ds.png' },
      { name: 'Dipanwita', img: '/images/Dipanwita_Management.png' },
      { name: 'Prantik', img: '/images/Prantik_Ds.png' },
      { name: 'Sagnik Saha', img: '/images/Sagnik_Saha_Ds.png' },
      { name: 'Sancharita Dutta', img: '/images/Sancharita_Dutta_Ds.png' },
      { name: 'Subhasis Chattopadhyay', img: '/images/SubhasisChattopadhyay_Ds.png' },
    ],
    'Management': [
      { name: 'Kushbu Hasani', img: '/images/oscar.jpg' },
      { name: 'Jyothi', img: '/images/paul.jpg' },
    ],
    "Design":[
      { name: 'Shivam', img: '/images/TapasiDhar_Desgin.png' },
      { name: 'Shreya', img: '/images/TapasiDhar_Desgin.png' },
      {name : 'Tapasi Dhar', img : '/images/TapasiDhar_Desgin.png'}
    ]
  };

  return (
    <div className="team-showcase-container">
    <div className="team-showcase">
     
      <div className="top-banner">
        {Object.values(teams)[0].slice(0, 3).map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
             <p className='member-title'>{member.title}</p>
          </div>
        ))}
      </div>

    
      <div className="driven-section">
        <h2>Driven by Passion</h2>
      </div>

    
      {Object.entries(teams).map(([teamName, members]) => (
        <div className="team-section" key={teamName}>
          <div className="team-header">
            <h3>{teamName}</h3>
            {members.length > 3 && (
              <button onClick={() => toggleTeam(teamName)}>
                {visibleTeams[teamName] ? 'Hide' : 'View All'}
              </button>
            )}
          </div>
          <div className="team-members">
            {(visibleTeams[teamName] ? members : members.slice(0, 4)).map((member, index) => (
              <div className="member-card" key={index}>
                <img src={member.img} alt={member.name} />
                <p>{member.name}</p>
                <p className='member-title'>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamShowcase;
