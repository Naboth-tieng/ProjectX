// Home.js
import React, { useEffect, useState } from 'react';
import santa from './Santa claus sleigh-pana.svg'

const Home = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Calculate the days left until Christmas
    const today = new Date();
    const christmasDate = new Date(today.getFullYear(), 11, 25); // Assuming Christmas is on December 25
    const timeDiff = christmasDate - today;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  }, []);

  return (
    < div style={{display:"flex", margin:"3rem", justifyContent:"space-around", alignItems:"center"}}>
    <div>
        <img style={{height:'30rem'}} src={santa}/>
    </div>
    <div>
      <h2>Welcome to the Festive Season!</h2>
      <p>{daysLeft} days left until Christmas!</p>
      {/* Add festive decorations or animations here */}
    </div>
    </ div>
  );
};

export default Home;
