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
import Telegram from "./Telegram";

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

  @media only screen and (max-width: 700px) {
    .flex-icons {
      flex-wrap: wrap;
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

        <div className="contact-info flex flex-column ">
          <h3 className="white mar-bottom-32 center-inline">
            Contact Information
          </h3>
          <div className="flex-column flex-one flex-wrap flex space-between  word-break">
            <a
              href="mailto:Scottahalljr@gmail.com"
              className="flex-inline underline-hover hover-tan email-link"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="white icon-med mar-right-16"
              />
              <p className="large white ">Scottahalljr@gmail.com</p>
            </a>
            <div className="flex flex-one space-around align-center flex-column flex-icons">
              <div className="flex flex-column align-center">
                <h5 className="white mar-bottom-4">Telegram</h5>
                <a href="https://t.me/optimal_living/" target="_blank">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="icon-lg tan hover-tan cursor   icon"
                  />
                </a>
              </div>

              <div className="flex flex-column align-center">
                <h5 className="white mar-bottom-4">Discord</h5>
                <a
                  href="https://disboard.org/server/1013491663458541611"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="icon-lg tan hover-tan cursor  icon"
                  />
                </a>
              </div>

              <div className="flex flex-column align-center">
                <h5 className="white mar-bottom-4">Youtube</h5>
                <a
                  href="https://www.youtube.com/@scottprimal8970"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="icon-lg tan hover-tan cursor  icon"
                  />
                </a>
              </div>

              <div className="flex flex-column align-center">
                <h5 className="white mar-bottom-4">Instagram</h5>
                <a
                  href="https://www.instagram.com/scottprimal/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon-lg tan  hover-tan cursor b icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ssm-spacer-bot-res"></div>
      <div className="flex flex-wrap space-around">
        <Telegram
          name="Canada Raw Milk"
          link="https://t.me/+rKAbKH5QRX04NmQx"
          logo="CM"
          color="#2e87ca"
        />
        <Telegram
          name="Aus Raw Milk"
          link="https://t.me/+3-cghUwo-s9hYzJh"
          logo="AM"
          color="#cc70e6"
        />
      </div>
    </Cont>
  );
};

export default Render;
