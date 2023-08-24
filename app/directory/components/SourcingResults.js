import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { foodSourcesDict } from "@/data/misc";

const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.darkGrey};
  .results {
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 300px;
    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    background: rgb(217, 217, 217);
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(217, 217, 217, 1) 100%
    );
  }

  .topbar {
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
    border-bottom: 1px solid ${(props) => props.colors.darkGrey};
  }
  .state {
    border: 1px solid ${(props) => props.colors.black};
    border-radius: 32px;
    margin-right: 16px;
    padding: 8px 16px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    background-color: #fff;

    h4 {
      transition: color 0.25s ease;
    }
    &:hover {
      background-color: ${(props) => props.colors.green};
      h2,
      h3,
      h4,
      h5 {
        color: #fff;
      }
    }
  }
  .active-state {
    background-color: ${(props) => props.colors.green};
    h4 {
      color: #fff;
    }
  }

  .food-source {
    border: 1px solid ${(props) => props.colors.black};
    border-radius: 16px;
    padding: 16px 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    word-break: break-word;
    margin: 0 8px 16px;
    background-color: #fff;
  }

  @media only screen and (max-width: 900px) {
    .topbar,
    .results {
      padding: 16px;
    }
  }
`;

const SourcingResults = ({
  states,
  selectedState,
  selectState,
  foodSources,
}) => {
  const stateElems = states.map((state, index) => {
    return (
      <div
        key={index}
        onClick={() => selectState(state)}
        className={selectedState == state ? "state active-state" : "state"}
      >
        <h4>{state}</h4>
      </div>
    );
  });

  const foodSourceElems = foodSources.map((foodSource, index) => {
    return (
      <div className="food-source" key={index}>
        <h3 className="mar-bottom-16">{foodSource.title} </h3>
        <div className="flex justify-center mar-bottom-16">
          {foodSource.foodTypes.map((foodType, index) => {
            return (
              <FontAwesomeIcon
                key={index}
                icon={foodSourcesDict[foodType]}
                className="black icon-med mar-right-8 mar-left-8"
              />
            );
          })}
        </div>
        <div className="mar-bottom-16 link">
          <a href={foodSource.link}>
            <p className="green underline-hover">{foodSource.link}</p>
          </a>
        </div>
        <p>{foodSource.description}</p>
      </div>
    );
  });
  return (
    <Cont colors={COLORS}>
      <div className="topbar">{stateElems}</div>

      <div className="results">{foodSourceElems}</div>
    </Cont>
  );
};

export default SourcingResults;
