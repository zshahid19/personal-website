import React from 'react';

const Portfolio = ({ jobExperience, education }) => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0',
  };

  const jobExperienceStyle = {
    marginLeft: '6.5rem',
  };

  const educationStyle = {
    marginLeft: '8rem',
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div style={jobExperienceStyle}>
          <h2 style={{ color: '#ffad01', marginBottom: '0.5rem', fontSize: '3rem' }}>Job Experience</h2>
          {jobExperience.map((experience, index) => (
            <div key={index} className="job">
              <h3 style={{ marginBottom: '0.10rem', fontSize: '2rem', color: '#ED6A5A' }}>{experience.company}</h3>
              <p style={{ marginBottom: '0.25rem',  fontSize: '1.5rem', color: '#F7BDB6' }}>{experience.title}</p>
              <p style={{ marginBottom: '1.25rem', color : '#B5B5B5'}}>{experience.timeWorked}</p>
              <ul style={{ marginBottom: '3.5rem', color : '#F1EDED'}}>
                {experience.description.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={educationStyle}>
          <h2 style={{ color: '#ffad01', marginBottom: '0.5rem', fontSize: '3rem' }}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education">
              <h3 style={{ marginBottom: '0.10rem', fontSize: 'calc(2rem + 2px)', color: '#ED6A5A' }}>{edu.university}</h3>
              <p style={{ marginBottom: '0.25rem', fontSize: '1.5rem', color: '#F7BDB6' }}>{edu.degree}</p>
              <p style={{ marginBottom: '1.25rem', color : '#B5B5B5' }}>{edu.timeStudied}</p>
              <ul style={{ marginBottom: '3.5rem',  color : '#F1EDED' }}>
                {edu.description.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
