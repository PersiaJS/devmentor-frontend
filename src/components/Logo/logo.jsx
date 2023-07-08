import React from "react";
import devmentor from "./devmentor.jpg";
import Image from "next/image";

function Logo() {
  return (
    <>
      <Image
        src={devmentor}
        alt="devmentor"
        style={{
          width: "200px",
        }}
      />
    </>
  );
}

export default Logo;
