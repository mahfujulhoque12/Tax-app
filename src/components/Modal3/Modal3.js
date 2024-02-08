
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import ChooseModal from '../ChooseModal/ChooseModal'
import { useState } from 'react';

const Modal3 = (props) => {
  console.log(props.formData,'hhhhhhhhhhhhhh')
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const annual_salary = props?.formData?.salary * 12;

    return (
      <>
  
        <Modal show={props.modalShow3} onHide={props.handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Tax Calculator Quick Forecast <FontAwesomeIcon className='calculator' icon={faBolt} />
          
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Income Details</h5>
              <div className='d-flex justify-content-between text-muted mt-3'>
                <p>Monthly Gross Salary</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {props.formData?.salary}</p>
              </div>
              <div  className='d-flex justify-content-between text-muted margin-top'>
                <p>Annual Gross Salary</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {annual_salary}</p>
              </div>
            </div>

            <div>
              <h5>Breakdown of Income</h5>
              <div className='d-flex justify-content-between text-muted mt-3'>
                <p>Basic Pay</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 80000</p>
              </div>
              <div  className='d-flex justify-content-between text-muted margin-top'>
                <p>House Rent Allowance</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 55080</p>
              </div>
              <div  className='d-flex justify-content-between text-muted margin-top'>
                <p>Medical Allowance</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 12080</p>
              </div>
            </div>

            <div>
              <h5>Income Tax Payable</h5>
              <div className='d-flex justify-content-between text-muted mt-3'>
                <p>Total Taxable Income</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 180000</p>
              </div>
              <div  className='d-flex justify-content-between text-muted margin-top'>
                <p>Income Tax Payable</p>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 00</p>
              </div>
    
            </div>
            <div className='income-details-des mt-3'>
              <p className='text-muted'>Kindly be aware that the tax approximations produced by our AI-driven Tax Estimation Tool aim to provide you with a rough estimate of your tax obligations. For precise and thorough tax calculations, we suggest considering our professional tax filing service. By doing so, we'll ensure accurate tax assessments and a seamless submission of your tax returns, all in adherence to the latest regulations and guidelines.</p>
            </div>
           <div className='d-flex justify-content-center mt-3'>
            <Button className='btn btn-info' 
              onClick={()=>setShow(true)}
            >Start Tax Filing</Button>
           </div>
          </Modal.Body>
         <ChooseModal show={show} handleClose={handleClose}></ChooseModal>
        </Modal>
      </>
    );
};

export default Modal3;