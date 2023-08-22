import Image from "next/image";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.colors.lightGrey};
  padding: 16px 32px;
  margin-left: 8px;
  margin-right: 8px;
  text-align: center;
  max-width: 320px;
  margin-bottom: 16px;
`;
const Testimonial = () => {
  return (
    <Cont
      colors={COLORS}
      className="flex justify-center flex-column align-center"
    >
      <Image
        src={"/images/testimonial_face.jpg"}
        width={80}
        height={80}
        style={{
          objectFit: "contain",
          borderRadius: "50%",
          marginBottom: "16px",
        }}
      />

      <h4 className="mar-bottom-8">"I feel so happy"</h4>

      <p>
        My health has never been better and the pricing is great. All of these
        other health influences were charging me hundreds for a single
        consultation.
      </p>
    </Cont>
  );
};

export default Testimonial;
