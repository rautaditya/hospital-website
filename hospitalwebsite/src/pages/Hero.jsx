import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-blue-50 pb-16 min-h-[90vh] w-full">
      
      {/* Full background image */}
      <img
        src="../public/company data/ent website/webanner banner.png"        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Add your text/buttons here if needed */}
      </div>

    </section>
  );
};

export default Hero;
