"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BodyWrapper = ({ children, className = "", ...props }) => {
  const pathName = usePathname();
  const [bg, setBg] = useState("home-bg");

  useEffect(() => {
    if (pathName.includes("presaleDetail")) {
      setBg("presale-bg");
    } else {
      setBg("home-bg");
    }
  }, [pathName]);

  return (
    <body className={`${className} ${bg}`} id="body-content" {...props}>
      {children}
    </body>
  );
};

export default BodyWrapper;
