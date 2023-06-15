import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/svg/eyonalogo.svg";
import icon from "../assets/img/svg/headericon.svg";
import navlogo from "../assets/img/svg/navlogo.svg";
import cros from "../assets/img/svg/crosicon.svg";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="position-relative">
        <Container className="navcontainer">
          <div className="d-flex justify-content-between py-5 align-items-center">
            <img src={logo} alt="" className="ps-lg-4 ms-lg-2" />
            <div className="d-flex gap-4 align-items-center">
              <p className="mb-0 ff_inter fw_500 fs_xsm clr_black_100 ls_15em">
                Let’s Talk
              </p>
              <button onClick={showUl} className="z_30 border-0 bg-transparent">
                {head ? (
                  <img src={icon} alt="icon" />
                ) : (
                  <img src={cros} alt="cros" className="ms-3" />
                )}
              </button>
            </div>
            <div
              className={`phone ${head ? "" : "clip_path"}`}
              onClick={() => sethead(true)}
            >
              <Container className="headercontainer overflow-auto">
                <div className="headercircle rounded-pill"></div>
                <div className="py-5 d-flex flex-column vh-100">
                  <img src={navlogo} alt="" width={133} height={42} />
                  <div className="flex-grow-1 d-flex flex-column justify-content-center ">
                    <Row className="justify-content-between align-items-end text-center text-sm-start ">
                      <Col xl={6}>
                        <ul className="ps-xxl-5 ms-xxl-5 my-auto h-100 mb-5 p-0 headerhover">
                          <li className="ff_montserrat fw_700 fs_7xl clr_white ps-xxl-5">
                            Who we are
                          </li>
                          <li className="ff_montserrat fw_700 fs_7xl clr_white ps-xxl-5">
                            Our Companies
                          </li>
                          <li className="ff_montserrat fw_700 fs_7xl clr_white ps-xxl-5">
                            What we do
                          </li>
                          <li className="ff_montserrat fw_700 fs_7xl clr_white ps-xxl-5">
                            Contact us
                          </li>
                          <li className="ff_montserrat fw_700 fs_7xl clr_white ps-xxl-5">
                            Careers
                          </li>
                        </ul>
                      </Col>
                      <Col xl={4}>
                        <Row className="align-items-end">
                          <Col sm={12}>
                            <ul className="p-0 mb-3">
                              <li className="mb-2">
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_700 fs_2sm clr_red"
                                >
                                  contact@eyona.co
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_400 fs_sm clr_white"
                                >
                                  Terms &
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_400 fs_sm clr_white"
                                >
                                  Conditions
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_400 fs_sm clr_white"
                                >
                                  Privacy Policy
                                </a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm={6}>
                            <ul className="p-0">
                              <li className="mb-2">
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_700 fs_2sm clr_red"
                                >
                                  London
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_400 fs_sm clr_white"
                                >
                                  77 Farringdon
                                  <span className="d-block">Road</span>
                                  <span className="d-block">London</span>
                                  <span className="d-block">EC1m 3JU</span>
                                </a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm={6}>
                            <ul className="p-0 d-flex flex-column align-items-center align-items-sm-start">
                              <li className="mb-2">
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_700 fs_2sm clr_red"
                                >
                                  Cape Town
                                </a>
                              </li>
                              <li className="capetown_mw_160px">
                                <a
                                  href="#"
                                  className=" ff_montserrat fw_400 fs_sm clr_white"
                                >
                                  4 Alphons way, Tokai, Cape Town, Western Cape
                                  7420, ZA
                                </a>
                              </li>
                            </ul>
                          </Col>
                          <Col sm={12} className="mt-3">
                            <a href="#">
                              <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.26433 28.7542H0.102661V8.21533H6.26433V28.7542ZM28.8571 28.7542H22.6955V17.7824C22.6955 14.9233 21.6767 13.5 19.6578 13.5C18.0578 13.5 17.0431 14.2969 16.5338 15.8928V28.7542H10.3721C10.3721 28.7542 10.4543 10.2692 10.3721 8.21533H15.2357L15.6116 12.3231H15.7389C17.0021 10.2692 19.021 8.87668 21.7897 8.87668C23.8949 8.87668 25.5976 9.46204 26.8977 10.9326C28.206 12.4053 28.8571 14.3811 28.8571 17.1559V28.7542Z"
                                  fill="white"
                                  fill-opacity="0.25"
                                />
                                <path
                                  d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                                  fill="white"
                                  fill-opacity="0.25"
                                />
                              </svg>
                            </a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
