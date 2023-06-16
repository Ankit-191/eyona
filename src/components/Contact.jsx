import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section className="bg_black_100 py-5 py-xl-0">
        <Container className="container_1552 contacttext contacth_1000 position-relative z-3 d-flex align-items-center">
          <Row className="justify-content-between">
            <Col lg={5} xl={4}>
              <p className="ff_inter fw_700 fs_7xl clr_white mb-xl-5 pb-xl-1">
                Let’s Talk
              </p>
              <p className="ff_inter fw_400 fs_lg clr_gray_300">
                We would love to hear from you. Fill out the form or contact us
                sending an email to.
              </p>
              <a href="#" className="ff_inter fw_700 fs_2sm clr_red">
                contact@eyona.co
              </a>
              <div className="mt-lg-4 mt-3 pt-lg-2 mb-5 mb-lg-0">
                <a href="#" className="linkdin">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.26433 28.7545H0.102661V8.21558H6.26433V28.7545ZM28.8571 28.7545H22.6955V17.7826C22.6955 14.9236 21.6767 13.5002 19.6578 13.5002C18.0578 13.5002 17.0431 14.2971 16.5338 15.893V28.7545H10.3721C10.3721 28.7545 10.4543 10.2695 10.3721 8.21558H15.2357L15.6116 12.3234H15.7389C17.0021 10.2695 19.021 8.87693 21.7897 8.87693C23.8949 8.87693 25.5976 9.46229 26.8977 10.9329C28.206 12.4055 28.8571 14.3814 28.8571 17.1562V28.7545Z"
                      fill="white"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                      fill="white"
                      fill-opacity="0.15"
                    />
                  </svg>
                </a>
              </div>
            </Col>
            <Col lg={5} xl={4}>
              <div className="message me-xxl-5">
                <input
                  type="text"
                  className="w-100 bg-transparent border-0 border-bottom-2 ff_inter fw_400 fs_sm clr_gray_200 mb-md-3 pb-md-3 pb-2 ps-2"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-100 bg-transparent border-0 ff_inter fw_400 fs_sm clr_gray_200 my-4 pb-md-3 pb-2 ps-2"
                  placeholder="Your Email"
                />
                <textarea
                  name="text"
                  placeholder="What would you like to know?"
                  cols="30"
                  rows="6"
                  className="w-100 bg-transparent ff_inter fw_400 fs_sm clr_gray_200 mt-lg-3 ps-2 mb-4"
                ></textarea>
                <button className="ff_montserrat fw_700 fs_md clr_white bg_red rounded-pill sendbtn border-0 mt-md-3">
                  Send Message
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
