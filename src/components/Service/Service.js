

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
        <div className='service-wrap container-fluid'>
            <div className='container service'>
            <div className="row mt-5">
                <h3>Pic Any One</h3>
                <div className="col-lg-4 col-md-12 mt-5 mb-5">
                    <div className="card service-card">
                        <img className='card-img' src="./images/tax6.png" alt="" />
                        <div className='p-3'>
                            <h5 className="text-20 font-600">Tax Mastery by Phone</h5>
                            <p className="text-16 leading-22 font-400 mt-4 ">Get expert tax advice via phone or online for 30 mins, tailored to your needs. Real-time guidance from our team ensures personalized and effective solutions</p>
                            <p className='text-center'><span className="text-neutral-1"><strong className="mr-3">৳</strong>529</span> <a href="" className='text-dark'><FontAwesomeIcon icon={faArrowRight} /></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mb-5">
                    <div className="card service-card">
                        <img className='card-img' src="./images/tax7.png" alt="" />
                        <div className='p-3'>
                            <h5 className="text-20 font-600">Tax Document</h5>
                            <p className="text-16 leading-22 font-400 mt-4 ">Streamline the process of acquiring your official tax certificates swiftly, with a hassle-free experience and minimal documentation requirements for your convenience.</p>
                            <p className='text-center'><span className="text-neutral-1"><strong className="mr-3">৳</strong>929</span> <a href="" className='text-dark'><FontAwesomeIcon icon={faArrowRight} /></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mb-5">
                    <div className="card service-card">
                        <img className='card-img' src="./images/tax8.png" alt="" />
                        <div className='p-3'>
                            <h5 className="text-20 font-600 text-neutral-1">Tax Estimator</h5>
                            <p className="text-16 leading-22 font-400 mt-4 ">Enter your information, and allow our AI-driven tax calculator to provide immediate tax projections, simplifying the estimation process for your convenience.</p>
                            <p className='text-center'><span className="text-neutral-1">free</span> <a href="" className='text-dark'><FontAwesomeIcon icon={faArrowRight} /></a></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
         <p className='boder-bottom'></p>
        </div>
    );
};

export default Service;
