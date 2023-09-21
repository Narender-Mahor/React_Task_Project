import React from "react";

const CounterCom = ({image, text, name}) => {
  return (
    <>
      <div className="d-flex gap-3 align-items-center">
        <img src={image} alt="" className="" />
        <div className="gapFlex">
          <h2 className="mb-0 fw-bold">
            <span>{text}</span>
          </h2>
          <h6>
            <span className="numOfCounter">{name}</span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default CounterCom;
