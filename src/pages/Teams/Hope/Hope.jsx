import React from 'react';
import './hope.css'; // Ensure you have styling for your component
import nodp from '../../../assets/images/nodp.jpg'; // Ensure you have the image in the same folder as the component
import virat from '../../../assets/images/virat.jpg'; // Ensure you have the image in the same folder as the component

// Sample team member data
const teamMembers = [
  {
    id: 1,
    name: 'SANDEEP',
    position: 'FOUNDER',
    image: nodp, // You can use real image URLs or local paths
    description: 'SANDEEP is the visionary leader who started the company.',
  },
  {
    id: 2,
    name: 'AAKANKSHA',
    position: 'CO-FOUNDER',
    image: nodp,
    description: '',
  },
  {
    id: 3,
    name: 'SAI KUMAR',
    position: 'PRESIDENT',
    image: nodp,
    description: '',
  },
  {
    id: 4,
    name: 'THANISHKA',
    position: 'VICE PRESIDENT',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 1,
    name: 'GAYATHRI',
    position: 'GENRAL SECRETARY',
    image: nodp,
    description: '',
  },
  {
    id: 2,
    name: 'VARSHITHA',
    position: 'HR',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 3,
    name: 'CHARISHMA',
    position: 'COORDINATOR',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 4,
    name: 'KUNAL RAJ',
    position: 'TREAURER',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 1,
    name: 'PAVAN TEJA',
    position: 'PR & DIGITAL HEAD',
    image: nodp, // You can use real image URLs or local paths
    description: '',
  },
  {
    id: 2,
    name: 'AKANKSHA',
    position: 'CONTENT HEAD',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 3,
    name: 'VAMSHIKA',
    position: 'DOCUMENTARY HEAD',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 4,
    name: 'KUNAL RAKARTHIK',
    position: 'CAMPAIGN HEAD',
    image: nodp,
    description: 'Core Team Member',
  },
  // Add more members as needed
];

const Hope = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team HOPE</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-position">{member.position}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hope;
