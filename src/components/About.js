import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../components/images/img2.jpg"; 
import Common from './Common';

const About = () => {
    return (
        <>
          <Common  
            name='Welcome to about Page' 
            imgsrc={web} 
            visit="/contact"
            btnname="Contact Now"
          />
        </>
      );
};

export default About;
