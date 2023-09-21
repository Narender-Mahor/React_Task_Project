import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OfferEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://13.233.104.251:8080/api/coach/homeScreen?longitude=&&latitude="
      )
      .then((res) => {
        setData(res.data.data.offers);
        console.log(res.data.data.offers)
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
      <section className="pt-4" id="Offerevents">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
              <h3 className="sec-title">Offers and Sport Events</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
              <ul
                className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active text-capitalize d-grid"
                    type="button"
                    id="pills-offer-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer"
                  >
                    offers
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link text-capitalize d-grid"
                    type="button"
                    id="pills-events-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-events"
                  >
                    events
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-offer"
                  role="tabpanel"
                  aria-labelledby="pills-offer-tab"
                >
                  <div id="dynamicDots" className="position-relative">
                    <div className="slider EventNewsSlider sportSlider">
                      <Slider {...settings}>
                      {data.map((element) => {
                        return (
                          <>
                            <div>
                              <div
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="">
                                  <div className="eventGridFlex">
                                    <img
                                      src={element.image}
                                      className="img-fluid eventTabImg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      </Slider>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-events"
                  role="tabpanel"
                  aria-labelledby="pills-events-tab"
                >
                  <div id="dynamicDots" className="position-relative">
                    <div className="slider EventNewsSlider sportSlider">
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="assets/img/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />
                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="assets/img/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="assets/img/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date &amp; Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">
                                    10:00am - 11:00pm
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr" /> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="assets/img/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />
                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="assets/img/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="assets/img/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date &amp; Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">
                                    10:00am - 11:00pm
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr" /> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="assets/img/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />
                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="assets/img/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="assets/img/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date &amp; Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">
                                    10:00am - 11:00pm
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr" /> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="assets/img/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />
                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="assets/img/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="assets/img/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date &amp; Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">
                                    10:00am - 11:00pm
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr" /> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
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

export default OfferEvents;
