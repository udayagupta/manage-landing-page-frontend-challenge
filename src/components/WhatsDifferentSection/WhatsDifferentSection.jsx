import React from "react";
import "../../styles/WhatsDifferent.css";

const WhatsDifferentSection = () => {
  const features = [
    {
      id: "01",
      heading: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "02",
      heading: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      heading: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <section style={{fontFamily: "Be Vietnam Pro"}} className="whats-different-section ">
      <div className="whats-different-div-1 ">
        <h3 className="whats-diff-heading">What's different about Manage?</h3>
        <p className="whats-diff-p">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className=" whats-different-div-2">
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index} className="feature">
              <p className="feature-id  border-black">{feature.id}</p>
              <h4 className="flex items-center feature-heading border-violet-500">{feature.heading}</h4>
              <p className="feature-des ">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatsDifferentSection;
