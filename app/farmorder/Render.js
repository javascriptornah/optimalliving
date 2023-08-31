"use client";

import Image from "next/image";
import COLORS from "@/data/colors";
import styled from "styled-components";
import { useState } from "react";

const Cont = styled.div`
  .content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 32px;
  }
  .image-holder {
    position: relative;
    height: 600px;
    width: 100%;
  }
`;
const Render = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <div className="content">
        <h1 className="mar-bottom-8">Farm Sign Up Form</h1>
        <div className="black-line-2 mar-bottom-32"></div>
        <div className="flex">
          <div className="flex-one padding-16">
            <h2 className="mar-bottom-4">What is the farm order?</h2>
            <div className="black-line mar-bottom-8"></div>
            <ul>
              <li>
                <p className="large">
                  Sign up directly with a farmer in Pennsylvania
                </p>
              </li>
              <li>
                <p className="large">
                  Butter, cream and cheese shipped directly to your door
                </p>
              </li>
              <li>
                <p className="large">Only $25 one-time sign up fee</p>
              </li>
            </ul>
            <div className="mar-bottom-32"></div>

            <h2 className="mar-bottom-4">Pricing.</h2>
            <div className="black-line mar-bottom-8"></div>

            <div className="flex align-center space-between py-8">
              <div className="flex align-center">
                <h4 className="mar-right-16">Butter</h4>
                <Image src="/icons/butter.png" width={48} height={48} />
              </div>
              <h5 className="grey light">$8/pound</h5>
            </div>

            <div className="grey-line"></div>

            <div className="flex align-center space-between  py-8">
              <div className="flex align-center">
                <h4 className="mar-right-16">Cream</h4>
                <Image src="/icons/cream.png" width={48} height={48} />
              </div>
              <h5 className="grey light">$10/quart</h5>
            </div>
            <div className="grey-line"></div>

            <div className="flex align-center space-between  py-8">
              <div className="flex align-center">
                <h4 className="mar-right-16">Cheese</h4>
                <Image src="/icons/cheese.png" width={48} height={48} />
              </div>
              <h5 className="grey light">$10/pound</h5>
            </div>
            <div className="grey-line"></div>
            <div className="mar-bottom-32"></div>

            <h2 className="mar-bottom-4">Shipping</h2>
            <div className="black-line mar-bottom-16"></div>
            <ul>
              <li>
                <p className="large">
                  Average cost is $50-120 depending how far you are from
                  Pennsylvania
                </p>
              </li>
              <li>
                <p className="large">
                  Ex. Costed $150 shipping for $450 of food to St. Louis ($600
                  total)
                </p>
              </li>
            </ul>
          </div>
          {/** Image */}
          <div className="flex-one image-holder padding-16">
            <Image src="/images/cow.jpg" fill style={{ objectFit: "cover" }} />
          </div>
          {/** End of Image */}
        </div>
        <div className="ssm-spacer-bot-res"></div>

        {/** Sign Up */}
        <h1 className="mar-bottom-8">Sign Up below</h1>
        <div className="black-line-2"></div>
        {/** End of Sign Up */}
      </div>
    </Cont>
  );
};

export default Render;
