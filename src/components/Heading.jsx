import React from "react";

function Heading() {
  const time = new Date().getHours();
  let wish = "";
  const customStyle = {
    color: "black"
  };

  if (time < 12) {
    wish = "Good Morning";
    customStyle.color = "red";
  } else if (time < 18) {
    wish = "Good Afternoon";
    customStyle.color = "green";
  } else {
    wish = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {wish}
    </h1>
  );
}

export default Heading;
