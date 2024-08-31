import React from "react";
import Lottie from "lottie-react";
import error from "../animations/error";
const Error = () => {
  return (
    <div className="h-[64vh] flex items-center justify-center  my-4">
      <Lottie
        animationData={error}
        loop={true}
        className="sm:w-[70vw] h-[600px] sm:h-[450px] md:h-[650px] "
      />
    </div>
  );
};

export default Error;
