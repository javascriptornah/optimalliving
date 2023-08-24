"use client";

import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Searchbar from "./components/Searchbar";
import countries from "../../data/countries";
import Results from "./components/Results";
import FoodSourcing from "./components/FoodSourcing";

const Cont = styled.div`
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
  }
  @media only screen and (max-width: 700px) {
    .content {
      padding: 8px;
    }
  }
  .content-flex {
    @media only screen and (max-width: 700px) {
      flex-direction: column;
      .search-holder {
        margin-right: 0px;
      }
    }
  }
`;

const Render = () => {
  const [country, setCountry] = useState("United States");
  const [states, setStates] = useState(countries["United States"].states);
  return (
    <Cont colors={COLORS} className="base-page">
      <div className="ssm-spacer-bot-res"></div>
      <div className="content">
        <h1 className="mar-bottom-8">Directory</h1>
        <div className="black-line mar-bottom-16"></div>
        <p className="mar-bottom-8">
          Select a region to find others interested in health near you.
        </p>
        <p className="mar-bottom-32">
          Connect with others and organize a meet up or share your favorite
          farms!
        </p>
        <div className="mar-bottom-16"></div>
        <div className="flex content-flex">
          <div className="search-holder mar-right-32">
            <Searchbar country={country} states={states} />
          </div>
          <div className="flex-one">
            <Results />
          </div>
        </div>
      </div>
      <FoodSourcing />
      <div className="sm-spacer-bot-res"></div>
    </Cont>
  );
};

export default Render;
