// src/components/Home.js

import React, { useState } from 'react';




const Home = () => {
  const [open, setOpen] = useState(false);
  const showDiv = () =>{
    setOpen(!open);
  }
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my React.js website.</p>
      <img style={{width:'100%'}} src="assets/images/wallpaperHome.webp" alt="Website Logo" />
       {open && <div>Hello</div>}
      <button onClick={()=>{showDiv()}}>Show</button>
    </div>
  );
};

export default Home;
