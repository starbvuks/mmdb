import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import components
import Home from "./components/Home.jsx";
import Header from "./components/Header/Header.jsx";

// import Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Header />
      </div>
    </Router>
  );
}

export default App;
