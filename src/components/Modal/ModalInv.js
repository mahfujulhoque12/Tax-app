import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ModalInv = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h4><FontAwesomeIcon className='icon-color' icon={faStar} /> Explore Exclusive Features on Our Web App! <FontAwesomeIcon className='icon-color' icon={faStar} /></h4> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <p className='text-muted'>Immerse yourself in a personalized journey, accessing exclusive features found solely on our mobile app. Unleash the complete range of our services, all at your fingertips.</p>
          <h5 className='text-bold mt-3'>Go to our website and elevate your experience!</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">
            Go to our page
          </Button>
          
        </Modal.Footer>
      </Modal>
    );
};

export default ModalInv;