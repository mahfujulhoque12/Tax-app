import React from 'react';

const Works = () => {
    return (
        <div className='container how-it-works mt-5'>
            <div className="row">
               <h1>How it works</h1>
               <div className="col-lg-4 col-md-12 mt-5 ">
                <div className="works-content h-100">
                    <img className='works-img' src="./images/file1.png" alt="" />
                    <h5>Safe File Transfer</h5>
                    <p>Securely submit your files and finalize your payment. Your information is encrypted, ensuring confidentiality  and security throughout the entire process.</p>
                </div>
               </div>
               <div className="col-lg-4 col-md-12 mt-5 ">
                <div className="works-content h-100">
                    <img className='works-img' src="./images/file2.png" alt="" />
                    <h5>Check & Send</h5>
                    <p>Upon payment receipt, our team thoroughly examines your documents, crafting your tax file with accurate calculations while prioritizing adherence to your specific instructions.</p>
                </div>
               </div>
               <div className="col-lg-4 col-md-12 mt-5 ">
                <div className="works-content h-100">
                    <img className='works-img' src="./images/file4.png" alt="" />
                    <h5>Receive Confirmation</h5>
                    <p>Upon your confirmation, we proceed to submit the file. Easily download your acknowledgment and certification directly from the application, ready for any future needs.</p>
                </div>
               </div>
            </div>
          
        </div>
    );
};

export default Works;