import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import InfoSection from "../components/InfoSection";
import InfoSection2 from "../components/InfoSection2";
import SendSection from "../components/SendSection";
import CoinSection from "../components/CoinSection";
import TransactionIntro from "../components/TransactionIntro";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  aboutObjOne,
  aboutObjTwo,
  sendObj,
  coinObj,
  nanftObj,
} from "../components/InfoSection/Data";

import ServicesSection from "../components/ServicesSection";

import { SimpleCryptocurrencies, Transactions } from "../components";

const Home = () => {
  return (
    <>
      <HeroSection samePageLink={true} />

      <InfoSection {...aboutObjTwo} samePageLink={true} />
      <InfoSection2 {...aboutObjOne} samePageLink={true} />
      <SendSection />
      <Transactions />
      <CoinSection {...coinObj} />
      <div className="coin-wrap">
        <SimpleCryptocurrencies samePageLink={false} />
      </div>

      <TransactionIntro {...aboutObjOne} samePageLink={true} />
    </>
  );
};

export default Home;
