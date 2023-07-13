import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navLinks } from "../constants";

// creating usable Icon component...
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    }  ${styles}`}
    onClick={handleClick}
  >
    {/*  */}
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    // Main Container
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]  ">
      {/* Logo Container  */}
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32] " imgUrl={logo} />
      </Link>

      {/* Icons Parent Container */}
      <div className="flex-1 flex flex-col justify-between items-center  bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12  ">
        {/* Icons child container */}
        <div className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};

export default Sidebar;
