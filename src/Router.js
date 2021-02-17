import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contact" component={Contact} exact />
      </main>
    </Router>
  );
};

export default AppRouter;
