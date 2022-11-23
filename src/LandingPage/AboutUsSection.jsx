import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";

const AboutUsSection = () => {
  return (
    <main className="section-layout" id="about">
      <section className="md:flex justify-center items-center sm:px-16 p-8  space-y-6">
        <div className="basis-1/2 flex justify-center items-center">
          <img
            src="https://i.ibb.co/k42vNZW/coffeehot.jpg"
            alt=""
            className="max-h-[600px]"
          />
        </div>

        <div className="sm:p-10 p-2 rounded-lg border-[0.5px] border-white space-y-5 bg-[#221714] basis-1/2">
          <div>
            <h1 className="text-4xl font-semibold uppercase text-white">
              About Us
            </h1>
          </div>
          <div>
            <p className="text-lg text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates dignissimos sequi dolorem qui animi quos facilis vero
              deleniti consequatur a, aspernatur numquam praesentium molestiae
              odit minima labore sed non repellendus!
            </p>
          </div>
          <div>
            <Button>Shop Now </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsSection;
