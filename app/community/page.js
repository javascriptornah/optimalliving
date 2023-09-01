"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  max-width: 1400px;
  padding: 32px;
  margin: 0 auto;
  .image-holder {
    position: relative;
    padding-left: 32px;
    width: 100%;
  }
  .text-content {
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
  }
  .content-holder {
    & > .flex {
      &:nth-of-type(2) {
        flex-direction: row-reverse;
        .text-content {
          padding: 32px 0 32px 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .text-content {
      padding: 32px 0 !important;
    }
    .flex {
      flex-direction: column !important;
    }
    .image-holder {
      flex-grow: 1;
      flex-shrink: 0;
      flex: auto;
      border-radius: 0;
      margin: 0;
      height: 600px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 16px;
    .image-holder {
      height: 400px;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 8px;

    .image-holder {
      height: 200px;
    }
  }

  @media only screen and (max-width: 250px) {
    padding: 8px;

    .image-holder {
      height: 140px;
    }
  }
`;

const Page = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <h1 className="mar-bottom-8">Community Page</h1>
      <div className="black-line-2 mar-bottom-32"></div>
      <div className="content-holder">
        {/** Flex line */}
        <div className="flex">
          {/** Text fields */}
          <div className="flex-one text-content">
            <h2 className="mar-bottom-4">Bringing People Together</h2>
            <div className="black-line mar-bottom-32"></div>
            <p className="large mar-bottom-16">
              {" "}
              The goal is to bring people together in real life and create
              off-grid, self-sustaining farms completely independent from modern
              society, where we can raise families for generations.{" "}
            </p>
            <p className="large mar-bottom-16">
              For those who want to live truly healthy lives and escape the
              degeneracy of modern society, this is a solution to live the life
              you really want to live, a natural life.
            </p>
            <p className="large mar-bottom-16"></p>
          </div>
          {/** End of text fields */}
          {/** Image holder */}
          <div className="flex-one image-holder">
            <Image src="/images/people.jpg" fill objectFit="cover" />
          </div>
          {/** End of image holder */}
        </div>
        {/** End of Flex line */}

        {/** Flex line */}
        <div className="flex">
          {/** Text fields */}
          <div className="flex-one text-content">
            <h2 className="mar-bottom-4">Raising Awareness</h2>
            <div className="black-line mar-bottom-32"></div>
            <p className="large mar-bottom-16">
              {" "}
              The first stage of this is raising awareness and developing
              culture.{" "}
            </p>
            <p className="large mar-bottom-16">
              We cannot have a community if there is nobody to join it, and the
              most important aspect of community is the culture.{" "}
            </p>
            <p className="large mar-bottom-16">
               If we want to escape degeneracy, it is important we have
              something healthy and fulfilling to replace it with and don't
              bring our old ways into this new way of life.
            </p>
          </div>
          {/** End of text fields */}
          {/** Image holder */}
          <div className="flex-one image-holder">
            <Image src="/images/farmer.jpg" fill objectFit="cover" />
          </div>
          {/** End of image holder */}
        </div>
        {/** End of Flex line */}

        {/** Flex line */}
        <div className="flex">
          {/** Text fields */}
          <div className="flex-one text-content">
            <h2 className="mar-bottom-4">Lifestyle</h2>
            <div className="black-line mar-bottom-32"></div>
            <p className="large mar-bottom-16">
              This new culture will involve spiritual practices such as
              meditation, grounding, and sungazing.
            </p>
            <p className="large mar-bottom-16">
              It will have hobbies like playing music and sports. We will have
              farm animals to take care of, children to raise.
            </p>
            <p className="large mar-bottom-16">
              The goal is to set up a new society with its own independent
              economy.
            </p>
            <p className="large mar-bottom-16">
              Essentially, everyone will be born into the ideal life, and there
              will be nothing to work for except to produce your food and grow
              as people.
            </p>
            <p className="large mar-bottom-16">
              There will be no bills. There will be no police. There will be no
              pollution.
            </p>
            <p className="large mar-bottom-16">
              We will be able to see the beautiful night sky.  At least to the
              best of our abilities. I don’t just want one community. I want
              there to be dozens.{" "}
            </p>
            <p className="large mar-bottom-16">
              Each community will differ from their culture and values, but this
              is so that we have backups, and also so that there is a place for
              everyone.
            </p>
          </div>
          {/** End of text fields */}
          {/** Image holder */}
          <div className="flex-one image-holder">
            <Image src="/images/sun.jpg" fill objectFit="cover" />
          </div>
          {/** End of image holder */}
        </div>
        {/** End of Flex line */}
      </div>
      <div className="sm-spacer-bot-res"></div>
    </Cont>
  );
};

export default Page;
