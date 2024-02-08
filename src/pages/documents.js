import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TaxModal from '../components/TaxModal/TaxModal';
import {  faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FileUpload } from 'primereact/fileupload';
const documents = () => {

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
                                    Simplify the procedure by uploading crucial documents. We'll provide step-by-step guidance. Rest assured, your data security is our priority. We employ advanced encryption to safeguard your stored documents 🔒.
                                    </p> 
                              </div>
                              <div className="details">
                                <h3>Your Information</h3>
                                <Accordion >
                                    
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> <h5>e-TIN Number & Certificate <FontAwesomeIcon className='start-color' icon={faAsterisk} /> </h5></Accordion.Header>
                                        <Accordion.Body>
                                        <div>
                                            <label htmlFor="">e-TIN Number <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                            <input className='form-control mt-2' type="text" placeholder='01254786024' required/>
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="">Add your e-TIN <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                            <FileUpload mode="basic"  className='file-upload'  maxFileSize={1000000}  />
                                            
                                        </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> <h5>NID Number & Card</h5> <FontAwesomeIcon className='start-color' icon={faAsterisk} /></Accordion.Header>
                                        <Accordion.Body>
                                        <div>
                                            <label htmlFor="">NID number<FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                            <input className='form-control mt-2' type="text" placeholder='01254786024' required/>
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="">Add Your NID Card (Front & Back) <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                            <FileUpload mode="basic"  className='file-upload'  maxFileSize={1000000}  />
                                            
                                        </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> <h5>Acknowledgement Receipt <FontAwesomeIcon className='start-color' icon={faAsterisk} /></h5> </Accordion.Header>
                                        <Accordion.Body>
                                        <div className='mt-3'>
                                            <label htmlFor="">Add Your Acknowledgement Receipt <FontAwesomeIcon className='start-color' icon={faAsterisk} /></label>
                                            <FileUpload mode="basic"  className='file-upload'  maxFileSize={1000000}  />
                                            
                                        </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
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

export default documents;