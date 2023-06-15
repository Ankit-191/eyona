import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import m from "../assets/img/svg/M.svg";
import diageo from "../assets/img/svg/diageo.svg";
import Bacardi from "../assets/img/svg/Bacardi.svg";
import Heineken from "../assets/img/svg/Heineken.svg";
import redbull from "../assets/img/svg/redbull.svg";
import Pernod from "../assets/img/svg/Pernod.svg";
import kfc from "../assets/img/svg/kfc.svg";
import Halewood from "../assets/img/svg/Halewood.svg";
import Beam from "../assets/img/svg/Beam.svg";
import sab from "../assets/img/svg/sab.svg";
import edrington from "../assets/img/svg/edrington.svg";
import burgerking from "../assets/img/svg/burgerking.svg";
import campari from "../assets/img/svg/campari.svg";
const Relasitionship = () => {
  return (
    <>
      <section className="py-5 my-lg-5">
        <Container className="container_1544">
          <p className=" ff_inter fw_700 fs_8xl lh_100px clr_black_100 text-center">
            We’ve built relationships{" "}
            <span className="d-lg-block">
              {" "}
              based on
              <a href="#" className="clr_red mx-2">
                trust.
              </a>
            </span>
          </p>
          <p className="ff_inter fw_400 fs_lg clr_gray_300 text-center mb-lg-5 mb-4 pb-lg-5">
            We pride ourselves on having global companies as our partners & we
            also
            <span className="d-md-block">
              service independant small businesses. We love to work with all
              businesses big or small.
            </span>
          </p>
          <div className="bg_mapimg d-flex align-items-center">
            <Row className="text-center align-items-center">
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img src={m} alt="m" />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img src={diageo} alt="diageo" className="relationsips_imgw" />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img
                  src={Bacardi}
                  alt="Bacardi"
                  className="relationsips_imgw"
                />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img
                  src={Heineken}
                  alt="Heineken"
                  className="relationsips_imgw"
                />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img
                  src={redbull}
                  alt="redbull"
                  className="relationsips_imgw"
                />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img src={Pernod} alt="Pernod" className="relationsips_imgw" />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img src={kfc} alt="kfc" />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img
                  src={Halewood}
                  alt="Halewood"
                  className="relationsips_imgw"
                />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img src={Beam} alt="Beam" className="relationsips_imgw" />
              </Col>
              <Col xs={6} md={4} lg={2} className="mb-5">
                <img src={sab} alt="sab" />
              </Col>
              <Col xs={6} md={4} lg={2} className="mb-5">
                <img
                  src={edrington}
                  alt="edrington"
                  className="relationsips_imgw"
                />
              </Col>
              <Col xs={6} md={4} lg={2} className="mb-5">
                <img src={burgerking} alt="burgerking" />
              </Col>
              <Col xs={6} md={4} lg={3} className="mb-5">
                <img
                  src={campari}
                  alt="campari"
                  className="relationsips_imgw"
                />
              </Col>
            </Row>
          </div>
          <Row className="justify-content-center text-center mx-1 mx-sm-0">
            <Col xs={4} sm={3} lg={2} className="bg_red borderradius py-3">
              <p className="ff_inter fw_700 fs_4xl clr_white mb-0">6</p>
              <p className="ff_inter fw_700 fs_sm clr_gray_200">Products</p>
            </Col>
            <Col xs={4} sm={3} lg={2} className="bg_red py-3">
              <p className="ff_inter fw_700 fs_4xl clr_white mb-0">5</p>
              <p className="ff_inter fw_700 fs_sm clr_gray_200">Countries</p>
            </Col>
            <Col xs={4} sm={3} lg={2} className="bg_red breymployees py-3">
              <p className="ff_inter fw_700 fs_4xl clr_white mb-0">50+</p>
              <p className="ff_inter fw_700 fs_sm clr_gray_200">Employees</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Relasitionship;
