import React from "react";
import { Modal } from "react-bootstrap";
import { Zoom } from "react-reveal";
import happydecember from "../../../Assets/WelcomePopup/happydecember.jpg";
const WelcomePopup = ({ show, handleClose }) => {
  return (
    <div className="d-block m-auto">
      <Zoom center cascade>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          centered
          size="xl"
          className="welcome-popup"
        >
          <Modal.Body>
            <img src={happydecember} alt='happydecember' />
          </Modal.Body>
        </Modal>
      </Zoom>
    </div>
  );
};

export default WelcomePopup;
