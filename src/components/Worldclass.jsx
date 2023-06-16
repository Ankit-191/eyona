import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import computer from "../assets/img/webp/laptop.webp";
import girl from "../assets/img/webp/girl.webp";
import girlmeeting from "../assets/img/webp/girlmeeting.webp";
import handonlaptop from "../assets/img/webp/handonlaptop.webp";
import software from "../assets/img/svg/B2B.svg";
import eco from "../assets/img/svg/eco.svg";
import globally from "../assets/img/svg/globally.svg";
import industry from "../assets/img/svg/industry.svg";
const Worldclass = () => {
  return (
    <>
      <section className="py-5 my-lg-5">
        <Container className="worldclass_container">
          <p className="ff_inter fw_700 fs_20xl clr_black_100 mb-0 lh_eyona">
            Eyona are
          </p>
          <p className="ff_inter fw_700 fs_15xl mb-0 text-end">
            <span className="text_worldclass"> World Class</span>
            <a href="#" className="clr_red ms-2">
              Experts
            </a>
          </p>
        </Container>
        <Container className="eyonacontainer py-xl-5 mt-lg-5 mt-4">
          <Row className="text-center">
            <Col lg={6}>
              <div className="pt-xl-5 mt-xl-5 ps-xxl-4 ms-xxl-3">
                <p className=" ff_montserrat fw_700 fs_2sm clr_gray_300">
                  We create
                  <a href="#" className="clr_red mx-1">
                    SaaS products
                  </a>
                  for markets that have the ability to generate substantial
                  annual recurring revenue (ARR). Leveraging big data and
                  automating matket facing business processes.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d_grid mt-2 mt-lg-0">
                <div className="items_1 items">
                  <img src={girl} alt="girl" className="w-100 h-100" />
                </div>
                <div className="items_2 items">
                  <img src={computer} alt="" className="w-100 h-100" />
                </div>
                <div className="items_3 items">
                  <img
                    src={girlmeeting}
                    alt="girlmeeting"
                    className="w-100 h-100"
                  />
                </div>
                <div className="items_4 items">
                  <img
                    src={handonlaptop}
                    alt="handonlaptop"
                    className="w-100 h-100"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="container_1576 py-lg-4 pt-4">
          <Row className="justify-content-between text-center text-lg-start">
            <Col lg={6} xl={5}>
              <div className="ps-xxl-2 mt-4 mt-lg-0">
                <img
                  src={software}
                  alt="software"
                  className="mb-3 mb-lg-4 w_197 h_197"
                />
                <p className="ff_montserrat fw_700 fs_3xl clr_black_100 pt-lg-2 mb-2 mb-lg-4">
                  B2B Software
                </p>
                <p className=" ff_montserrat fw_400 fs_lg clr_gray_300 mb-0 mb-lg-3">
                  Our products are the forefront of the industry, creating
                  streamlined processing for your business needs.
                </p>
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="mt-lg-5 mt-4 pt-lg-5">
                <img src={eco} alt="eco" className="mb-3 mb-lg-4 w_197 h_197" />
                <p className="ff_montserrat fw_700 fs_3xl clr_black_100 pt-lg-2 mb-2 mb-lg-4">
                  Eco-system Ownership
                </p>
                <p className=" ff_montserrat fw_400 fs_lg clr_gray_300 mb-0 mb-lg-3">
                  We provide ourselves on making our products easy to use and
                  personalised for your business needs.
                </p>
              </div>
            </Col>
            <Col lg={6} xl={4}>
              <div className="ps-xxl-2 mt-4 mt-lg-0">
                <img
                  src={globally}
                  alt="globally"
                  className="mb-3 mb-lg-4 w_197 h_197"
                />
                <p className="ff_montserrat fw_700 fs_3xl clr_black_100 pt-lg-2 mb-2 mb-lg-4">
                  Globally Relevant
                </p>
                <p className=" ff_montserrat fw_400 fs_lg clr_gray_300 mb-0 mb-lg-3">
                  All our software if fit for purpose and easy to scale across
                  your organisation in any country.
                </p>
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="mt-lg-5 mt-4 pt-lg-5">
                <img
                  src={industry}
                  alt="industry"
                  className="mb-3 mb-lg-4 w_197 h_197"
                />
                <p className="ff_montserrat fw_700 fs_3xl clr_black_100 pt-lg-2 mb-2 mb-lg-4">
                  Industry Specific
                </p>
                <p className=" ff_montserrat fw_400 fs_lg clr_gray_300 mb-0 mb-lg-3">
                  Our products are predominately tailored for a specific
                  vertical or industry. We empower domain experts, to ensure you
                  the best results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Worldclass;
