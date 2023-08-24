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
    padding: 4px;
    flex-shrink: 0;
    &:hover {
      border: 2px solid #fff;
    }
  }

  @media only screen and (max-width: 700px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
    }
    .email-link {
      margin-bottom: 32px;
    }
    .contact-info {
      padding: 16px;
    }
    .flex-icons {
      flex-direction: row !important;
    }
  }
  @media only screen and (max-width: 300px) {
    .contact-form,
    .contact-info {
      padding: 8px;
    }

    .padding-16 {
      padding: 8px;
    }
  }
`;

const Render = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <div className="ssm-spacer"></div>
      <div className="grid">
        <div>
          <div className="padding-16">
            <h1>Get in touch with me!</h1>
          </div>
          <Contact />
        </div>

        <div className="contact-info flex flex-column">
          <h3 className="white mar-bottom-32 ">Contact Information</h3>
          <div className="flex-column flex-one flex-wrap flex space-between ">
            <a
              href="mailto:Scottahalljr@gmail.com"
              className="flex-inline underline-hover hover-tan email-link"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="white icon-med mar-right-16"
              />
              <p className="large white">Scottahalljr@gmail.com</p>
            </a>
            <div className="flex space-around flex-icons">
              <div>
                <a href="https://t.me/optimal_living/" target="_blank">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://disboard.org/server/1013491663458541611"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://www.youtube.com/@scottprimal8970"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="icon-lg tan hover-tan cursor box-shadow-one border-32 icon"
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/scottprimal/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon-lg tan box-shadow-one hover-tan cursor border-32 icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default Render;
