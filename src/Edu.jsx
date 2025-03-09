import React from 'react';

const Edu = () => {
  // Define inline style objects
  const sectionStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333'
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  };

  const h2Style = {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#222'
  };

  const h3Style = {
    fontSize: '1.4rem',
    marginBottom: '10px',
    color: '#555'
  };

  const statusStyle = {
    fontSize: '1.2rem',
    color: '#777',
    fontStyle: 'italic'
  };

  // Handlers for hover effect on the card
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <section id='edu' style={sectionStyle} className="edu-section">
      <h1 style={titleStyle} className="edu-title">Education</h1>
      <div
        style={cardStyle}
        className="edu-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 style={h2Style} className="edu-h2">B.Sc. in Computer Science Engineering</h2>
        <h3 style={h3Style} className="edu-h3">Jashore University of Science and Technology</h3>
        <p style={statusStyle} className="edu-status">Currently in 2nd Year</p>
      </div>
    </section>
  );
};

export default Edu;
