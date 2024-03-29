import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.module.scss'
import smile from "../../assets/smile.jpg"
import leftQuote from '../../assets/icon_quote_left.svg'
import rightQuote from '../../assets/icon_quote_right.svg'
function CarouselSlider() {
  return (
    <Carousel className='carousel-wrapper mb-5' showArrows={false}>
    <div className="container mt-5">
      <div className="row pt-5">
        <div className="col-sm-12 col-md-5 mb-5">
          <img src={smile}  alt="" className='rounded-circle shadow-lg'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
          <img src={leftQuote} alt="quote" width={25} height={30} className="float-start"/>
            <p className='p-3 mt-4 mb-0 text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis auctor elit sed vulputate mi sit amet mauris
              commodo. At imperdiet dui accumsan sit amet nulla facilisi
              morbi. Nibh cras pulvinar mattis nunc sed blandit. Cursus
              eget nunc scelerisque viverra mauris in aliquam. Id
              faucibus nisl tincidunt eget nullam. Bibendum neque
              egestas
            </p>
            <img src={rightQuote} alt="quote" width={25} height={30} className="float-end"/>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5  p-lg-5 ">
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-5">
        <img src={smile}  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p className='p-3 text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis auctor elit sed vulputate mi sit amet mauris
              commodo. At imperdiet dui accumsan sit amet nulla facilisi
              morbi. Nibh cras pulvinar mattis nunc sed blandit. Cursus
              eget nunc scelerisque viverra mauris in aliquam. Id
              faucibus nisl tincidunt eget nullam. Bibendum neque
              egestas
            </p>
            <p className="quoteMark text-end mt-5">"</p>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5  p-lg-5">
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-5">
        <img src={smile}  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p className='p-3 text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis auctor elit sed vulputate mi sit amet mauris
              commodo. At imperdiet dui accumsan sit amet nulla facilisi
              morbi. Nibh cras pulvinar mattis nunc sed blandit. Cursus
              eget nunc scelerisque viverra mauris in aliquam. Id
              faucibus nisl tincidunt eget nullam. Bibendum neque
              egestas
            </p>
            <p className="quoteMark text-end mt-5">"</p>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  )
}

export default CarouselSlider