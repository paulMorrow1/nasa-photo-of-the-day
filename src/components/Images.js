import React from "react";

const Images = (props) => {
  return (
    <div>
      <img src={props.img} alt="NASA picture of the day"></img>
    </div>
  );
};

export default Images;
