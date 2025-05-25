import React from "react";

const GetStartedBtn = ({className=""}) => {
  return (
      <button type="button" style={{whiteSpace: "none"}} className={`${className} get-started-btn font-semibold}`}>Get Started</button>
  );
};

export default GetStartedBtn;
