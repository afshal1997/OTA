import React from "react";
import { Modal } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Welcome from "../../../Assets/WelcomePopup/welcome.jpg";
const WelcomePopup = ({ show, handleClose }) => {
  return (
    <div className="">
      <Zoom center cascade>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          centered
          className="welcome-popup"
        >
          <Modal.Body>
            <img src={Welcome} className="w-100" />
          </Modal.Body>
        </Modal>
      </Zoom>
    </div>
  );
};

export default WelcomePopup;
