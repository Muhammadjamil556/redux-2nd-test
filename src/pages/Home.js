import React from "react";
import { HomeCard } from "../components/artworkTimerGrid";
import { Cards } from "../components/cards";

const Home = () => {
  return (
    <div>
      <HomeCard />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
