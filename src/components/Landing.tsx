import React from "react";

export interface LandingProps {
  className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="flex flex-row">
        <p className="text-5xl font-semibold text-white">
          <span className="inline-flex h-20 animate-type overflow-x-hidden whitespace-nowrap pt-2 will-change-transform group-hover:animate-type-reverse">
            Hello, My name is Ryan.
          </span>
          <span className="-mb-2 ml-2 box-border inline-block h-8 w-1 animate-cursor bg-white will-change-transform after:animate-cursor md:-mb-4 md:h-16" />
        </p>
      </div>
      <p className="z-10 text-lg font-normal text-white">
        I am a front-end developer and progressing towards becoming a full-stack
        developer.
      </p>
    </div>
  );
};

export default Landing;
