import React from "react";
import { useState } from "react";
import Button from "./Button";
import SectionHeadline from "./SectionHeadline";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FAQ = () => {
  const [data, setData] = useState(false);

  const handleToggle = (value) => {
    if (data === value) {
      setData(false);
    } else {
      setData(value);
    }
  };
  console.log(data);
  return (
    <main className="section-layout">
      <SectionHeadline>F.A.Q</SectionHeadline>

      <section className="flex flex-col justify-center items-center transition duration-500 space-y-4">
        <div className="bg-[#2e1b11] w-[280px] xs:w-[480px] border rounded-xl duration-700">
          <div className="flex justify-between items-center px-4">
            <h1 className="py-4 font-semibold">FAQ 1</h1>
            { data ==='faq1' ?
            <p
            className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
            onClick={() => handleToggle("faq1")}
          >
            <AiOutlineMinus color="white"/>
          </p>
          :
          <p
              className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
              onClick={() => handleToggle("faq1")}
            >
              <AiOutlinePlus color="white"/>
            </p>

            }
          </div>
          <p className={data === "faq1" ? "visible px-4 pb-2" : "hidden px-4 pb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            iusto dicta aut eveniet recusandae sunt minima dolorem quos placeat
            ipsam quam beatae optio harum, excepturi voluptate quia ullam
            voluptatem.
          </p>
        </div>


        <div className="bg-[#2e1b11] w-[280px] xs:w-[480px] border rounded-xl duration-700">
          <div className="flex justify-between items-center px-4">
            <h1 className="py-4 font-semibold">FAQ 2</h1>
            { data === "faq2" ?
            <p
            className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
            onClick={() => handleToggle("faq2")}
          >
            <AiOutlineMinus color="white"/>
          </p>
          :
          <p
              className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
              onClick={() => handleToggle("faq2")}
            >
              <AiOutlinePlus color="white"/>
            </p>

            }
          </div>
          <p className={data === "faq2" ? "visible px-4 pb-2" : "hidden px-4 pb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            iusto dicta aut eveniet recusandae sunt minima dolorem quos placeat
            ipsam quam beatae optio harum, excepturi voluptate quia ullam
            voluptatem.
          </p>
        </div>


        <div className="bg-[#2e1b11] w-[280px] xs:w-[480px] border rounded-xl duration-700">
          <div className="flex justify-between items-center px-4">
            <h1 className="py-4 font-semibold">FAQ 3</h1>
            { data ==="faq3" ?
            <p
            className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
            onClick={() => handleToggle("faq3")}
          >
            <AiOutlineMinus color="white"/>
          </p>
          :
          <p
              className="p-[2px] rounded-full border-[0.5px] border-white cursor-pointer"
              onClick={() => handleToggle("faq3")}
            >
              <AiOutlinePlus color="white"/>
            </p>

            }
          </div>
          <p className={data === "faq3" ? "visible px-4 pb-2" : "hidden px-4 pb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            iusto dicta aut eveniet recusandae sunt minima dolorem quos placeat
            ipsam quam beatae optio harum, excepturi voluptate quia ullam
            voluptatem.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
