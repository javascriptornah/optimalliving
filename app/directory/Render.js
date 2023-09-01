"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Searchbar from "./components/Searchbar";
import countries from "../../data/countries";
import Results from "./components/Results";
import FoodSourcing from "./components/FoodSourcing";
import Signup from "./components/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cont = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
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
  .signup-holder {
    padding: 32px;
  }
  .image-holder {
    position: relative;

    flex: 1;
    border-radius: 0 32px 32px 0;

    overflow: hidden;

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      z-index: 1;
      background-color: #fff;
    }
    .text-box {
      background-color: rgba(0, 0, 0, 0.3);
      border: 3px solid ${(props) => props.colors.black};
      padding: 16px;
      position: absolute;
      top: 5%;
      left: 5%;
      z-index: 2;
      width: 90%;
      border-radius: 16px;
    }
  }
  @media only screen and (max-width: 800px) {
    .signup-holder {
      flex-direction: column-reverse;
      padding: 16px;
    }
    .image-holder {
      flex-grow: 1;
      flex-shrink: 0;
      flex: auto;
      border-radius: 0;
      margin: 0;
      height: 600px;
    }
  }
  @media only screen and (max-width: 400px) {
    .image-holder {
      height: 400px;
    }
    .signup-holder {
      padding: 0px;
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
      <div className="flex  signup-holder">
        <div className="flex-one">
          <Signup />
        </div>
        <div className="flex-one image-holder">
          <div className="overlay"></div>
          <div className="text-box center-inline">
            <h4 className="white mar-bottom-8">
              Connect with other like minded individuals
            </h4>
            <h4 className="white mar-bottom-32">
              Find a local friend to share farms and meet up!
            </h4>
            <h1 className="white center-inline">Join The Directory!</h1>
          </div>
          <div className="absolute"></div>
          <Image src="/images/connect.jpg" fill objectFit="cover" />
        </div>
      </div>
      <FoodSourcing />
      <div className="sm-spacer-bot-res"></div>
    </Cont>
  );
};

export default Render;
