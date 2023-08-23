import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  .green-btn {
    border-radius: 0px 4px 4px 0;
    height: 44px;
  }
  input {
    border-radius: 4px 0 0 4px;
    height: 44px;
    font-size: 16px;
    &:focus {
      border: 2px solid ${(props) => props.colors.green};
    }
  }
`;

const MailingList = () => {
  return (
    <Cont colors={COLORS} className="flex">
      <input type="text" placeholder="example@gmail.com" />
      <div className="green-btn">
        <h5>Join!</h5>
      </div>
    </Cont>
  );
};

export default MailingList;
