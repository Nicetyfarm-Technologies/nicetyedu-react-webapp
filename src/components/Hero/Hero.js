import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Hero.css'
import { Link } from 'react-router-dom';
import sc1 from "../Assets/Images/st10.jpeg";
import sc2 from "../Assets/Images/school3.jpeg";
import sc3 from "../Assets/Images/school2.jpg";
const spanStyle = {
  padding: '20px',
  background: 'rgba(16, 15, 15, 0.38)',
  color: 'white'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: sc1,
    caption: 'The number 1 school management and school resouces system in the country'
  },
  {
    url: sc2,
    caption: 'Manage averything on one platform. From staff records, pupils records, finances and expenditures, results and timetables'
  },
  {
    url: sc3,
    caption: 'Give your students access to unlimited resouces by providing a library for them '
  },
];

const Hero = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='container' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span className='span' style={spanStyle}>{slideImage.caption}</span>
                <Link to="/get-started" className='btn1'>Get Started</Link>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Hero;