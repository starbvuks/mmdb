// import packages
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import { AuthProvider } from "./components/contexts/AuthContext.js";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import ActorList from "./components/Actors/ActorPage.jsx";
import Watchlist from "./components/Watchlist/Watchlist.jsx";

// import Styles
import "./App.css";

// wrapped in auth provider
function App() {
  return (
    <Router>
      <>
        <AuthProvider>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/movies">
            <Header />
            <MovieList />
            <Footer />
          </Route>
          <Route exact path="/actors">
            <Header />
            <ActorList />
            <Footer />
          </Route>
          <Route exact path="/watchlist">
            <Header />
            <Watchlist />
            <Footer />
          </Route>
        </AuthProvider>
      </>
    </Router>
  );
}

export default App;
