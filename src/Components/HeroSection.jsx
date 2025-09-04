import { FaLongArrowAltRight } from "react-icons/fa";
import React from 'react';

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-text">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box exploring-button">
            Start Exploring <FaLongArrowAltRight className="right-arrow" />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/colorful-landmarks-skyline.png"
            alt="Beauty of the World"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;