// import React, { useState, useEffect } from "react";
// import axios from "axios";
import Headphone from "../assets/Headphone.png";
import star from "../assets/star.svg";
import loves from "../assets/loves.png";

const ProductShow = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://api.hiring.masterkey.tech/api/v1/product/get"
  //     );
  //     console.log(response);
  //     setData(response);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="shadow-product flex items-center justify-center gap-5 p-8">
      <div>
        <img src={Headphone} alt="productImage" />
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-[22px] font-semibold leading-[24px] mb-4">
          Beats Studio3 Wireless Headphone
        </h4>
        <div className="flex gap-4 ">
          <div className="flex gap-2">
            <img src={star} alt="staricon" />
            <img src={star} alt="staricon" />
            <img src={star} alt="staricon" />
            <img src={star} alt="staricon" />
            <img src={star} alt="staricon" />
          </div>
          <div className="text-[#756B6B] text-[15px] leading-[17px]">
            (200+ Reviews)
          </div>
        </div>
        <p className="text-[16px] leading-[18px]">
          Ergonomic or cupe with on-oor controls up to 22 hours of tening time.
          Apple Wi crip & Closs
        </p>
        <p className="text-[#07FFD2] font-semibold ">Price $ 450.55</p>

        <div className="flex justify-between items-center">
          <div className=" flex items-center gap-4 my-8">
            <div>Color</div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#66FF1E]"></div>
            <div className="border-2 border-[#1EFFD6] p-1 rounded-full">
              <div className="h-[20px] w-[20px] rounded-full bg-[#1EFFD6]"></div>
            </div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#1E78FF]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#8E3785]"></div>
          </div>
          <div className="bg-[#F5F4F4] shadow-i flex gap-6 p-2 items-center">
            <div className="bg-[#D9D9D9] shadow-i p-1 rounded-full">-</div>
            <div>1</div>
            <div className="shadow-i p-1 bg-[#D9D9D9] rounded-full">+</div>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src={loves} alt="icon" />
          </div>
          <button className="btn btn-secondary">Add to card</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
