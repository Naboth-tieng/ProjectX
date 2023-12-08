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
      Christmas is a time to rejoice, celebrate, and shower your loved ones with affection and other treats.
        People commemorate it with a variety of rituals and traditions all around the world, commemorating the birth of Jesus Christ.
      </p>
    </div>
    </div>
  );
};

export default About;
{/*created a conflict on this page */}