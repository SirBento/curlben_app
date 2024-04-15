import React from "react";

const handleClick = () => {
  // Handle the click event here
  console.log("Hire Us Clicked")
};
const Button = () => (
  <button type="button" className={"py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"}
  onClick={handleClick}>
    Hire Us Today
  </button>
);

export default Button;
