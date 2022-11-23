import React from "react";
import SectionHeadline from "./SectionHeadline";
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.jpg";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.jpg";
import brand6 from "../assets/brand6.png";
const Brands = () => {
  const brands = [ brand2, brand3,brand1, brand4, brand5, brand6];

  return (
    <main className="section-layout">
      <SectionHeadline>Trusted Brands</SectionHeadline>
      <section className="text-center py-8">
        <div className="flex justify-around items-center flex-wrap">
          {brands.map((image) => (
            <div className="m-2">
              <img className="rounded-full w-[130px] h-[130px] hover:opacity-70" src={image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Brands;
