import React from "react";

const CusTesimonal = ({image, immageQuete, name, description}) => {

  return (
    <>
      <div
        data-index={0}
        className="slick-slide slick-active slick-current"
        tabIndex={-1}
        aria-hidden="false"
        style={{ outline: "none", width: 360 }}
      >
        <div>
          <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
            <div className="customerSaingBox">
              <div className="eventGridFlex">
                <img
                  src={image}
                  className="img-fluid coachImgCenetr"
                  alt=""
                />
              </div>
              <h5 className="text-uppercase mt-1">{name}</h5>
              <p className="mb-0 mb-md-2">
                <img src={immageQuete} width="20px" alt="" />
              </p>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CusTesimonal;
