import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className="section-layout">
      <hr />
      <section className="p-8">
        <div className="sm:flex sm:flex-row">
          <div className="basis-1/4">
            <div className="logo px-5 py-3">
              <Link to="/"><img src="https://i.ibb.co/Qc5zfzp/logo.png" alt="" className="w-3/4" /></Link>
            </div>
          </div>
          <div className="quicklink basis-1/4 p-5">
            <h3 className="uppercase text-white text-2xl">Quick Link</h3>
            <div className="py-5 text-white uppercase">
              <ul className="space-y-3">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="contact basis-1/4 p-5">
            <h3 className="uppercase text-white text-2xl">Contact</h3>
            <div className="py-5 text-white uppercase">
              <ul className="space-y-3">
                <li>1234 423 234</li>
                <li>www.coffeeui.com</li>
                <li>214/3 Road, California, USA</li>
              </ul>
            </div>
            <div className="socialicon flex flex-row justify-center sm:justify-start">
              <div className="basis-1/6">
                <button>
                  <a href="https://fb.com"><img src="https://i.ibb.co/M6tqZsc/facebook.png" className="w-3/4" alt="" /></a>
                </button>
              </div>
              <div className="basis-1/6">
                <button>
                  <a href="https://instagram.com"><img src="https://i.ibb.co/qnGn7y3/instagram.png" className="w-3/4" alt="" /></a>
                </button>
              </div>
              <div className="basis-1/6">
                <button>
                  <a href="https://twitter.com"><img src="https://i.ibb.co/kD61RdN/twitter.png" className="w-3/4" alt="" /></a>
                </button>
              </div>
              <div className="basis-1/6">
                <button>
                  <a href="https://youtube.com"><img src="https://i.ibb.co/bNx2NRj/youtube.png" className="w-3/4" alt="" /></a>
                </button>
              </div>
            </div>
          </div>
          <div className="basis-1/4 p-5">
            <h3 className="uppercase text-white text-2xl">Subscribe Newsletter</h3>
            <div className="py-5 text-sm text-white uppercase">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quam temporibus ab minima quod obcaecati.</p>
            </div>
            <div className="flex flex-row bg-[#50382f] px-2 py-1 ">
                <input type="text" placeholder="Enter Your Email" className="bg-[#50382f] p-2 border-0 w-full outline-none" /><button className=""><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text-white text-center">@2022 All rights reserved</h3>
    </main>
  );
};

export default Footer;
