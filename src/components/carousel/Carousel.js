import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './carousel.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselSlider() {
  return (
    <Carousel>
    <div className="container mt-5 bg-light p-5 carousel-wrapper">
      <div className="row">
        <div className="col-sm-12 col-md-5 mb-5">
          <img src="https://via.placeholder.com/150"  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p className='p-3'>
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
            <small className='text-black-50'>John Doe | CEO<br />agency of the year</small>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-5 mb-5">
          <img src="https://via.placeholder.com/150"  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p className='p-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis auctor elit sed vulputate mi sit amet mauris
              commodo. At imperdiet dui accumsan sit amet nulla facilisi
              morbi. Nibh cras pulvinar mattis nunc sed blandit. Cursus
              eget nunc scelerisque viverra mauris in aliquam. Id
              faucibus nisl tincidunt eget nullam. Bibendum neque
              egestas c
            </p>
            <p className="quoteMark text-end">"</p>
            <small className='text-black-50'>John Doe | CEO<br />agency of the year</small>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-5 mb-5">
          <img src="https://via.placeholder.com/150"  alt="" className='rounded-circle'/>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p className='p-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis auctor elit sed vulputate mi sit amet mauris
              commodo. At imperdiet dui accumsan sit amet nulla facilisi
              morbi. Nibh cras pulvinar mattis nunc sed blandit. Cursus
              eget nunc scelerisque viverra mauris in aliquam. Id
              faucibus nisl tincidunt eget nullam. Bibendum neque
              egestas c
            </p>
            <p className="quoteMark text-end">"</p>
            <small className='text-black-50'>John Doe | CEO<br />agency of the year</small>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  )
}

export default CarouselSlider