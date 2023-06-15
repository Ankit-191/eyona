import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import graph from "../assets/img/webp/heroimggraph.webp";
import meeting from "../assets/img/webp/heromeeting.webp";
import people from "../assets/img/webp/people.webp";
import elogo from "../assets/img/svg/elogo.svg";
import Header from "./Header";
const Hero = () => {
  return (
    <>
      <section className="position-relative d-flex flex-column min-vh-100 overflow-hidden">
        <Header />
        <Container className="heromw_1738 flex-grow-1 d-flex py-5">
          <div className="navcircle"></div>
          {/* <div>
            <div></div>
            <div>
              <img src={graph} alt="graph" className="w-100" />
            </div>
            <div>
              <img src={meeting} alt="meeting" className="w-100" />
            </div>
            <div>
              <img src={people} alt="people" className="w-100 " />
            </div>
            <div>
              <img
                src={elogo}
                alt="elogo"
                className="w-100"
              />
            </div>
          </div> */}
          <Row className="justify-content-between align-items-center">
            <Col lg={5}>
              <Row>
                <Col xs={6}>
                  <img src={graph} alt="graph" className="w-100" />
                </Col>
                <Col xs={6}>
                  <img src={meeting} alt="meeting" className="w-100" />
                </Col>
                <Col xs={6}>
                  <img
                    src={people}
                    alt="people"
                    className="w-100 position-relative z-1"
                  />
                </Col>
                <Col xs={6}>
                  <img
                    src={elogo}
                    alt="elogo"
                    className="w-100 position-relative translate_y"
                    width={368}
                    height={367}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} xxl={5} className="me-xxl-5">
              <div className="pe-xxl-5 me-xxl-3">
                <p className=" ff_montserrat fw_700 fs_4xl clr_black_200">
                  We’re a multi-product company specialising in B2B products.
                </p>
                <p className=" ff_montserrat fw_400 fs_sm clr_gray_100 pb-1">
                  Eyona is a team of dedicated, passionate people building B2B
                  software for the FMCG industry.
                </p>
                <button className="ff_montserrat fw_700 fs_md clr_white rounded-pill border-0 btnred">
                  Get In Touch
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
