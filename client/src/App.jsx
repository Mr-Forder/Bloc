import React, { useState } from "react";
import { Transactions, Cryptocurrencies, CryptoDetails } from "./components";
import Home from "./pages";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Sidebar from "./components/Sidebar";
import SecondSidebar from "./components/SecondSidebar";
import Footer from "./components/Footer";
import { Switch, Route, Link } from "react-router-dom";
import SendSection from "./components/SendSection";

const App = () => {
  //sidebar toggle func
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Home />
        </Route>
        <Route exact path="/cryptocurrencies">
          <SecondSidebar isOpen={isOpen} toggle={toggle} />
          <SecondaryNavbar toggle={toggle} />
          <div className="dark">
            <Cryptocurrencies />
          </div>
        </Route>
        <Route exact path="/wallet">
          <SecondSidebar isOpen={isOpen} toggle={toggle} />
          <SecondaryNavbar toggle={toggle} />
          <SendSection />
          <Transactions />
        </Route>

        <Route exact path="/crypto/:coinId">
          <SecondSidebar isOpen={isOpen} toggle={toggle} />
          <SecondaryNavbar toggle={toggle} />
          <CryptoDetails />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
