import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Button from "./Button";

const TopBannerSection = () => {
  return (
    <main className="section-layout">
      <div className="sm:flex flex-row justify-center space-y-8 px-6 sm:px-8">
        <div className="sm:space-y-10 space-y-6 px-2 basis-1/2">
          <div className="space-y-8">
            <h1 className="md:text-8xl sm:text-6xl text-3xl font-semibold text-white uppercase">
              Coffee Treat
            </h1>
            <h5 className=" md:text-2xl sm:text-xl text-lg text-white leading-[60px]">
              Service for office breakrooms party and quick free delivery
            </h5>
          </div>
          <div className="socialcontainer">
            <div className="flex justify-start items-center">
              <p className="m-2 social-icon2">
                <BsTwitter />
              </p>
              <p className="m-2 social-icon2">
                <BsFacebook />
              </p>
              <p className="m-2 social-icon2">
                <BsInstagram />
              </p>
              <p className="m-2 social-icon2">
                <BsLinkedin />
              </p>
            </div>
          </div>
          <div>
            <Button>Shop Now</Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/hRK3MZD/cup.png" className="w-full" alt="" />
        </div>
      </div>
    </main>
  );
};

export default TopBannerSection;
