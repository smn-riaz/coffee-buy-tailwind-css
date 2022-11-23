import React from "react";
import {BsArrowRightCircle} from 'react-icons/bs'
import SectionHeadline from "./SectionHeadline";

const ServiceSection = () => {
  const services = [
    {
      image: "https://i.ibb.co/w6K9vwz/coffeemachine.jpg",
      h1: "Coffee Bean",
    },
    {
      image: "https://i.ibb.co/FWCcM9v/coffeeingrad.jpg",
      h1: "Coffee Ingredients",
    },
    {
      image: "https://i.ibb.co/w6K9vwz/coffeemachine.jpg",
      h1: "Coffee Machine",
    },
    {
      image: "https://i.ibb.co/FWCcM9v/coffeeingrad.jpg",
      h1: "Coffee Latte",
    },
  ];
  return (
    <main className="section-layout">
      <SectionHeadline>Our Service</SectionHeadline>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 text-center px-6">
        {services.map((service) => (
          <div className="bg-servicecardbg p-3 rounded-md border-[1px] border-white m-3">
            <div className="overflow-hidden">
              <img
                className="w-full h-full hover:scale-110 duration-500"
                src={service.image}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-2xl text-center text-white p-3">
                {service.h1}
              </h1>
              <div className="flex justify-center items-center">
                <p className={`p-2 border-[0.5px] cursor-pointer hover:bg-[#815a4b] border-[#815a4b] rounded-full duration-500`}>
                  <BsArrowRightCircle color="white"/>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServiceSection;
