import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import WhatsDifferentSection from "../WhatsDifferentSection/WhatsDifferentSection";
import TestimonalsSection from "../TestimonialsSection/TestimonalsSection";
import { SimplifySection } from "../SimplifySection/SimplifySection";

const MainSection = () => {
  return (
    <main className="">
      <div className="">
        <HeroSection />
        <div className="">
          <WhatsDifferentSection />
          <TestimonalsSection />
        </div>
      </div>
      <div>
        <SimplifySection />
      </div>
    </main>
  );
};

export default MainSection;
