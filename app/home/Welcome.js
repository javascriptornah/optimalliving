import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Link from "next/link";

const Cont = styled.div``;

const Welcome = () => {
  return (
    <Cont colors={COLORS}>
      <div className="center-inline">
        <h1 className="mar-bottom-32">
          Welcome to the Optimal Living Community!
        </h1>
        <div className="grey-box padding-32 mar-bottom-32">
          <p className="large">
            To understand who we are and what we value, checkout the
            introduction below
          </p>
        </div>
        <Link href="/community">
          <div className="green-btn flex-inline ">
            <h4>Community Introduction</h4>
          </div>
        </Link>
      </div>
    </Cont>
  );
};

export default Welcome;
