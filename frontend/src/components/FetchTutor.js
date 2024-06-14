import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchTutor = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tutors');
        setTutors(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="TutorGridContainer">
      {tutors.map((tutor) => (
        <div key={tutor._id} className="TutorCard">
          <h3>{tutor.name}</h3>
          <p>{tutor.email}</p>
          <p>{tutor.rollno}</p>
          {/* <a href={tutor.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default FetchTutor;
