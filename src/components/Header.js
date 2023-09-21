import React, { useState, useEffect } from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/user.css";
import Logo from "../assets/img/logo.png";
import AddressIcon from "../assets/img/address.png";
import myLocationTRegularIcon from "../assets/img/my_location_regular_icon.png";
import userLoginICon from "../assets/img/userLogin.png";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://13.233.104.251:8080/api/coach/homeScreen?longitude=&&latitude="
      )
      .then((res) => {
        console.log(res.data.data.appBanners);
        setData(res.data.data.appBanners);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bgImageset" id="home">
        <nav
          className="navbar navbar-expand-lg navbar-dark undefined"
          id="mainNav"
        >
          <div className="container position-relative">
            <button className="navbar-toggler" type="button">
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand">
              <img src={Logo} alt="Game Hunt" title="Game Hunt" />
            </a>
            <div className="nav-item get-in-touch loginBtnMobileBlock">
              <span
                className="nav-link login-b cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#LoginModal"
              >
                <img src="assets/img/userLogin.png" alt="" />{" "}
                <img src="assets/img/userLogin.png" alt="" /> Login | Signup
              </span>
            </div>
            <div className="collapse navbar-collapse homePAgeMenu">
              <form className="createEventForm nav-link locationFormDesk">
                <div className="position-relative">
                  <div className="">
                    <input
                      placeholder="Current Location"
                      className="form-control CurrentLocation"
                      name="location"
                      defaultValue="Agra, Uttar Pradesh"
                    />
                  </div>
                  <img src={AddressIcon} className="input-img loactun" alt="" />
                  <img
                    src={myLocationTRegularIcon}
                    className="input-img loactunRight"
                    alt=""
                  />
                </div>
              </form>
              <ul className="navbar-nav py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    gamehunt academy
                  </a>
                </li>
                <li
                  className="nav-item profile-drop cursor-pointer position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#PartnerModal"
                >
                  <span className="nav-link">partners</span>
                </li>
                <li className="nav-item get-in-touch loginBtnDstBlock">
                  <span
                    className="nav-link login-b cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                  >
                    <img src={userLoginICon} alt="" />{" "}
                    <img src={userLoginICon} alt="" /> Login | Signup
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <form className="createEventForm nav-link locationFormMobile">
          <div className="position-relative">
            <div className="">
              <input
                placeholder="Current Location"
                className="form-control CurrentLocation pac-target-input"
                name="location"
                defaultValue="Agra, Uttar Pradesh"
                autoComplete="off"
              />
            </div>
            <img
              src={AddressIcon}
              className="input-img loactun"
              alt=""
            />
            <img
              src={myLocationTRegularIcon}
              className="input-img loactunRight"
              alt=""
            />
          </div>
        </form>
        <div className="d-none">
          <i className="fa fa-question-circle-o" aria-hidden="true" /> Help
        </div>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              {data.map((element) => {
                return (
                  <>
                    <div className="carousel-item active" key={element._id}>
                      <img
                        src={element.image}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
