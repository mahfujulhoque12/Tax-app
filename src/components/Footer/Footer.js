import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className='footer-wrap mt-5'>
            <div className="container footer  ">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                        <h3 className='text-success'>Logo</h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                        <ul>
                            products
                            <li><a href="">Doel Tax</a></li>
                            <li><a href="">Doel Start</a></li>
                            <li><a href="">Dole Recruitment</a></li>
                            <li><a href="">Doel HRIS</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                        <ul>
                            Company
                            <li><a href="">Blog</a></li>
                            <li><a href="">Terms & Condition</a></li>
                            <li><a href="">Return & Refund Policy</a></li>
                            <li><a href="">Return Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                        <ul>
                        CONTACT
                        <li>support@doel.io</li>
                        <li>0170520014</li>
                        <li>Level-10, House-1, Road-11, Block-H, Banani, Dhaka</li>
                        <li>
                            <div className="social d-flex gap-3">
                                <a href=""><FontAwesomeIcon icon={faFacebook } /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a> 
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default Footer;