/* eslint-disable react/prop-types */

import Tilt from "react-parallax-tilt";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:max-w-[700px] text-slate-300 m-[auto] items-center gap-[10px] p-[2rem] md:p-[0rem]">
      <Tilt>
        <img
          className="aspect-square rounded-full w-[170px] h-[170px] z-[25]"
          src={review.image}
        ></img>
      </Tilt>

      <h2 className="text-[2rem] font-bold">{review.name}</h2>
      <span className="text-[1.3rem]">{review.job}</span>
      <p className="text-center font-['Open_Sans']">{review.text}</p>
    </div>
  );
};

export default Card;
