import React from 'react'
import CusTesimonal from './CusTesimonal'
import employeImg from "../assets/img/employe.png";
import queteImg from "../assets/img/quete_red.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Testimonials = () => {
  const settings = {
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
    <section className="mt-4 pt-4 testimonials">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
        <h3 className="sec-title Whatour">
          What our customer are saying
          <p className="quetePng">
            <img src={queteImg} className="mt-3" alt="" />
          </p>
        </h3>
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex">
        <img
          src={queteImg}
          className="img-fluid quetePngMobile"
          alt=""
        />
        
        <div className="customersayingBg">
          <div className="slick-slider CustomerSlider sportSlider slick-initialized">
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  width: 1080,
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              >
               <Slider {...settings}>
                <CusTesimonal image={employeImg} immageQuete={queteImg} name="Arpit Narvekar" description="A step in the right direction, a much needed platform with a lot of transparency and great expertise to get our children ready to become the next big Athletes and sports person."/>
                <CusTesimonal image={employeImg} immageQuete={queteImg} name="Sandeep Patil" description="There was a need for such a platform that helps my child grow physically and makes him mentally strong."/>
                <CusTesimonal image={employeImg} immageQuete={queteImg} name="Tamrika Tyagi" description="Gamehunt Academy has taken away the worry of our child's security when he goes for his training outside school, very reliable and trustworthy."/>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Testimonials