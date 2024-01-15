import React, { useState } from 'react'
import './MainMatter.css'
import backgroundimg from './background.avif'
import dp from './dp.jpeg'

const MainMatter = () => {
  return (
    <>
    <div className="maindiv">
    <div className="maincontent">
    <img src={dp} id='dp'></img>
    <h2 id="bioname">Hey! I am Mudassir Khan</h2>
     <p id="bio">As a devoted computer science student, my love is web development, which inspires me to become proficient in a variety of areas of this dynamic industry. I've created a variety of online applications, integrating APIs, databases, and even complex machine learning algorithms effortlessly from the frontend to the backend.<br></br><br></br>

I create reliable apps using a variety of programming languages, including Python, Java, C++, C, and JavaScript. I use Object-Oriented Programming (OOPs) concepts to create code that is clear and easy to maintain. I can create optimum solutions because to my expertise in data structures and algorithms.<br></br><br></br>

My ability to work collaboratively is based on my knowledge of Linux, Git, and databases like MySQL and MongoDB. My creative outlet is web development, where responsive designs are created using HTML, CSS, and Bootstrap. While React.js and EJS create dynamic frontend, backend logic flourishes through Node.js and Express.js.<br></br></p>
      <div id="buttondiv">
        <button id='socials'>Socials</button></div>
    </div>
    </div>
    </>
  )
}

export default MainMatter