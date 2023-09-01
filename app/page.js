"use client";
import Contact from "./home/Contact";
import HereToHelp from "./home/HereToHelp";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials";
import Welcome from "./home/Welcome";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Home() {
  return (
    <main>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <Hero />
      </AnimationOnScroll>
      <div className="ssm-spacer-bot-res"></div>
      {/*  <Testimonials />
      <div className="ssm-spacer-bot-res"></div> */}
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <Welcome />
      </AnimationOnScroll>
      <div className="ssm-spacer-bot-res"></div>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <HereToHelp />
      </AnimationOnScroll>
      <div className="ssm-spacer-bot-res"></div>

      <div className="grey-block"></div>
      <div className="ssm-spacer-bot-res"></div>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
      >
        <Contact />
      </AnimationOnScroll>
      <div className="sm-spacer"></div>
    </main>
  );
}
