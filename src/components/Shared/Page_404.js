import React from "react";
import dribbble from "../../images/dribbble_1.gif";

const Page_404 = () => {
  return (
    <div className="flex flex-col items-center content-center">
      <h1 className="text-5xl pt-12 pb-6 text-bold text-red-400">
        Opps... Not Found
      </h1>
      <img src={dribbble} alt="" />
    </div>
  );
};

export default Page_404;
