import React from "react";
import { Container } from "react-bootstrap";

const index = () => {
  return (
    <div>
      <Container fluid>
        <div className="mainBannerSocialMediaIcons">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/outsourcetoasiallc/"
                target="blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/outsource-to-asia"
                target="blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                target="blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCu5Sl1qH8Jr3yaia0c2lTzw" target="blank">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="mainBannerContact">
          <ul>
            <li>
              <a href="tel:+16103791236">
                <i className="fas fa-phone-alt"></i> +1 610-379-1236
              </a>
            </li>

            <li>
              <a href="mailto:info@outsourcetoasia.io">
                <i className="fas fa-envelope-open"></i>info@outsourcetoasia.io
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default index;
