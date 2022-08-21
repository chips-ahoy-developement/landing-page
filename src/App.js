import "./App.scss";
import Jumbotron from "./components/jumbtron/Jumbotron";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="container">
        <Jumbotron></Jumbotron>
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
      </div>
    </div>
  );
}

export default App;
