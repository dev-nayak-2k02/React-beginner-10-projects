import React from "react";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>

      <div className="hero-btn">
        <button>Shop now</button>
        <button>Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icons">
            <img src="./images/flipkart.png" alt="logo_flipkart" />
            <img src="./images/amazon.png" alt="logo_amazon" />
        </div>
      </div>
      <div className="hero-image"></div>
    </main>
  );
};

export default Hero;
