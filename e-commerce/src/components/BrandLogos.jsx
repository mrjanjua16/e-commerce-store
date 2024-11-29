import React from "react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const BrandLogos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center py-24 space-x-6 space-y-6 md:space-x-12 md:space-y-0">
      <img src={logo1} alt="Black Style" className="h-8 md:h-12" />
      <img src={logo2} alt="La Modas" className="h-8 md:h-12" />
      <img src={logo3} alt="Molys" className="h-8 md:h-12" />
      <img src={logo4} alt="David" className="h-8 md:h-12" />
      <img src={logo5} alt="Elysmod" className="h-8 md:h-12" />
      <img src={logo6} alt="Vien Fla" className="h-8 md:h-12" />
    </div>
  );
};

export default BrandLogos;
