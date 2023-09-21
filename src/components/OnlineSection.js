import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OnlineSection = () => {
        const [data, setData] = useState([]);
      
        useEffect(() => {
          axios
            .get(
              "http://13.233.104.251:8080/api/coach/homeScreen?longitude=&&latitude="
            )
            .then((res) => {
              setData(res.data.data.onlineSession);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);

        const settings = {
            infinite: true, 
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            swipeToSlide: true,
            autoplay: true,
    autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
    
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
      <section className="mt-4 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center">
              <h3 className="sec-title">Online Session</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
              <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: 1296,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <Slider {...settings}>
                    {data.map((element) => {
                      return (
                        <div
                          data-index={0}
                          className="slick-slide slick-active slick-current"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 432 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                href={element.link}
                                target="_blank"
                                className="text-dark"
                              >
                                <div className="">
                                  <div className="eventGridFlex position-relative">
                                    <iframe
                                      src={element.link}
                                      title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                      frameBorder={0}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen=""
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    </Slider>
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

export default OnlineSection;
