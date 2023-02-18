import React from "react";
import Header from "../components/Header";
import ProductShow from "../components/ProductShow";
import Right from "../components/Right";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
