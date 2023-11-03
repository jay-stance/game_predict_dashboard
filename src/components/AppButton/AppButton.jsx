import React from "react";
import "./AppButton.css";

function AppButton({ label, invert, large, onClick, style }) {
  const inverted = invert ? "inverted" : "";
  const largeBtn = large ? "large_btn" : "";

  return (
    <div onClick={onClick}  className={`flex justify-center bg-main-bg items-center py-3 px-4 lg:px-8 lg:py-3 lg:text-xl border-[1.5px] cursor-pointer text-white
    ${
      invert
        ? '!border-main-bg !bg-white !text-main-bg ease-out duration-200'
        : ''
    }
    ${style}`} >
      {/* <p className="text-white"> */}
      {label}
      {/* </p> */}
    </div>
  );
}

export default AppButton;
