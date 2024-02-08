import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TaxModal = (props) => {

    return (
        <>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Tax Journey with Doel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Streamline your tax experience with Shapla Tax. We combine clarity and precision, ensuring efficient and straightforward tax filing. Explore our process below:</p>
            <div className="review-submit mt-5">
                <div className="frist-review d-flex gap-3">
                    <div className="r-left">
                        <img src="./images/ss1.png" className='review-img' alt="" />
                    </div>
                    <div className="r-right">
                        <h6>Safe Filing:</h6>
                        <p>Securely submit your documents and finalize payment. Your data is encrypted and kept confidential throughout the entire process, ensuring privacy and security.</p>
                    </div>
                </div>
                <div className="frist-review d-flex gap-3 mt-3">
                    <div className="r-left">
                        <img src="./images/ss2.png" className='review-img' alt="" />
                    </div>
                    <div className="r-right">
                        <h6>Review & Ready:</h6>
                        <p>Following payment receipt, our team meticulously reviews your documents, prepares the tax file, and ensures accurate calculations, adhering to your specific instructions.</p>
                    </div>
                </div>
                <div className="frist-review d-flex gap-3 mt-3">
                    <div className="r-left">
                        <img src="./images/ss3.png" className='review-img' alt="" />
                    </div>
                    <div className="r-right">
                        <h6>Authorize & File:</h6>
                        <p>Upon your approval, we submit the file. Easily download your acknowledgment and certification from the app for future needs.</p>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
    );
};

export default TaxModal;