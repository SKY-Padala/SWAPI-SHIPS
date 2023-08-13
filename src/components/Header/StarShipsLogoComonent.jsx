import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
              <img src={process.env.PUBLIC_URL+"/images/Star_Wars_Logo.png"} alt="Star WARS" />
      </div>
      <div style={{color:"red",textAlign:"center"}}><h4>Sample React Project using the SWAPI API</h4>
        <h5>Results are filtered to starships with a crew size less than 10 and stored by the crew size</h5>
        <h6>The starship that has featured in the most films will show a Badge</h6>
    </div>
      </header>
  );
};

export default Header;

