"use client";
import Contact from "./home/Contact";
import HereToHelp from "./home/HereToHelp";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="ssm-spacer-bot-res"></div>
      {/*  <Testimonials />
      <div className="ssm-spacer-bot-res"></div> */}
      <HereToHelp />
      <div className="ssm-spacer-bot-res"></div>

      <div className="grey-block"></div>
      <div className="ssm-spacer-bot-res"></div>
      <Contact />

      <div className="sm-spacer"></div>
    </main>
  );
}
