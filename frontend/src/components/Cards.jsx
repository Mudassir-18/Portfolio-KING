import React from 'react'
import bg from './bgweather.jpg'
import randomwordgenbg from './randomwordgen.png'
import './Cards.css'
const Cards = () => {
  return (
    <>
    <div className="Cardsmain">
        <div className="card1">
            <div className="imgdiv">
              <img src={bg} alt="weatherapp" class="bgimg" />
            </div>
            <h1 id="projtitle">WEATHER FORECAST</h1>
            <p id="projdesc">Experience the ultimate in weather tracking with our cutting-edge React-based weather app. Powered by a reliable weather API, it delivers real-time forecasts and conditions to your fingertips. Stay prepared with accurate hourly and daily updates for any location worldwide. </p>
            <div className="usedtech">
              <p id="usedterms">REACT JS</p>
              <p id="usedterms">API</p>
            </div>
        </div>
        <div className="card1">
            <div className="imgdiv">
            <img src={randomwordgenbg} alt="randomwordgen" class="bgimg" />
            </div>
            <h1 id="projtitle">RANDOM WORD GENERATOR</h1>
            <p id="projdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis placeat quo autem unde, dolor quos pariatur voluptatum deleniti animi consectetur voluptas rem, mollitia aspernatur nulla quia quae. Tempore, autem dolores!</p>
            <div className="usedtech">
              <p id="usedterms">REACT JS</p>
              <p id="usedterms">CSS</p>
            </div>
        </div>
        <div className="card1">
            <div className="imgdiv"></div>
            <h1 id="projtitle">ToDO List</h1>
            <p id="projdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis placeat quo autem unde, dolor quos pariatur voluptatum deleniti animi consectetur voluptas rem, mollitia aspernatur nulla quia quae. Tempore, autem dolores!</p>
        </div>
    </div>
    </>
  )
}

export default Cards