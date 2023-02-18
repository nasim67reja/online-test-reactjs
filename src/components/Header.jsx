import React from "react";
import search from "../assets/search.svg";
import settings from "../assets/settings.svg";
import message from "../assets/message.svg";
import notification from "../assets/notification.svg";
import person from "../assets/person.svg";

const Search = () => {
  return (
    <div className="shadow-input px-32 h-[47px] py-4 relative w-[371px]">
      <div className="absolute left-[20px] ">
        <img src={search} alt="searchSvg" />
      </div>
      <input
        className="outline-none"
        type="text"
        placeholder="Search Product"
      />
      <div className="absolute right-[20px] top-[15%]">
        <img src={settings} alt="settingsvg" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between mb-[4rem]">
      <div>
        <h2 className="text-[36px] leading-[40px] font-semibold mb-2">
          Headphone
        </h2>
        <p className="text-[18px] leading-[20px]">For the top band</p>
      </div>

      <div className=" flex gap-[20px] items-center">
        <Search />

        <div className="flex gap-[10px]">
          <div className="rounded-[5px] bg-[rgba(23,255,60,0.55)] p-[8px] cursor-pointer">
            <img src={message} alt="messageicon" />
          </div>
          <div className="rounded-[5px] bg-[rgba(23,255,60,0.55)] p-[8px] cursor-pointer">
            <img src={notification} alt="notificationicon" />
          </div>
          <div className="rounded-[5px] bg-[rgba(23,255,60,0.55)]  cursor-pointer">
            <img src={person} alt="personicon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
