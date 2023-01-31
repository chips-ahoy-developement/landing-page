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
          <div className="col-md-12 d-flex align-items-center">
          <div>
            <h1 className="text-start">
              Empowering your digital vision with cutting-edge solutions.
            </h1>
            </div>
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
            <h3 className="mt-5 text-start">Delivering results beyond your expectations</h3>
            <p className="text-start">Join the Center Point community and be the first to know about our latest offerings and exclusive deals. Sign up for our mailing list today and receive a special offer just for new subscribers. As a valued member, you'll be the first to hear about our exciting new projects, industry updates, and promotions. And don't worry, we respect your privacy and will never share your information. Give us the chance to show you what sets us apart. Sign up now and experience the Center Point difference for yourself.</p>
          </div>

          
            <Form></Form>
          
        </div>
      </div>
      <nav className="navbar  navbar-light bg-light mt-5">
       <div className="container">
          <a className="navbar-brand" href="/">
            &copy; Center Point Studio - Chicago IL
          </a>
        
        <div className='d-flex'>
        <img src={icon} alt="" width="30" height="24" className="align-text-top" />CENTER POINT
        </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
