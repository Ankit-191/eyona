import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import truedata from "../assets/img/svg/truedatatext.svg";
import dataunifying from "../assets/img/svg/dataunifying.svg";
import repforcetext from "../assets/img/svg/repforcetext.svg";
import fildshales from "../assets/img/svg/fieldsales.svg";
import assetforcetext from "../assets/img/svg/assetforce.svg";
import facilitymanagement from "../assets/img/svg/facility.svg";
import easyhr from "../assets/img/svg/EASYHR.svg";
import easymanagment from "../assets/img/svg/HRmangement.svg";
import zoosh from "../assets/img/svg/zoosh.svg";
import gigzoosh from "../assets/img/svg/gigzoosh.svg";
import learningmanagement from "../assets/img/svg/learningmanagement.svg";
import arivu from "../assets/img/svg/arivu.svg";
const Ourproudect = () => {
  return (
    <>
      <section className="py-lg-5">
        <Container className="container1466">
          <h4 className="ff_inter fw_700 fs_8xl clr_black_100 text-center mb-4">
            Our products.
          </h4>
          <p className="ff_inter fw_400 fs_lg clr_gray_300 text-center mb-0 mb-lg-3">
            We exclusively create and build B2B software. This specialization
            has helped us build
            <span className="d-lg-block">
              unmatched deep domain expertise for global fit and scale.
            </span>
          </p>
          <Row className="justify-content-center">
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="truedatacard h-100 position-relative overflow-hidden me-xxl-2 d-flex flex-column justify-content-between">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 ms-xxl-4">
                  <img src={truedata} alt="truedata" className="mb-xxl-3" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-3 mt-md-4">
                    Data Unifying & Analytics Platform
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Basecamp software to automate the collation, cleaning,
                    integrating and visualising for all of your businesses
                    market facing sales data across all channels.
                  </p>
                </div>
                <img
                  src={dataunifying}
                  alt="dataunifying"
                  className="w-100 mt_neg52"
                />
              </div>
            </Col>
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="repforcecard ms-xxl-2 h-100 d-flex flex-column justify-content-between">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 ms-xxl-4">
                  <img src={repforcetext} alt="repforcetext" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-md-4 mt-3">
                    Field Sales Automation Software
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Provides superior field sales routing capability, retail
                    execution management and sales order integration for mobile
                    workforces within businesses.
                  </p>
                </div>
                <img
                  src={fildshales}
                  alt="fildshales"
                  className="w-100 mt_neg290"
                />
              </div>
            </Col>
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="assetforcecard me-xxl-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 ms-xxl-4">
                  <img src={assetforcetext} alt="assetforcetext" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-md-4 mt-3">
                    Facility & Maintenance Management Software
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Web and mobile-based CMMS software that offers asset
                    management, downtime tracking & workflow automation
                    solutions of businesses.
                  </p>
                </div>
                <img
                  src={facilitymanagement}
                  alt="facilitymanagement"
                  className="w-100 mt_neg170"
                />
              </div>
            </Col>
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="hrmangement ms-xxl-2 h-100 d-flex flex-column justify-content-between overflow-hidden position-relative">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 ms-xxl-4">
                  <img src={easyhr} alt="easyhr" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-md-4 mt-3">
                    HR Management Software
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Human resource software solution that combines several
                    systems and processes to manage and optimize daily HR tasks
                    and the overall HR goals of a given organization.
                  </p>
                </div>
                <img
                  src={easymanagment}
                  alt="easymanagment"
                  className="w-100 mt_neg136"
                />
              </div>
            </Col>
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="zooshcard me-xxl-2 h-100 d-flex flex-column justify-content-between overflow-hidden position-relative">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 me-xxl-5">
                  <img src={zoosh} alt="easyhr" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-md-4 mt-3">
                    Gig Economy for Activations
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Interconnected ecosystem for promotions management. Where
                    brands and agencies promote products and capture consumer
                    feedback and behaviour.
                  </p>
                </div>
                <img src={gigzoosh} alt="gigzoosh" className="w-100" />
              </div>
            </Col>
            <Col md={9} lg={6} className="my-lg-5 mt-4 py-xl-2">
              <div className="arivucard ms-xxl-2 h-100 d-flex flex-column justify-content-between overflow-hidden position-relative">
                <div className="px-2 px-md-4 px-xxl-5 pt-xxl-5 mt-md-5 mt-3 me-xxl-4">
                  <img src={arivu} alt="arivu" />
                  <p className="ff_inter fw_700 fs_2xl clr_black_100 mb-2 mb-md-2 mt-md-4 mt-3">
                    Learning Management Software
                  </p>
                  <p className="ff_inter fw_400 fs_sm clr_gray_300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <img
                  src={learningmanagement}
                  alt="learningmanagement"
                  className="w-100 mt_neg240"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Ourproudect;
