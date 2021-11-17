import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatSam,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatSam />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
