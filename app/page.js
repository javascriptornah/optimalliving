"use client";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="ssm-spacer-bot-res"></div>
      <Testimonials />
      <div className="sm-spacer"></div>
    </main>
  );
}
