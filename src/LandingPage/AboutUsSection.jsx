import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutUsSection = () => {
  return (
    <main className="min-h-screen p-5">
      <div className="sm:grid-cols-2 sm:grid sm:space-x-28 sm:p-12 mx-auto">
        <div className="m-auto">
          <img src="https://i.ibb.co/k42vNZW/coffeehot.jpg" alt="" className="" />
        </div>
        <div className="sm:m-auto p-10 rounded-lg border-2 border-[#803b28] space-y-5 bg-servicecardbg">
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
            <button className="border-2 text-xl rounded-3xl px-6 py-2 border-[#803b28] uppercase text-white"><FontAwesomeIcon className="px-2" icon={faShoppingCart} />
               Shop now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUsSection;
