import "./App.scss";
import Form from "./components/form/Form";
import Jumbotron from "./components/jumbtron/Jumbotron";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container">
        <Jumbotron><h1>Jumbotron</h1><p>lorem ipsum</p></Jumbotron>
        <div className="row">
          <div className="col-12 text-start mt-5">
            <h2>Promising Subheading</h2>
            <p>
              supporting copy lorem Ipsum, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="col-12 text-start mt-5">
            <h2>What we do</h2>
            <p>
              supporting copy lorem Ipsum, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="col-4">media</div>
          <div className="col-4">media</div>
          <div className="col-4">media</div>
        </div>
        <div className="row">
          <div className="col">

            <div className='mt-4 p-5 bg-primary text-white rounded'>
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
