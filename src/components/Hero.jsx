import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptop from "../assets/img/webp/herocomputer.webp";
import graph from "../assets/img/webp/heroimggraph.webp";
import meeting from "../assets/img/webp/heromeeting.webp";
import people from "../assets/img/webp/people.webp";
import elogo from "../assets/img/svg/elogo.svg";
import Header from "./Header";
const Hero = () => {
  return (
    <>
      <section className="position-relative d-flex flex-column min_vh_100 overflow-hidden">
        <Header />
        <Container className="heromw_1738 flex-grow-1 d-flex pb-lg-0 pb-5">
          <div className="navcircle"></div>
          <Row className="justify-content-between align-items-center position-relative multi_top z-3">
            <Col lg={5}>
              <div className="d_grid">
                <div className="headitems headitems1">
                  <img src={laptop} alt="laptop" className="w-100" />
                </div>
                <div className="headitems headitems2">
                  <img src={graph} alt="graph" className="w-100 h-100" />
                </div>
                <div className="headitems headitems3">
                  <img src={meeting} alt="meeting" className="w-100" />
                </div>
                <div className="headitems headitems4">
                  <img src={people} alt="people" className="w-100" />
                </div>
                <div className="headitems headitems5">
                  <img src={elogo} alt="elogo" className="w-100" />
                </div>
              </div>
            </Col>
            <Col lg={6} xxl={5} className="me-xxl-5 mt-3 mt-lg-0">
              <div className="pe-xxl-5 me-xxl-3">
                <p className=" ff_montserrat fw_700 fs_4xl clr_black_200">
                  We’re a multi-product company specialising in B2B products.
                </p>
                <p className=" ff_montserrat fw_400 fs_sm clr_gray_100 pb-lg-1">
                  Eyona is a team of dedicated, passionate people building B2B
                  software for the FMCG industry.
                </p>
                <button className="ff_montserrat fw_700 fs_md clr_white rounded-pill btnred">
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
