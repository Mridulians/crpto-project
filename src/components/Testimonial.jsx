/* eslint-disable react/prop-types */

import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 relative">
      {/* <div className="w-full md:max-w-[700px] p-10 transition-all duration-700 hover:shadow-xl rounded-md"> */}
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50 mb-[2rem]">
        Reviews
      </h2>

      <div className="flex flex-row text-slate-300 gap-[12rem] md:gap-[0rem] absolute top-[25%] justify-around w-[100%] ">
        <button onClick={leftShiftHandler} className=" hover:text-sky-300 ">
          {" "}
          <FiChevronLeft />
        </button>

        <button onClick={rightShiftHandler} className=" hover:text-sky-300 ">
          {" "}
          <FiChevronRight />
        </button>
      </div>

      <Card review={reviews[index]} />

      <div className="mt-6 text-center">
        <button
          onClick={surpriseHandler}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Surprise Me
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
