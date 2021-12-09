import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoModal = ({ show, handleClose, image }) => {
    return (
        <div>


            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body>
                    <img src={image} alt="image" width="100%"/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default VideoModal
