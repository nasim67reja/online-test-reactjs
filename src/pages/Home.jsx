import React from "react";
import Header from "../components/Header";
import ProductShow from "../components/ProductShow";
import Right from "../components/Right";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

import Frame16 from "../assets/Frame16.png";
import Frame17 from "../assets/Frame17.png";
import Frame23 from "../assets/Frame23.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-[20%_75%] gap-[4rem] ">
          <Sidebar />
          <div>
            <Header />
            <div className="flex gap-10">
              <ProductShow />
              <Right />
            </div>
            <Slider />
            <div className="cus flex gap-4 text-[ #66FF1E] ">
              <div>Explore The Popular Categories</div>
              <button>see all</button>
            </div>

            <div className="flex gap-10 mt-16">
              <img src={Frame16} alt="" />
              <img src={Frame17} alt="" />
            </div>
            <div className="flex justify-between w-[333px] absolute right-4 top-[55%] px-8">
              <p>Daily Deals</p>
              <p>View All</p>
            </div>
            <div className="absolute right-0 top-[58%]">
              <img src={Frame23} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
