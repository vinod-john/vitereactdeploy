import React from "react";
import Button from "../layouts/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Typewriter from "typewriter-effect";

const Home = () => {
  const handleOrderClick = () => {
    // Show toast notification
    toast.success("Order placed successfully!");
  };
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          <Typewriter
            options={{
              strings: ["Elevate Your Inner Foodie with Every Bite."],
              autoStart: true,
              loop: true,
              delay: 100, // Adjust typing speed here
              cursor: "|", // Optional: Customize the cursor style
            }}
          />
        </h1>
        <p className=" text-backgroundColor transition-opacity duration-300 ease-in-out hover:opacity-50">
          Discover a world where every bite is an adventure and every dish tells
          a story. Dive into a culinary journey that celebrates the passion for
          food with every taste. Our menu is crafted with love, featuring
          mouthwatering creations that promise to excite your taste buds and
          satisfy your cravings. Whether you’re a gourmet aficionado or a casual
          foodie, we invite you to elevate your dining experience and savor the
          true essence of flavor.
        </p>
        <div className=" lg:pl-44">
          <Button
            title="Order Now"
            className="btn btn-primary"
            onClick={handleOrderClick}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
