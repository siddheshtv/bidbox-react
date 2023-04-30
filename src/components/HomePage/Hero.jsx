import React from "react";
import Electronics from "../assets/hero-img.jpg";
import GPU from "../assets/gpu-img.jpg";
import Phones from "../assets/phone-img.jpg";

function Hero() {
  return (
    <section className="m-2 p-2">
      <div className="flex m-2 p-2 justify-center">
        <div className="flex items-start">
          <div className="mx-2 my-32">
            <p className="text-sm uppercase text-gray-500 my-2 font-medium ">
              Resell your used electronics with the help of artificial
              intelligence
            </p>
            <h1 className="capitalize text-7xl text-blue-500 font-bold my-2">
              Sell your used items effortlessly!
            </h1>
            <button className="py-3 px-4 my-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        <div className="mx-3">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center py-2">
              <img
                src={Electronics}
                alt=""
                className="rounded-xl max-w-md shadow-lg brightness-75"
              />
            </div>

            <div className="flex py-1">
              <img
                src={GPU}
                alt=""
                className="rounded-xl max-w-xs h-md mx-2 brightness-80 shadow-lg"
              />
              <img
                src={Phones}
                alt=""
                className="rounded-xl max-w-xs mx-2 brightness-80 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
