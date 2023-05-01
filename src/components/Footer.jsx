import React from "react";

const Footer = () => {
  return (
    <div className="py-5 text-center ">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Professor Gonzales. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
