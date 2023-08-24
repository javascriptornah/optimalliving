import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import countriesFetch from "@/data/countries";
import SourcingResults from "./SourcingResults";

const Cont = styled.div`
  max-width: 1200px;
  padding: 32px;
  margin: 0 auto;
  .selector-holder {
    border: 1px solid ${(props) => props.colors.darkGrey};
    display: inline-flex;
    flex-direction: column;
  }

  .selector {
    background-color: #fff;
    border-bottom: 1px solid ${(props) => props.colors.darkGrey};
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;
    h2,
    h3,
    h4,
    h5 {
      transition: color 0.25s ease;
    }
    &:hover {
      background-color: ${(props) => props.colors.green};

      h3,
      h4,
      h5 {
        color: #fff;
      }
    }
  }
  .selected {
    background-color: ${(props) => props.colors.green};
    cursor: default;
    h3,
    h4,
    h5 {
      color: #fff;
    }
  }
`;

const FoodSourcing = () => {
  // countries for selector
  const [countries, setCountries] = useState([
    { name: "United States", selected: true },
    { name: "Canada", selected: false },
  ]);
  const [states, setStates] = useState(countriesFetch["United States"].states);
  const [selectedState, setSelectedState] = useState("");

  // selector elements
  const selectors = countries.map((country, index) => {
    return (
      <div
        className={country.selected ? "selected selector" : "selector"}
        onClick={() => selectCountry(country.name)}
      >
        <h3>{country.name}</h3>
      </div>
    );
  });

  const selectState = (state) => {
    setSelectedState(state);
  };
  const selectCountry = (name) => {
    setCountries((prev) => {
      // map over each country element and if the name matches, then set it selected to true, else set it false
      return prev.map((country) => {
        if (name == country.name) {
          country.selected = true;
          // set states based on country name
          setStates(countriesFetch[country.name].states);
        } else {
          country.selected = false;
        }
        return country;
      });
    });
  };

  const foodSources = [
    {
      title: "Amos Miller Farm",
      foodTypes: ["eggs", "milk", "meat"],
      link: "https://amosmillerorganicfarm.com/",
      description:
        "This farm has high quality dairy, butter, soy free eggs and meat. ",
    },
    {
      title: "Amos Miller Farm",
      foodTypes: ["eggs", "milk", "meat"],
      link: "https://amosmillerorganicfarm.com/",
      description:
        "This farm has high quality dairy, butter, soy free eggs and meat. ",
    },
    {
      title: "Amos Miller Farm",
      foodTypes: ["eggs", "milk", "meat"],
      link: "https://amosmillerorganicfarm.com/",
      description:
        "This farm has high quality dairy, butter, soy free eggs and meat. ",
    },
    {
      title: "Amos Miller Farm",
      foodTypes: ["eggs", "milk", "meat"],
      link: "https://amosmillerorganicfarm.com/",
      description:
        "This farm has high quality dairy, butter, soy free eggs and meat. ",
    },
    {
      title: "Amos Miller Farm",
      foodTypes: ["eggs", "milk", "meat"],
      link: "https://amosmillerorganicfarm.com/",
      description:
        "This farm has high quality dairy, butter, soy free eggs and meat. ",
    },
  ];
  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Food Sourcing</h2>
      <div className="black-line mar-bottom-32"></div>
      <div className="selector-holder mar-bottom-32">{selectors}</div>

      <SourcingResults
        states={states}
        selectState={selectState}
        selectedState={selectedState}
        foodSources={foodSources}
      />
    </Cont>
  );
};

export default FoodSourcing;
