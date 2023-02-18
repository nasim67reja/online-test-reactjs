import React from "react";
import headphone from "../assets/headphone.svg";
import Home from "../assets/home.svg";
import Explore from "../assets/explore.svg";
import Saved from "../assets/saved.svg";
import Cart from "../assets/cart.svg";
import Selling from "../assets/selling.svg";
import Profile from "../assets/profile.svg";
import History from "../assets/history.svg";
import Contactus from "../assets/contactus.svg";
import Setting from "../assets/setting.svg";
import sign from "../assets/sign.svg";

const ListItem = ({ img, name }) => {
  return (
    <li className="flex cursor-pointer gap-10">
      <img src={img} alt="homeicon" />
      <span className="text-[20px] leading-[22px] tracking-[0.01rem]">
        {name}
      </span>
    </li>
  );
};

const Navigation = () => {
  const images = [
    Home,
    Explore,
    Saved,
    Cart,
    Selling,
    Profile,
    History,
    Contactus,
    Setting,
  ];
  return (
    <ul className="flex flex-col gap-10">
      {[
        "Home",
        "Explore",
        "Saved",
        "Cart",
        "Selling",
        "Profile",
        "History",
        "Contact Us",
        "Setting",
      ].map((el, i) => (
        <ListItem key={i} img={images[i]} name={el} />
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="pt-[30px] bg-[#D9D9D9]">
      <div className="flex flex-col gap-20 py-5 shadow-sidebar bg-white">
        <div className=" flex gap-6">
          <img src={headphone} alt="headphoneicon" />
          <h3 className="text-[28px] leading-[31px] font-normal">MK Sounds</h3>
        </div>
        <Navigation />
        <div className="w-[236px] h-[229px] rounded-[5px] bg-[rgba(68,229,11,0.55)] py-4">
          <div className="flex justify-center">
            <div className="p-3  rounded-full bg-white w-fit">
              <div className="bg-blue-600 p-3 rounded-full">
                <img src={sign} alt="plusIcon" />
              </div>
            </div>
          </div>
          <h4 className="text-white text-[28px] font-semibold leading-[31px] text-center mt-2">
            Need Help
          </h4>
          <p className="text-center text-white my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <div className="flex justify-center">
            <button className="btn-shadow bg-[#21D111] rounded-[10px] text-white p-2">
              Customer Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
