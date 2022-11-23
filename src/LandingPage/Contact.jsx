import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import SectionHeadline from "./SectionHeadline";

const Contact = () => {
  return (
    <main className="section-layout">
      <SectionHeadline>Contact</SectionHeadline>
     
      <section className="sm:flex justify-evenly items-center">
        <div className="flex flex-col justify-between align-middle">
          <div className="flex flex-row my-4">
            <p className="uppercase font-semibold">Name:</p>
            <input
              type="text"
              className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-[80%]"
            />
          </div>
          <div className="flex flex-row my-4">
            <p className="uppercase font-semibold">Email:</p>
            <input
              type="email"
              className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-[80%]"
            />
          </div>
          <div className="flex flex-row my-4">
            <p className="uppercase font-semibold">Message:</p>
            <input
              type="email"
              className="bg-inherit border-b-[1px] mx-1 border-gray-400 focus:outline-none px-1 w-[80%]"
            />
          </div>
          <button className="w-full bg-[#49332b] p-2 duration-500 hover:bg-[#160f0d00]">Send</button>
        </div>

        <div className="w-[2px] h-[150px] mx-6 bg-[#38251f] hidden md:block" />

        <div className="socialcontainer p-2">
          <div className="flex sm:flex-col flex-row justify-center items-center">
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
      </section>
    </main>
  );
};

export default Contact;
