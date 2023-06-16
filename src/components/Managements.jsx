import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teammanagement1 from "../assets/img/png/teammanagement1.png";
import teammanagement2 from "../assets/img/png/teammanagement2.png";
import teammanagement3 from "../assets/img/png/teammanagement3.png";
import teammanagement4 from "../assets/img/png/teammanagement4.png";
import teammanagement5 from "../assets/img/png/teammanagement5.png";
import teammanagement6 from "../assets/img/png/teammanagement6.png";
import teammanagement7 from "../assets/img/png/teammanagement7.png";
import teammanagement8 from "../assets/img/png/teammanagement8.png";
const Managements = () => {
  return (
    <>
      <section className="bg_black_100 py-5 py-xl-0">
        <Container className="container_1544 managements_1100 d-flex align-items-center position-relative z-2">
          <Row className="align-items-center justify-content-evenly teammanagement">
            <Col xl={9} xxl={6}>
              <p className="ff_inter fw_700 fs_6sm clr_white">
                Our Management Team
              </p>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill managmentimg team_w_215">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement1}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement2}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement3}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement4}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement5}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement6}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement7}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
            <Col xs={6} sm={4} lg={3} xxl={2}>
              <div className="my-lg-5 my-3 position-relative overflow-hidden rounded-pill team_w_215 managmentimg">
                <div className="stephandu text-center">
                <p className="ff_inter fw_700 fs_lg clr_white mb-2">Stephan Du Toit</p>
                <p className="ff_inter fw_400 fs_xsm clr_white mb-0">Chief Operations Officer</p>
                </div>
                <img
                  src={teammanagement8}
                  alt="teammanagement1"
                  className="w-100 rounded-pill"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Managements;
