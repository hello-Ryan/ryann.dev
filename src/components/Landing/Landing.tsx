import React from "react";

export interface LandingProps {
  className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
  return <div className={`${className ? className : ""}`}>
    <p className="text-3xl font-semibold text-white">Hello, My name is Ryan.</p>
    <p className="text-lg text-white font-normal">I am a front-end developer and progressing towards becoming a full-stack developer.</p>
  </div>;
};

export default Landing;
