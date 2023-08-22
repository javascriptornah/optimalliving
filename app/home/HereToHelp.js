import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarAlt,
  faCheck,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const HereToHelp = () => {
  return (
    <Cont colors={COLORS}>
      <div className="center-inline">
        <h2 className="mar-bottom-32">I'm here to help you</h2>
        <FontAwesomeIcon
          icon={faStar}
          className="icon-lg black mar-bottom-16"
        ></FontAwesomeIcon>
        <p className="large mar-bottom-32">
          I am very experienced with the primal diet by Aajonus Vonderplanitz
          and I want to help you achieve your goals and improve your health.
        </p>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="icon-lg black mar-bottom-16"
        ></FontAwesomeIcon>
        <p className="large mar-bottom-32">
          I can create a personal diet plan for you with my vast experience and
          answer any questions you may have.
        </p>
        <FontAwesomeIcon
          icon={faCheck}
          className="icon-lg black mar-bottom-16"
        ></FontAwesomeIcon>
        <p className="large mar-bottom-32">
          The primal diet takes a long time to master and many beginners make
          mistakes. Simple things are often overlooked, but through trial and
          error I have mastered the diet.
        </p>
        <FontAwesomeIcon
          icon={faClock}
          className="icon-lg black mar-bottom-16"
        ></FontAwesomeIcon>
        <p className="large mar-bottom-32">
          Instead of having to study nutrition for hundreds of hours with
          countless failures, why not let me help you? The savings are
          immeasurable.
        </p>
      </div>
    </Cont>
  );
};

export default HereToHelp;
