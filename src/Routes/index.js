import React from "react";

import Header from "../components/header";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Market from "../pages/Market";
import Blog from "../pages/Blog";
import { Artists } from "../pages/Artists";
import { AboutUs } from "../pages/AboutUs";
import { Labs } from "../pages/Labs";
import { FAQs } from "../pages/FAQs";
import { Homecard } from "../components/artworkTimerGrid";
import Home from "../pages/Home";
import { DetailsPage } from "../pages/DetailsPage";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />{" "}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Market" exact element={<Market />} />
          <Route path="/Artists" exact element={<Artists />} />
          <Route path="/AboutUs" exact element={<AboutUs />} />
          <Route path="/Labs" exact element={<Labs />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/FAQs" exact element={<FAQs />} />
          <Route path="/:CreatorsByName" exact element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
