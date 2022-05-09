import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import UserDetail from "./UserContent";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />

      <Routes>
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>

      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
