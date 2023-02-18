import React from "react";
import h1i from "../assets/h1.png";
import h2i from "../assets/h2.png";

const Right = () => {
  return (
    <div className="bg-g flex flex-col justify-between py-8 px-6 relative items-start h-[212px]">
      <div className="right-text">Summer headphones from top brands</div>
      <button>Buy it Now</button>
      <div className="absolute right-20 bottom-10">
        <img src={h1i} alt="headphone" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={h2i} alt="headphone" />
      </div>
    </div>
  );
};

export default Right;
