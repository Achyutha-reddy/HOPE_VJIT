import React from 'react';
import './womenwings.css'; // Ensure you have styling for your component
import nodp from '../../../assets/images/nodp.jpg'; // Ensure you have the image available in the same folder or update the path

// Sample team member data
const teamMembers = [
  {
    id: 1,
    name: 'SAHITHYA',
    position: 'WOMENS HOPE PRESIDENT',
    image: nodp, // You can use real image URLs or local paths
    description: 'Core Team Member',
  },
  {
    id: 2,
    name: 'RITHUJA',
    position: 'WOMENS HOPE VICE PRESIDENT',
    image: nodp,
    description: 'Core Team Member',
  },
  {
    id: 3,
    name: 'MANVITHA',
    position: 'WOMENS HOPE COORDINATOR',
    image: nodp,
    description: 'Core Team Member',
  },
  // {
  //   id: 4,
  //   name: 'Sara Johnson',
  //   position: 'Product Manager',
  //   image: 'path_to_image_4.jpg',
  //   description: 'Sara ensures that our products meet user needs and expectations.',
  // },
  // {
  //   id: 1,
  //   name: 'John Doe',
  //   position: 'CEO',
  //   image: 'path_to_image_1.jpg', // You can use real image URLs or local paths
  //   description: 'John is the visionary leader who started the company.',
  // },
  // {
  //   id: 2,
  //   name: 'Jane Smith',
  //   position: 'CTO',
  //   image: 'path_to_image_2.jpg',
  //   description: 'Jane leads our tech team with an innovative approach.',
  // },
  // {
  //   id: 3,
  //   name: 'Michael Brown',
  //   position: 'Lead Developer',
  //   image: 'path_to_image_3.jpg',
  //   description: 'Michael is the mastermind behind our platform’s development.',
  // },
  // {
  //   id: 4,
  //   name: 'Sara Johnson',
  //   position: 'Product Manager',
  //   image: 'path_to_image_4.jpg',
  //   description: 'Sara ensures that our products meet user needs and expectations.',
  // },
  // Add more members as needed
];

const WomenWings = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team WOMEN WINGS</h2>
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

export default WomenWings;
