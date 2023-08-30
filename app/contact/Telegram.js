import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Link from "next/link";

const Cont = styled.div`
  background-color: ${(props) => props.colors.lightGrey};
  border-radius: 32px;
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  margin-bottom: 32px;
  .circle {
    width: 122px;
    height: 122px;
    border-radius: 50%;
  }

  .btn {
    background-color: #2e87ca;
    padding: 8px 16px;
    border-radius: 32px;
    &:hover {
      background-color: #0088cc;
    }
  }
`;

const Telegram = ({ name, link, logo, color }) => {
  return (
    <Cont colors={COLORS}>
      <div
        className="circle mar-bottom-16 flex  justify-center  align-center"
        style={{ backgroundColor: color }}
      >
        <h2 className="white">{logo}</h2>
      </div>
      <h4 className="mar-bottom-8">{name}</h4>
      <p className="mar-bottom-16">Telegram</p>
      <Link href={link} target="_blank">
        <div className="btn box-shadow">
          <h5 className="white">Join Group</h5>
        </div>
      </Link>
    </Cont>
  );
};

export default Telegram;
