import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import components
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

// import Styles
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
      </>
    </Router>
  );
}

export default App;
