import React from "react";
import { Container } from "react-bootstrap";
const Eyona = () => {
  return (
    <>
      <section className="bg_red eyona_circle position-relative">
        <Container className="eyonacontainer position-relative eyonah_1271px overflow-hidden">
          <div className="d-flex flex-column justify-content-center h-100 position-relative z-3">
            <p className="ff_montserrat fw_700 fs_5xl clr_white mb-lg-5 mb-4 lh_70px passion_mw_1258px">
              It’s our passion. Our business. We love to see our customers
              reinventing themselves, people discovering their true potential
              and creating products to enable industries.
            </p>
            <p className="ff_montserrat fw_500 fs_lg clr_gray_200 innovation_mw_933px">
              To us innovation means: Seeing the bigger picture, striving for
              better insights, always curious, thinking the unthinkable, the
              impossible and then making it happen. In other words, we support
              our customers with the business and technology know-how they need
              to continuously improve and gain new advantages to win now and in
              the future.
            </p>
          </div>
          <div className="position-absolute top_0 end-0">
            <span className="ff_inter fw_900 fs_45xl m-0 clr_white opacity_6 d-block lh_320px">
              e
            </span>
            <span className="ff_inter fw_900 fs_45xl m-0 clr_white opacity_6 d-block lh_320px mb-5">
              y
            </span>
            <span className="ff_inter fw_900 fs_45xl m-0 clr_white opacity_6 d-block lh_320px">
              o
            </span>
            <span className="ff_inter fw_900 fs_45xl m-0 clr_white opacity_6 d-block lh_320px">
              n
            </span>
            <span className="ff_inter fw_900 fs_45xl m-0 clr_white opacity_6 d-block lh_320px">
              a
            </span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Eyona;
