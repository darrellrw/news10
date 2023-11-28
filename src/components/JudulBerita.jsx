import React from "react";
import Icon from "./Icon";

const JudulBerita = (props) => {
  return (
    <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-full h-[164px] relative overflow-hidden gap-6">
      <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-base leading-[1.5] text-center text-black">
          Blog
        </p>
        <Icon />
        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-base leading-[1.5] font-semibold text-center text-black">
          Collect UI
        </p>
      </div>
      <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Roboto'] text-5xl leading-[1.2] font-bold text-left text-black">
        A collection of daily UI challenges for your inspiration.
      </p>
    </div>
  );
};

export default JudulBerita;