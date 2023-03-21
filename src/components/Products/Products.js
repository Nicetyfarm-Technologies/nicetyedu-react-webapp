import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Products.css";
import nicetyfarmPic from "../Images/nicetyfarm-pic.png";
import nicetyTech from "../Images/nicetyedu-pic.png";
import nicetyeduPic from "../Images/nicetytech.png";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="products-container">
      <h2>Our Other Products</h2>
      <Slider {...settings}>
      <div className="card">
          <h3>NicetyEdu</h3>
          <div className="data">
          <img src={nicetyeduPic}></img>
          <div className="innerData">
          <p>
            NicetyEdu which is just one of the products for Nicety Technologies,
            is a school management and school resources system designed to help
            productivity in schools, reducing costs, time, and reducing staff
            paperwork for security In schools. It further gives pupils access to
            unlimited study and learning resources at any time, cutting down
            their expenses in purchasing study material as well as disturbances
            when physical classes are not permitted. It is a product that helps
            the school with financial management, pupils' payments, timetabling,
            results generation and records keeping. 
          </p>
          <a className="btn2" href="https//wwww.nicetyfarm.com/">View Product</a>
          </div>
          
          </div>
        </div>
        <div className="card">
          <h3>Nicetyfarm</h3>
          <div className="data">
          <img src={nicetyfarmPic}></img>
          <div className="innerData">
          <p>
            Nicetyfarm is a revolutionary farming management system
            that helps small and medium-scale farmers increase their yields and
            reduce losses through the use of cutting-edge technology and
            services. Our system includes an app and IoT hardware that provides
            farmers with real-time information about their crops and animals,
            including data on weather patterns, water usage, and soil
            conditions. Our app also includes alerts about potential diseases
            and pests, as well as information on the best practices for
            preventing and treating them. 
          </p>
          <a className="btn2" href="https//wwww.nicetyfarm.com/">View Product</a>
          </div>
          
          </div>
        </div>
        
        <div className="card">
          <h3>NicetyHealth</h3>
          <div className="data">
          <img src={nicetyTech}></img>
          <div className="innerData">
          <p>
            Nicetyfarm Technology is a revolutionary farming management system
            that helps small and medium-scale farmers increase their yields and
            reduce losses through the use of cutting-edge technology and
            services. Our system includes an app and IoT hardware that provides
            farmers with real-time information about their crops and animals,
            including data on weather patterns, water usage, and soil
            conditions. Our app also includes alerts about potential diseases
            and pests, as well as information on the best practices for
            preventing and treating them. 
          </p>
          <a className="btn2" href="https//wwww.nicetyfarm.com/">View Product</a>
          </div>
          
          </div>
        </div>
        <div className="card">
          <h3>NicetyTech</h3>
          <div className="data">
          <img src={nicetyTech}></img>
          <div className="innerData">
          <p>
            Nicetyfarm Technology is a revolutionary farming management system
            that helps small and medium-scale farmers increase their yields and
            reduce losses through the use of cutting-edge technology and
            services. Our system includes an app and IoT hardware that provides
            farmers with real-time information about their crops and animals,
            including data on weather patterns, water usage, and soil
            conditions. Our app also includes alerts about potential diseases
            and pests, as well as information on the best practices for
            preventing and treating them. 
          </p>
          <a className="btn2" href="https//wwww.nicetyfarm.com/">View Product</a>
          </div>
          
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Products;
