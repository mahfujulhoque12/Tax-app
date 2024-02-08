import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {  faAsterisk } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TaxModal from '../components/TaxModal/TaxModal';
import { useState } from 'react';


const Myself = () => {
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
                      <h3  className='text-light'>Information</h3>
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
                               <p className='text-muted'>Embark on your path to hassle-free tax submission! In this initial phase, we'll collect essential details to tailor your interaction. </p> 
                          </div>
                          <div className="details">
                            <h3>Your Information</h3>
                            <div className='mt-3'>
                                <label htmlFor="">Full Name <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                <input className='form-control mt-2' type="text" placeholder='full name' required/>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="">Phone Number <FontAwesomeIcon className='start-color' icon={faAsterisk} /> </label>
                                <input className='form-control mt-2' type="text" placeholder='phone number' required/>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="">City <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                <select className='form-control mt-2' required>
                                    <option className='text-muted'>Select City</option>
                                    <option>Dhaka</option>
                                    <option>Comilla</option>
                                </select>
                            </div>
                          </div>
                          <div className='mt-5 mx-auto'>
                           <Link href="/documents" className='btn btn-info'> Continue</Link>
                          </div>
                      </div>
                  </div>
              </div>
             
         </div> 
         <TaxModal show={show} handleClose= {handleClose}></TaxModal>
      </div>
    );
};

export default Myself;