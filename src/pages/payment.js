import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TaxModal from '../components/TaxModal/TaxModal';
import { useState } from 'react';


const payment = () => {

        const [show ,setShow] = useState(false)
        const handleClose = () => setShow(false);
        const [isReportVisible, setIsReportVisible] = useState(false);
   
    
        const toggleReportVisibility = () => {
            setIsReportVisible(!isReportVisible);
          };

        return (
            <div className='tax-drive-wrap'>
            <div className="frist-component">
                 <div className="container tax-drive-content mt-5">
                      <div className=" d-flex justify-content-between">
                          <Link href="/" className='tax-drive-content-color'><FontAwesomeIcon className='tax-drive-color' icon={faChevronLeft} /></Link>
                          <div><h3  className='text-light'>Documents</h3> <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></div>
                          <div className="more-icon d-flex gap-3">
                              <FontAwesomeIcon className='tax-drive-content-color' onClick={()=>setShow(true)} icon={faCircleInfo} />
                             <FontAwesomeIcon className='tax-drive-content-color'icon={faEllipsisVertical} onClick={toggleReportVisibility}/>
                          </div>
                      </div>
                      {isReportVisible && (
                             <div className="report-issue">
                              <p>Report Issue</p>
                             </div>
                       )}
                 </div>
            </div>
             <div className="sec-component">
                  <div className="container d-flex align-items-center justify-content-center">
                      <div className="sec-content  d-flex  justify-content-center align-item-center">
                          <div className='d-flex flex-column justify-content-center'>
                              
                              <div className='myself-des'>
                                   <p className='text-muted'>
                                   You're almost there! Just a quick step remains - making your payment with full security. We promise no hidden fees - just clear and simple steps for you.
                                    </p> 
                              </div>
                              <div className="details">
                                <h3 className='text-muted mb-3'>Make payment</h3>
                               <h4>Payment summary</h4>
                               <hr />
                               <div className="payment-method">
                                <h6>Payment Method</h6>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                <label class="form-check-label" for="inlineCheckbox1">Bkash</label>
                                </div>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                <label class="form-check-label" for="inlineCheckbox2">Visa Card</label>
                                </div>
                               </div>
                              </div>
                              <div className='mt-5 mx-auto'>
                               <Link href="/payment" className='btn btn-info'> Continue</Link>
                              </div>
                          </div>
                      </div>
                  </div>
                 
             </div> 
             <TaxModal show={show} handleClose= {handleClose}></TaxModal>
          </div>
    );
};

export default payment;