import React from "react";

function Logo({ width = "150px" }) {
  return (
    <div>
      <img
        style={{ objectFit: "contain" }}
        src="\blog-49006_640.png"
        width={width}
      ></img>
    </div>
  );
}

export default Logo;
