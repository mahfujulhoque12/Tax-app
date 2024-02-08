import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
   <div>

     <Carousel>
      <Carousel.Item>
        <img className='w-100 image-custom' src="./images/pic1.jpg" alt="" />
        <Carousel.Caption>
          <h1 className='slider-heading'>Unraveling The World Of Taxes</h1>
          <p className='slider-text-color'> Tax is a financial obligation imposed by governmental authorities on individuals, businesses, or other entities to fund public expenditures and government operations. Taxes are levied on income, profits, property, goods, and services, among other sources. The tax system varies across jurisdictions and may include income tax, corporate tax, sales tax, property tax, and more. Understanding and managing taxes is crucial for individuals and businesses to ensure compliance with regulations and contribute to the overall functioning of society.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100 image-custom' src="./images/pic2.jpg" alt="" />
        <Carousel.Caption>
          <h1 className='slider-heading'>Pay Tax And Save Money Legally</h1>
          <p className='slider-text-color'>Embrace financial responsibility by paying taxes and legally saving money. Contributing your fair share through tax payments supports essential public services and infrastructure. Simultaneously, leveraging legal avenues for tax savings ensures that you optimize your financial resources. Explore legitimate strategies, deductions, and credits that align with tax laws to minimize your tax liability. This dual approach not only fulfills your civic duty but also empowers you to build a secure financial future through responsible fiscal practices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100  image-custom' src="./images/pic3.jpg" alt="" />
        <Carousel.Caption>
          <h1 className='slider-heading'>Paying Tax Correctly In Time</h1>
          <p className='slider-text-color'>Paying tax correctly and on time is a cornerstone of financial responsibility. By ensuring timely and accurate tax payments, individuals and businesses contribute to the smooth functioning of public services and government operations. Proactive compliance with tax regulations demonstrates a commitment to fiscal integrity and legal adherence. It also helps avoid penalties and legal complications. Embrace a culture of timely and accurate tax payment to foster financial stability, uphold legal obligations, and contribute to the overall welfare of society.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>



  );
}

export default Slider;
