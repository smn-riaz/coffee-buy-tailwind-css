import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import SectionHeadline from "./SectionHeadline";

const Contact = () => {
  return (
    <main className="section-layout">
      <SectionHeadline>Contact</SectionHeadline>
      <section className="flex justify-around items-center">
        <div className="sm:flex justify-evenly items-center bg-[#422e27] p-28 rounded-lg">
          <div className="flex flex-col justify-between align-middle">
            <div className="flex flex-row my-3">
              <p className="uppercase font-semibold">Name:</p>
              <input
                type="text"
                className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-full"
              />
            </div>
            <div className="flex flex-row my-3">
              <p className="uppercase font-semibold">Email:</p>
              <input
                type="email"
                className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-full"
              />
            </div>
            <div className="flex flex-row my-3">
              <p className="uppercase font-semibold">Message:</p>
              <input
                type="email"
                className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-full"
              />
            </div>
          </div>

          <div className="w-[2px] h-[150px] mx-6 bg-[#553a31] hidden sm:visible" />

          <div className="socialcontainer p-2">
            <div className="flex sm:flex-col flex-row justify-center items-center">
              <p className="m-2 social-icon">
                <BsTwitter />
              </p>
              <p className="m-2 social-icon">
                <BsFacebook />
              </p>
              <p className="m-2 social-icon">
                <BsInstagram />
              </p>
              <p className="m-2 social-icon">
                <BsLinkedin />
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
