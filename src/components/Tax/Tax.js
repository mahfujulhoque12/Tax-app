import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import TaxModal from '../TaxModal/TaxModal';
import { useState } from 'react';
import Link from 'next/link';

const Tax = () => {
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
                        <h3  className='text-light'>TaxDrive</h3>
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
                            <img src="./images/taxd.png" alt="" />
                            <p className='mt-5 mb-5'>Start filing taxes by uploading documents. Begin the process now.</p>
                            <a href="" className='btn btn-info'>Begin Tax Submission</a>
                        </div>
                    </div>
                </div>
               
           </div> 
           <TaxModal show={show} handleClose= {handleClose}></TaxModal>
        </div>
    );
};

export default Tax;