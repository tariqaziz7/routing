import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <ul className="App-header">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </li>
    </ul>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About />}
          ></Route>
          <Route
            exact
            path="/contact"
            element={<Contact />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
