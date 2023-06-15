import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import recruitment from "../assets/img/webp/recruitment.webp";
const Join = () => {
  return (
    <>
      <section className="py-5 position-relative overflow-hidden joincircle">
        <Container className="container_1544">
          <p className="ff_inter fw_700 fs_8xl clr_black_100 mb-lg-5 mb-4 text-center lh_100px me-xxl-4">
            Join the
            <a href="#" className="clr_red mx-2">
              eyona
            </a>
            team and find out where the
            <span className="textmagic"> true magic</span> happens!
          </p>
          <p className="ff_inter fs_lg fw_400 clr_gray_300 mw_1071px mt-lg-5 mb-lg-2">
            It doesn’t matter where you come from, how you look or any other
            aspect about yourself. If you’re pssionate about what you do, we
            can’t wait to meet you.
            <span className="mt-lg-4 mt-3 d-block">
              We are always looking for people, who put customers at the
              forefront. If you are seeking a culture with high performance
              standards that loves to create and build things with exceptional
              people, then Eyona may be the fit for you.
            </span>
          </p>
          <button className="ff_inter fw_700 fs_md clr_white rounded-pill bg_red sendusbtn border-0 mt-lg-5 mt-4">
            Send Us A Message
          </button>
          <Row className="recruitment_h600 align-items-md-center">
            <Col md={6} className="text-lg-end mt-4">
              <a href="#" className=" ff_inter fw_700 fs_2xl clr_red me-5">
                recruitment@eyona.co
              </a>
            </Col>
            <Col md={6}>
                <img src={recruitment} alt="recruitment" className="position-absolute bottom-0 end-0 recuitmentimgw_1000" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Join;
