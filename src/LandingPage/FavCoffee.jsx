import React from "react";
import { Link } from "react-router-dom";
import SectionHeadline from "./SectionHeadline";

const FavCoffee = () => {
  const places = [
    {
      h2: "50+",
    },
    {
      h2: "80+",
    },
    {
      h2: "30+",
    },
  ];

  const coffeeTypes = [
    {
        name:" Cappucino"
    },
    {
        name:" Late"
    },
    {
        name:" Arabica"
    },
  ]
  return (
    <main className="section-layout">
      <SectionHeadline>Lovely coffee</SectionHeadline>
      <section className="py-8 px-8 sm:px-0">
        <h2 className="text-white text-2xl">
          Enjoy Your Coffee in our comfortable place
        </h2>
        <div className="md:flex justify-start items-center w-[80%]">
          {places.map((place) => (
            <div className="basis-1/3 py-6">
              <h2 className="text-white text-4xl">{place.h2}</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quibusdam tenetur maiores.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-8 sm:px-0">
        <div className="sm:flex  sm:space-x-14 items-center">
          <div className="basis-1/2">
            <img
              src="https://i.ibb.co/GRq4Z6x/coffeefav.jpg"
              className="border-white border-2 w-[90%]"
              alt=""
            />
          </div>
          <div className="basis-1/2 space-y-5">
            <div>
              <h3 className="text-[#64483d] uppercase text-md font-bold">
                Our coffee
              </h3>
              <h1 className="text-white text-3xl">
                Choose Your <br className="sm:hidden"/>  Favourite Coffee
              </h1>
            </div>
            <div>
              <p className="text-white">
                More than 100+ types of Coffee are ready to serve by our
                professionals.
              </p>
            </div>
            <div className="sm:flex flex-row">
             {coffeeTypes.map((coffee)=>(
                 <div>
                 <h2 className="font-semibold text-[#64483d] text-2xl mr-3 font-serif">
                   {coffee.name}
                 </h2>
               </div>
             ))}
            </div>
            <div>
              <Link to="/" className="text-white underline-offset-2">
                <u>More menu</u>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FavCoffee;
