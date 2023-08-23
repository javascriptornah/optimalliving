import Image from "next/image";
import styled from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import COLORS from "@/data/colors";

const Cont = styled.div`
  .image-holder {
    height: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-image: url("/images/home_sunlight.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2.5%;
    @media only screen and (max-width: 1201px) {
      padding: 5%;
    }
    @media only screen and (max-width: 600px) {
      height: 600px;
    }
    @media only screen and (max-width: 300px) {
      padding: 0%;
    }
  }
  .white-bg-30 {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    opacity: 0.3;
    top: 0px;
    left: 0px;
  }
  .banner {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 16px 32px;
    border-radius: 32px;
    max-width: 400px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    @media only screen and (max-width: 300px) {
      padding: 8px 16px;
      border-radius: 0;
    }
  }
`;

const Hero = () => {
  return (
    <Cont colors={COLORS}>
      <div className="image-holder">
        <div className="banner">
          <h2>Improve your health and find your community</h2>
          <div className="buttons flex flex-column flex-one justify-center">
            <div className="black-btn mar-bottom-32">
              <h4>Book a consultation</h4>
            </div>
            <div className="white-btn">
              <h4>Directory</h4>
            </div>
          </div>
        </div>
        <div className="white-bg-30"></div>
        {/* <Image
          src={"/images/home_sunlight.jpg"}
          fill
          style={{ objectFit: "cover" }}
        /> */}
      </div>
    </Cont>
  );
};

export default Hero;
