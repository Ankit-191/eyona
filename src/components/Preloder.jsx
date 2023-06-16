import React from "react";
import eyonapreloder from "../assets/img/svg/eyonalogo.svg";
const Preloder = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <>
      <div
        id="none"
        className="loading_back min-vh-100 w-100 position-fixed top-0 start-0 bg-white d-flex align-items-center justify-content-center"
      >
        <img src={eyonapreloder} alt="eyonapreloder" width={250}/>
      </div>
    </>
  );
};

export default Preloder;
