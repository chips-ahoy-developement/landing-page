import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function CarouselSlider() {
  return (
    <Carousel>
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="#" width={354} height={354} />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p>
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
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="#" width={354} height={354} />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p>
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
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="#" width={354} height={354} />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div>
            <p className="quoteMark text-start">"</p>
            <p>
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
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  )
}

export default CarouselSlider