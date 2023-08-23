"use client";

import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Contact from "../home/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Cont = styled.div`
  .contact-form {
    margin: 0;
    .center-inline {
      display: none;
    }
  }
  .contact-info {
    background-color: ${(props) => props.colors.grey};
    padding: 32px;
  }
  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    max-width: 1000px;
    margin: 0 auto;
  }
  .icon {
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #fff;
    }
  }
`;

const Render = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <div className="ssm-spacer"></div>
      <div className="grid">
        <div>
          <h1>Get in touch with me!</h1>
          <Contact />
        </div>

        <div className="contact-info flex flex-column">
          <h3 className="white mar-bottom-32 ">Contact Information</h3>
          <div className="flex-column flex-one flex space-between">
            <a href="mailto:" className="flex-inline underline-hover hover-tan">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="white icon-med mar-right-16"
              />
              <p className="large white">scotthall@gmail.com</p>
            </a>
            <div className="flex space-around">
              <a href="https://t.me/optimal_living/" target="_blank">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                />
              </a>
              <a
                href="https://disboard.org/server/1013491663458541611"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                />
              </a>

              <a
                href="https://www.youtube.com/@scottprimal8970"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                />
              </a>
              <a href="https://www.instagram.com/scottprimal/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-lg tan box-shadow-one hover-tan cursor border-32 icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default Render;
