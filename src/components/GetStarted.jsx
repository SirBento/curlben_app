import styles from "../style";
import { arrowUp } from "../assets";
import React from "react";

const GetStarted = () => {

  const handleClick = () => {
    // Handle the click event here
    window.location.href="#features";
  };

  return (
    <button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={handleClick}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-nunito font-medium text-[18px] leading-[23.4px] mr-1">
            <span className="text-gradient">See How</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-nunito font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">We Can Help</span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;