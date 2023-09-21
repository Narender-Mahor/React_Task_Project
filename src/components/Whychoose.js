import React from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/user.css";


const Whychoose = ({ image, heading, description }) => {
  return (
    <>
      <div
        data-index={0}
        className="slick-slide slick-active slick-current"
        tabIndex={-1}
        aria-hidden="false"
        style={{ outline: "none", width: 324 }}
      >
        <div className="text-center cursor-pointer whyChooseBox">
          <div className="eventGridFlex">
            <img src={image} className="img-fluid ChooseUsIcon" alt="" />
            <div className="text-white mt-4 text-center">
              <h5 className="text-capitalize">{heading}</h5>
              <small className="ps-3">{description}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
