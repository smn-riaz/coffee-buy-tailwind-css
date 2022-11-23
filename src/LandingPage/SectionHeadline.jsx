import React from "react";

const SectionHeadline = ({ children }) => {
  return (
    <div className="text-center text-4xl font-semibold uppercase text-white py-8">
      <h1>{children}</h1>
    </div>
  );
};

export default SectionHeadline;
