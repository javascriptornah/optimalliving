import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Testimonial from "./Testimonial";

const Cont = styled.div``;

const Testimonials = () => {
  return (
    <Cont colors={COLORS}>
      <div className="center-inline mar-bottom-32">
        <h2 className="">Testimonials</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </Cont>
  );
};

export default Testimonials;
