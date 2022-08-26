import "./App.scss";
import Form from "./components/form/Form";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navigation from "./components/navigation/Navigation";
import icon from "./assets/icon.svg";
import CarouselSlider from "./components/carousel/Carousel";
import Features from "./components/Features/Features";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container">
        <Jumbotron>
          <div className="col">
          <p className="text-start mb-0">lorem ipsum some copy here</p>
            <h1 className="text-start">
              We are here
              <br /> to help
            </h1>
            
          </div>
          <div className="col">
            <img src="#" alt="" />
          </div>
         
        </Jumbotron>
        <Features />
      </div>
      <div className="container-fluid bg-light">
        <CarouselSlider></CarouselSlider>
      </div>

      <div className="container pb-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-5 mb-5 p-3 d-flex flex-column justify-content-center">
            
            <div><img src={icon} width={263} height={263} alt="" />
            &nbsp;<span>CENTER POINT</span></div>
            <h3 className="mt-5 text-start">Promising subheading</h3>
            <p className="text-start">
              At rerum harum cum minima error eos voluptates dignissimos non
              ipsam voluptas aut asperiores repellat ut nihil amet.
            </p>
          </div>

          <div className="col-sm-12 col-md-6 mt-5 mb-5 shadow-lg bg-dark">
            <Form></Form>
          </div>
        </div>
      </div>
      <nav className="navbar  navbar-light bg-light mt-5">
        <div className="container">
          <a className="navbar-brand" href="/">
            Footer
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
