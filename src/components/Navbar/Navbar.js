import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
    
    <div className="navbar-icon">
    <Link to="/"> 
          <HomeIcon fontSize="large" />
        </Link>

        
        <h2>Cutshort</h2>
        
      </div>
      <ul>
      <li>
    

        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/AllJobs">All Jobs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <Link to="/bookdemo"><button>Request a Demo</button></Link> 
        </li>
        
        
        
     
      </ul>
    
    </nav>
  );
};

export default Navbar;
