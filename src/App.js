import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//icon

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import ProductDetail from "./pages/Detail";
import IntroScreen from "./pages/IntroScreen";
// Components
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<IntroScreen />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/item/:id" element={<ProductDetail />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
