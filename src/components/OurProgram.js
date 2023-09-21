import React, { useEffect, useState } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/user.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/slick.css";
import Slider from "react-slick";
import axios from "axios";
import startImg from "../assets/img/star.png";

const OurProgram = () => {
  const [data, setData] = useState([]);
  const [repeatData, setRepeatData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://13.233.104.251:8080/api/coach/homeScreen?longitude=&&latitude="
      )
      .then((res) => {
        setData(res.data.data.coachesData);
        setRepeatData(res.data.data.SportsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="mt-4 pt-4" id="ourprograms">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
              <h3 className="sec-title">Training by Professionals</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
              <ul
                className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
                id="pills-tab"
                role="tablist"
              >
                {repeatData.map((element) => {
                  return (
                    <>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-capitalize d-grid"
                          type="button"
                        >
                          <img
                            src={element.sportsUnselectedImage}
                            alt=""
                            className="sportTabImg"
                          />
                          {element.sport}
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="d-none">
                <div className="position-relative filterDrop">
                  <img src="assets/img/filter.png" alt="" />
                  <span className="filterText">Filter</span>
                  <div className="filterDropSelct">
                    <span className="me-2 fw-bold">Filter By:</span>
                    <select>
                      <option value="">Select</option>
                      <option value={1}>My favourite</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div id="dynamicDots" className="position-relative">
                  <div className="slider programIMages sportSlider">
                    <Slider {...settings}>
                      {data.map((element) => {
                        return (
                          <>
                            <div className="">
                              <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                <div className="position-relative">
                                  <a className="text-dark" href="#">
                                    <img
                                      src={
                                        !element.sports[0].coverImage
                                          ? "https://www.labiotech.eu/wp-content/uploads/2022/06/cancer-cells.jpg"
                                          : element.sports[0].coverImage
                                      }
                                      className="img-fluid tabImage"
                                      alt=""
                                    />
                                  </a>
                                  <div className="venueBoxIcons">
                                    <span className="votesRatingBg">
                                      {element.rating}
                                      <img
                                        src="assets/img/star.png"
                                        alt=""
                                        className="start"
                                      />
                                    </span>
                                    {element.rating}0 votes
                                  </div>
                                  <img
                                    src={startImg}
                                    alt=""
                                    className="d-none"
                                  />
                                </div>
                                <div className="text-start mt-3">
                                  <a className="text-dark" href="#">
                                    <h5
                                      className="ellips1Line text-dark w-100 fw-bold"
                                      title="Gamehunt Football Academy"
                                    >
                                      {element.coachingCenterName}
                                    </h5>
                                    <p className="text-dark ellips1Line w-100 mb-3">
                                      {element.sports[0].sport}
                                    </p>
                                  </a>
                                  <div className="eventCreater">
                                    <img
                                      src={element.image}
                                      className="rounded-circle eventCreaterIcon"
                                      alt=""
                                    />
                                    <span>
                                      <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                        {element.name}
                                      </p>
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <span className="ellips1Line w-100 text-dark">
                                      {element.address}
                                    </span>
                                    <a
                                      href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                      target="_blank"
                                      className="clubKMS box-shadow"
                                    >
                                      <img
                                        src="assets/img/map_pins_icon.png"
                                        alt=""
                                        className="map_pins_icon"
                                      />
                                      {element.longitude}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Slider>
                  </div>
                  <a className="viewAll theme-color" href="#">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProgram;
