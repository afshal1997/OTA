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
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/outsource-to-asia"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="mainBannerContact">
          <ul>
            <li>
              <a href="tel:+16312506471">
                <i className="fas fa-phone-alt"></i> +1 631-250-6471
              </a>
            </li>

            <li>
              <a href="mailto:info@outsourcetoasia.co">
                <i className="fas fa-envelope-open"></i>info@outsourcetoasia.co
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default index;
