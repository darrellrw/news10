import React from "react";
import placeholderImage from "../assets/placeholderImage.png";

const Penulis = (props) => {
  return (
    <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[231px] h-12 relative gap-4">
      <img
        className="flex-grow-0 flex-shrink-0 w-12 h-12 rounded-[100px] object-cover"
        src={placeholderImage}
        alt="Avatar Penulis"
      />
      <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-sm leading-[1.5] font-semibold text-left text-black">
          Jennifer Aniston
        </p>
        <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-sm leading-[1.5] text-left text-black">
            11 Jan 2022
          </p>
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-lg leading-[1.5] text-left text-black">
            •
          </p>
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-sm leading-[1.5] text-left text-black">
            5 min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default Penulis;