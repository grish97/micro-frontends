import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />

      <div className="content">
        <HomeContent />
      </div>

      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
