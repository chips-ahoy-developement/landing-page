
import "./App.scss";
// import Form from "./components/form/Form";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navigation from "./components/navigation/Navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Carousel from './components/carousel/Carousel'
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container">
        <Jumbotron>
          <div className="col">
            <h1 className="text-start">
              We are here
              <br /> to help
            </h1>
            <p className="text-start">lorem ipsum</p>
          </div>
          <div className="col">
            <img src="#" alt="" />
          </div>
        </Jumbotron>
        <div className="row mb-5">
          <div className="col-9 text-start mt-5 mb-5 promising-subheading">
            <h2>Promising Subheading</h2>
            <p>
              supporting copy lorem Ipsum, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
          </div>

          <div className="col-4 mt-3 mb-5">
            <p className="subheader">
              DIGITAL MARKETING <span className="underline mt-3 mb-3"></span>
            </p>

            <ul>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
            </ul>
          </div>
          <div className="col-4 mt-3 ">
            <p className="subheader">
              DESIGN / UI / UX <span className="underline mt-3 mb-3"></span>
            </p>

            <ul>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
            </ul>
          </div>
          <div className="col-4 mt-3 ">
            <p className="subheader">
              ENGINEERING <span className="underline mt-3 mb-3"></span>
            </p>

            <ul>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
              <li>
                At rerum harum cum minima error eos voluptates dignissimos non
                ipsam voluptas aut asperiores repellat ut nihil amet.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <Carousel>
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
          {/* <div className="col-6">
            <img src="#" width={354} height={354} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div>
              <p className="quoteMark text-start">"</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                auctor elit sed vulputate mi sit amet mauris commodo. At
                imperdiet dui accumsan sit amet nulla facilisi morbi. Nibh cras
                pulvinar mattis nunc sed blandit. Cursus eget nunc scelerisque
                viverra mauris in aliquam. Id faucibus nisl tincidunt eget
                nullam. Bibendum neque egestas c
              </p>
              <p className="quoteMark text-end">"</p>
            </div>
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col">
            <div className="mt-4 p-5 bg-secondary text-white rounded">
              <Form></Form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
