import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.module.scss'
import smile from "../../assets/smile.jpg"
function CarouselSlider() {
  return (
    <Carousel className='carousel-wrapper mb-5' showArrows={false}>
    <div className="container mt-5  p-lg-5 ">
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-5">
          <img src={smile}  alt="" className='rounded-circle' width={350} height={350}/>
        </div>
        <div className="col-sm-12 col-md-7 offset-lg-1 d-flex align-items-center">
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
            <p className="quoteMark text-end">"</p>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5  p-lg-5 ">
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-5">
          <img src="https://via.placeholder.com/150"  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 offset-lg-1 d-flex align-items-center">
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
            <p className="quoteMark text-end">"</p>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5  p-lg-5">
      <div className="row">
        <div className="col-sm-12 col-md-4 mb-5">
          <img src="https://via.placeholder.com/150"  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 offset-lg-1 d-flex align-items-center">
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
            <p className="quoteMark text-end">"</p>
            <p className='text-start'><small className='text-black-50'>John Doe | CEO<br />agency of the year</small></p>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  )
}

export default CarouselSlider