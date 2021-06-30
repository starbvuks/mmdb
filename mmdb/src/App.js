import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import components
import Home from "./components/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// import Styles
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </>
    </Router>
  );
}

export default App;
