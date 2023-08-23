import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

  .label-one {
    margin-right: 16px;
  }
  .label-two {
    margin-left: 16px;
  }
  @media only screen and (max-width: 600px) {
    .label-one {
      margin-right: 0px;
      margin-bottom: 16px;
    }
    .label-two {
      margin-left: 0px;
    }
    .flex-holder {
      flex-direction: column;
    }
  }
`;

const Contact = () => {
  return (
    <Cont colors={COLORS} className="contact-form">
      <div className="center-inline mar-bottom-32">
        <h2 className="">Get in touch with me!</h2>
      </div>
      <div className="flex space-between mar-bottom-32 flex-holder">
        <label className="flex-one label-one">
          <h5 className="mar-bottom-8">Name</h5>
          <input placeholder="John doe" type="text" />
        </label>
        <label className="flex-one label-two">
          <h5 className="mar-bottom-8">Email</h5>
          <input placeholder="johndoe@gmail.com" type="text" />
        </label>
      </div>

      <label>
        <h5 className="mar-bottom-8">Message</h5>
        <textarea placeholder="Tell me about how your health is doing" />
      </label>
      <div className="mar-bottom-16"></div>
      <button className="black-btn flex-inline align-center">
        <h5 className="mar-right-8">Send</h5>
        <FontAwesomeIcon icon={faPaperPlane} className="white icon-ssm" />
      </button>
    </Cont>
  );
};

export default Contact;