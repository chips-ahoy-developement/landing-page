import "./App.scss";
// import Form from "./components/form/Form";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navigation from "./components/navigation/Navigation";

import CarouselSlider from "./components/carousel/Carousel";
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
          <div className="col-sm-12 col-md-9 text-start mt-5 mb-5 promising-subheading">
            <h2>A Design and Development Agency</h2>
            <p>
              supporting copy lorem Ipsum, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
          </div>

          <div className="col-sm-12 col-md-4 mt-5 mb-5">
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
          <div className="col-sm-12 col-md-4 mt-5 ">
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
          <div className="col-sm-12 col-md-4 mt-5 ">
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
        
      </div>
      <div className="container-fluid bg-light">
        <CarouselSlider></CarouselSlider>
        </div>
    </div>
  );
}

export default App;
