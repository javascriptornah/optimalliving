import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Line from "./Line";

const Cont = styled.div``;

const Results = () => {
  const [people, setPeople] = useState([
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
    {
      social: "https://www.instagram.com/scottprimal/",
      socialName: "scottprimal",
      name: "Scott",
      country: "United States",
      state: "Missouri",
    },
  ]);

  const lines = people.map((person) => {
    return (
      <Line
        social="instagram"
        name={person.name}
        link={person.social}
        country={person.country}
        state={person.state}
        socialName={person.socialName}
      />
    );
  });
  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Results</h2>
      <div className="black-line"></div>
      <div>{lines}</div>
    </Cont>
  );
};

export default Results;
