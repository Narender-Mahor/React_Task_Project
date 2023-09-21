import React from "react";
import whychoose_icon1 from "../assets/img/whychoose_icon1.png";
import whychoose_icon2 from "../assets/img/whychoose_icon2.png";
import whychoose_icon3 from "../assets/img/whychoose_icon3.png";
import whychoose_icon4 from "../assets/img/whychoose_icon4.png";
import Whychoose from "./Whychoose";
import "../assets/css/bootstrap.css";
import "../assets/css/user.css"
import "../assets/css/user.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WhyChooseUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="WhyChooseUsBg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-5 text-center">
              <h3 className="sec-title text-white">Why Choose Us</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-4 DesktopViewUs">
              <div className="slick-slider ProgramSlider slick-initialized">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: 1296,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <Slider {...settings}>
                        <Whychoose
                          image={whychoose_icon1}
                          heading="Sports venues at fingertips"
                          description="Heard anything better than a selection of sports venues that work with your schedule?"
                        />
                        <Whychoose
                          image={whychoose_icon2}
                          heading="Assertive Coaching camps for persistence."
                          description="It may be difficult to locate quality coaching academies in your area. As a result,"
                        />
                        <Whychoose
                          image={whychoose_icon3}
                          heading="The GAMEHUNT ACADEMY"
                          description="The Gamehunt Academy is a one-stop shop for schools and students seeking sports and life skills."
                        />
                        <Whychoose
                          image={whychoose_icon4}
                          heading="Events & Tournaments"
                          description="The Gamehunt is d edicated to providing numerous opportunities for our young athletes to develop and showcase their skills at a competitive level."
                        />
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mobirlViewUs">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                  <div className="text-center cursor-pointer whyChooseBox">
                    <div className="eventGridFlex">
                      <img
                        src={whychoose_icon1}
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          Sports venues at fingertips
                        </h5>
                        <small className="ps-3">
                          Heard anything better than a selection of sports
                          venues that work with your schedule?
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                  <div className="text-center cursor-pointer whyChooseBox">
                    <div className="eventGridFlex">
                      <img
                        src={whychoose_icon2}
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          Assertive Coaching camps for persistence.
                        </h5>
                        <small className="ps-3">
                          It may be difficult to locate quality coaching
                          academies in your area. As a result,
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                  <div className="text-center cursor-pointer whyChooseBox">
                    <div className="eventGridFlex">
                      <img
                        src={whychoose_icon3}
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          The GAMEHUNT ACADEMY
                        </h5>
                        <small className="ps-3">
                          The Gamehunt Academy is a one-stop shop for schools
                          and students seeking sports and life skills.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                  <div className="text-center cursor-pointer whyChooseBox">
                    <div className="eventGridFlex">
                      <img
                        src={whychoose_icon4}
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          Events &amp; Tournaments
                        </h5>
                        <small className="ps-3">
                          The Gamehunt is dedicated to providing numerous
                          opportunities for our young athletes to develop and
                          showcase their skills at a competitive level.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
