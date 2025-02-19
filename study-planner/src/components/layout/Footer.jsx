import React from 'react';
/**
 * component to represent the footer of the page, note that all components are wrapped in header footer with routing
 * 
 * @returns jsx element for footer
 */
const Footer = () => (
  <footer className=" text-white text-center py-3" style = {{backgroundColor: "#34495e"}}>
    <div className="container">
      <p className="mb-0">{`© ${new Date().getFullYear()} StudyPlanner. All rights reserved.`}</p>
    </div>
  </footer>
);

export default Footer;