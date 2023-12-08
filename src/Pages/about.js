// About.js


import React from 'react';
import Santa from './aboutsanta.svg'

const About = () => {
  return (

    <div style={{display:'flex', alignItems:"center"}}>
    <div><img style={{height:"30rem"}} src={Santa}/></div>
    <div>
      <h2>About Christmas</h2>
      <p>
        Christmas is a time for joy, celebration, and giving love and other goodies out to your loved ones. It marks the birth of Jesus Christ
        and is celebrated by people around the world with various traditions and customs.
      </p>
    </div>
    </div>
  );
};

export default About;
{/*created a conflict on this page */}