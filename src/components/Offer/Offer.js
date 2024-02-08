import React from 'react';

const Offer = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h5>WHAT WE OFFER</h5>
                    <div className="col-lg-6 col-md-12">
                        <div className="offer-right">
                          <h1>We believe that selecting the right financial services firm is paramount to the financial success!</h1>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="offer-left">
                            <p className='text-muted'>Highly qualified tax consultants with many years of experience in the field offer a full range of services to help you build a sound financial future.</p>
                            <p className='text-muted mt-4'>Tax advice received in time allows you to avoid many problems with the tax authorities.  We will help you as efficiently as possible and in a short time.</p>
                            <div class="button-warp d-flex gap-3">
                                <a href="" className='btn-1'>Free Consultation</a>
                                <a href="" className='btn-2 btn btn-outline-dark'>More About Us</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;