import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import eyona from "../assets/img/svg/footerlogo.svg";
const Footer = () => {
  return (
    <>
      <section className="bg_black_100 py-xxl-5 position-relative overflow-hidden">
        <Container className="container_1544 py-lg-5 my-5">
          <img
            src={eyona}
            alt="eyona"
            className="my-lg-5 mb-4 pb-lg-2 footerlogow_324"
          />
          <Row>
            <Col sm={12} lg={6} xl={4}>
              <ul className="p-0 mb-4 linkhover">
                <li className="mb-2 mb-md-3 pb-lg-1">
                  <a href="#" className="ff_inter fw_700 fs_3sm clr_red">
                    contact@eyona.co
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_inter fw_400 fs_sm clr_white_100">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_inter fw_400 fs_sm clr_white_100">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} lg={3} xl={4}>
              <ul className="p-0 linkhover">
                <li className="mb-2 mb-md-3 pb-lg-1 ff_inter fw_700 fs_3sm clr_white">
                  London
                </li>
                <li>
                  <a href="#" className="ff_inter fw_400 fs_sm clr_white_100">
                    77 Farringdon Road
                    <span className="d-block">London</span>
                    <span className="d-block">EC1m 3JU</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} lg={3} xl={4}>
              <ul className="p-0 linkhover">
                <li className="mb-2 mb-md-3 pb-lg-1 ff_inter fw_700 fs_3sm clr_white">
                  Cape Town
                </li>
                <li>
                  <a href="#" className="ff_inter fw_400 fs_sm clr_white_100">
                    <span className="d-block">4 Alphons way,</span>
                    <span className="d-block">Tokai, Cape Town,</span>
                    <span className="d-block">Western Cape 7420, ZA</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={12} className="mt-4 pt-lg-3">
              <a href="#" className="linkdin">
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
          <div className="h_381 footercircle"></div>
          <p className="mb-0 mt-4 mt-lg-0 ff_inter fw_400 fs_sm clr_gray_200">
            © Copyright – eyona
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;
