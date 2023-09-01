"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

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
  text-align: center;
`;

const Page = () => {
  return (
    <Cont colors={COLORS} className="base-page">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <Image
          src="/images/scott.jpg"
          width={200}
          height={200}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />

        <h1 className="mar-bottom-8">Scott Hall</h1>
        <div className="black-line-2 mar-bottom-32"></div>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          Our lives could be better than you can imagine, with a level of health
          that you don’t even know is possible. It is my mission to create
          off-grid, self-sustaining communities where we can live our lives
          doing what we love every day, away from the degeneracy of society,
          deep in nature, raising families for generations. We cannot have only
          one community, we must have many in order to survive.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          The first thing that you will probably consider is money. You need
          money in order to buy the land and finance all of this, but if you do
          not have the character, it will all fall apart. It is very important
          to prioritize personal development over materialistic pursuits. I live
          my life under the spiritual principle of the Law of Attraction. The
          key principle of this law is that like attracts like. All feeling is
          energy, and that energy attracts more of the same energy. If you spend
          your time pursuing money in a manner that you do not enjoy, you are
          not radiating a positive energy. This ties into an important rule I
          have. Do not expect to get something good out of something bad. You
          may logically think that you can do x, y, and z to make money, and
          then use it to do something good, and that might be the case, but I
          see that the best course of action would be to maximize the
          development of your passions, because that is what will produce the
          largest amount of positive energy, and therefore, the best
          manifestations. Remember, it has to be genuine, not pretend-happy.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          {" "}
          It is all about growing as a person and progressing through your life
          path, not pursuing materialistic gain or development in artificial
          systems. I am interested in increasing my capability of adding
          legitimate value to other people’s lives, and through that,
          manifesting the life I desire. I have faith that if I add legitimate
          value to people’s lives, I will receive value in return.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          Money is still an important part of the equation. It cannot be
          neglected, but the foundation of how you make that money I believe to
          be very important. Many people will be in circumstances where they
          have no choice but to make money in a way that is not ideal. Those
          that are stuck in those positions I believe should utilize all of
          their spare time to develop their passions, and when competent,
          monetize their skills, and start transitioning their income.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          Progress through life is not determined by how much money you have,
          but your character, skills, relationships, and the life you live. You
          could have nothing but do what you love every day and be much happier
          than a wealthy person with no passion or purpose. If you have money
          doing something you don’t care about and you lack healthy
          relationships and purpose, you will still not be happy. Being in that
          position is dangerous because you are likely to fall into the trap of
          chasing pleasures in an attempt to fill the void within yourself.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          There is a big difference between joy and pleasure. Joy is lasting.
          You can look back and still be happy about it. With pleasure, you will
          always want more. Pleasure can be problematic because of the fact of
          it being instant and never fulfilling. You could waste tremendous
          amounts of time chasing pleasure, and it can end up being
          self-sabotaging and even harmful to others.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          The urge to chase pleasure is a result of lack of fulfillment. I
          believe that if you are to be truly fulfilled, you must get into the
          position where you can live a life based on passion and use it to add
          value to other people’s lives everyday. Through that, you will develop
          truly healthy and authentic relationships. That is the beginning of
          community.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          {" "}
          I am here to help you discover your passion and come up with a plan to
          build a life around it. There are some key principles that I believe
          to be very important for everyone to follow.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          Essentially, everyone will be born into the ideal life, and there will
          be nothing to work for except to produce your food and grow as people.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          There will be no bills. There will be no police. There will be no
          pollution.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          We will be able to see the beautiful night sky.  At least to the best
          of our abilities. I don’t just want one community. I want there to be
          dozens.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <p className="large mar-bottom-16">
          {" "}
          Each community will differ from their culture and values, but this is
          so that we have backups, and also so that there is a place for
          everyone.
        </p>
      </AnimationOnScroll>

      {/* <div className="content-holder">
        
        <div className="flex">
         
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
          
          <div className="flex-one image-holder">
            <Image src="/images/people.jpg" fill objectFit="cover" />
          </div>
      
        </div>
        
        <div className="flex">
      
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
         
          <div className="flex-one image-holder">
            <Image src="/images/farmer.jpg" fill objectFit="cover" />
          </div>
     
        </div>
      

       
        <div className="flex">
        
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
  
          <div className="flex-one image-holder">
            <Image src="/images/sun.jpg" fill objectFit="cover" />
          </div>
      
        </div>
   
      </div> */}

      <div className="sm-spacer-bot-res"></div>
    </Cont>
  );
};

export default Page;
