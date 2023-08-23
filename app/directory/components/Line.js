import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconDict } from "@/data/misc";

const Cont = styled.div`
  padding: 12px 12px 4px;
  border-bottom: 1px solid ${(props) => props.colors.lightishGrey};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.colors.lightGrey};
    p {
      color: ${(props) => props.colors.green};
    }
  }
`;

const Line = ({ social, name, country, state, link, socialName }) => {
  return (
    <Cont colors={COLORS} className="flex flex-wrap align-center">
      <FontAwesomeIcon
        icon={iconDict[social]}
        className="black icon-sm mar-right-8 mar-bottom-8"
      />
      <p className="large mar-right-8 mar-bottom-8">@{socialName}</p>
      <p className="large mar-right-16 mar-bottom-8">"{name}"</p>
      <p className="grey mar-bottom-8">
        {country}, {state}{" "}
      </p>
    </Cont>
  );
};

export default Line;
