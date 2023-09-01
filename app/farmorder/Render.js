"use client";

import Image from "next/image";
import COLORS from "@/data/colors";
import styled from "styled-components";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
const Cont = styled.div`
  .content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 32px;
  }
  .image-holder {
    position: relative;
  }
  .left-section {
    padding-right: 32px;
  }
  .content-holder {
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding: 16px;
    }
  }
  .grey-box {
    padding: 16px;
  }
`;
const Render = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <div className="content">
        {/** Header */}
        <h1 className="mar-bottom-8">Farm Sign Up Form</h1>
        <div className="black-line-2 "></div>
        <div className="ssm-spacer-bot-res"></div>
        {/** End of header */}

        {/** Farm order flex holder */}
        <div className="flex content-holder">
          <div className="flex-one left-section mar-bottom-32">
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              animateOnce={true}
            >
              {/** What is the farm order */}
              <h2 className="mar-bottom-4">What is the farm order?</h2>
              <div className="black-line mar-bottom-8"></div>
              <ul className="padding-left-16">
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
                  <p className="large">
                    Only <b>$25</b> one-time sign up fee
                  </p>
                </li>
              </ul>
              {/** End of What is the farm order */}
              <div className="ssm-spacer-bot-res"></div>
              {/** Pricing */}
              <div className="grey-box">
                <div className="mar-bottom-4 flex align-center">
                  <h2 className=" mar-right-16">Pricing</h2>
                  <Image src="/icons/price-tag.png" width={48} height={48} />
                </div>
                <div className="black-line mar-bottom-8"></div>

                <div className="padding-left-16">
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
                </div>
              </div>
              {/** End of Pricing */}
              <div className="ssm-spacer-bot-res"></div>

              {/** Shipping */}
              <div className="grey-box">
                <div className="mar-bottom-4 flex align-center">
                  <h2 className=" mar-right-16">Shipping</h2>
                  <Image src="/icons/shipping.png" width={48} height={48} />
                </div>
                <div className="black-line mar-bottom-16"></div>
                <ul className="padding-left-16">
                  <li>
                    <p className="large">
                      Average cost is <b>$50-120</b> depending how far you are
                      from Pennsylvania
                    </p>
                  </li>
                  <li>
                    <p className="large">
                      Ex. Costed <b>$150</b> shipping for <b>$450</b> of food to
                      St. Louis ($600 total)
                    </p>
                  </li>
                </ul>
                {/** End of shipping */}
              </div>
            </AnimationOnScroll>
          </div>

          {/** Image */}
          <div className="flex-one image-holder mar-bottom-32">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <Image
                src="/images/cow.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </AnimationOnScroll>
          </div>

          {/** End of Image */}
        </div>
        {/** End of Farm order flex holder */}
        <div className="ssm-spacer-bot-res"></div>

        {/** Sign Up */}
        <h1 className="mar-bottom-8">Sign Up below</h1>
        <div className="black-line-2"></div>
        {/** End of Sign Up */}
        <div className="sm-spacer-bot-res"></div>
      </div>
    </Cont>
  );
};

export default Render;
