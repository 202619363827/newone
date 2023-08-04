import React from 'react';
import { Link } from 'react-router-dom';
 import './Home.css';
const Home = () => {
  return (
    <div className="home-section">
      <div className="image-container">
        <img src="https://checkmarx.com/wp-content/uploads/2022/03/shutterstock_1441872764.png" alt="Home" />
        
      </div>
      
      <h1>Hire your expectations.</h1>
      <h3 className="font">We’re a standalone recruitment business platform that doesn’t leave you having to standalone. We’re 100% committed to supporting your business every step of the way.</h3>
      <h1>Sound appealing?</h1>
      <h3>To talk to a real person, who gets recruitment too, call us on </h3>
      
      
      
      <div>
        <Link to="/bookdemo"> 
          <button className="demo-but">Bookdemo</button>
        </Link>
      </div>
        
    
      
    </div>
  );
};

export default Home;
