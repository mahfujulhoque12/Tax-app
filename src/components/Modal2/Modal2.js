import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import Modal3 from '../Modal3/Modal3';

const Modal2 = (props) => {
  const [showModal3, setShowModal3] = useState('');
  const [formData, setFormData] = useState();


  const handleClose2 = () => {
    setShowModal3(false)
  };

  const handleOpenModal3 = () => {
    setShowModal3(true);
  };


  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
  };


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>
              Tax Estimation Tool
              <FontAwesomeIcon className='calculator' icon={faCalculator} />
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className='income d-flex flex-column'>
            <label htmlFor='' className='mb-2'>
              Monthly Gross Income
            </label>
            <input
              className='form-control'
              type='text'
              placeholder='Monthly Gross Income'
              onChange={handleChange}
              name='salary'
            />
          </div>

          <div className='gender mt-3 d-flex flex-column'>
            <label htmlFor='' className='mb-2'>
              Gender
            </label>
            <select
              className='form-control'
              onChange={handleChange}
              name='gender'
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
    </form>
        </Modal.Body>
        <Modal.Footer className='d-flex align-items-center justify-content-center'>
          <Button
            variant='info'
             disabled={!formData}
            onClick={handleOpenModal3}
          >
            Estimate Tax
          </Button>
        </Modal.Footer>
        <Modal3 formData={formData} modalShow3={showModal3} handleClose3={handleClose2}></Modal3>
      </Modal>
    </>
  );
};

export default Modal2;
