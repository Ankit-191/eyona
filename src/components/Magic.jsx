import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import magic from "../assets/img/webp/magic.webp";
const Magic = () => {
  return (
    <>
      <section className="py-xl-5 my-xxl-5">
        <Container className="container_1696 ps-xxl-5 my-lg-5 py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="px-xxl-5">
                <h5 className="ff_inter fw_700 fs_8xl clr_black_100 mb-lg-4 pb-2">
                  How we make 
                  <span className="d-lg-block"> 
                    <a href="#" className="clr_red mx-2">
                       magic
                    </a>
                    happen.
                  </span>
                </h5>
                <p className="ff_inter fs_lg fw_400 clr_gray_300 mt-1">
                  We seek breakthroughs that will stand the test of time. We
                  keep experimenting that's how we innovate. Innovation we
                  believe is admired but execution is worshipped. We love the
                  problem and pain point and hence the journey more than the
                  destination. We are constantly improving and meticulously
                  refining our products foundation that has been built, and that
                  is what we believe makes us great.
                  <span className="d-block mt-lg-4 mt-2 pt-1">
                    We are passionately curious as we believe this is the fuel
                    for discovery, inquiry and learning. Our main objective is
                    to be customer obsessed and build products that are everyday
                    utilities for businesses.
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-xxl-4 mt-3 mt-lg-0">
                <img src={magic} alt="magic" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Magic;
