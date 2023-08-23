import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import MailingList from "./components/utility/MailingList";

const Cont = styled.div`
  background-color: ${(props) => props.colors.black};
  padding: 16px 32px 64px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "a b c";
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "b b"
      "a c";
    .grid-2 {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 550px) {
    padding: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "b"
      "a"
      "c";

    .grid-1,
    .grid-3 {
      align-items: flex-end;
      text-align: end;
      margin-bottom: 48px;
      .flex {
        justify-content: flex-end;
        .mar-right-32 {
          margin-left: 16px;
          margin-right: 16px;
        }
      }
    }
    .grid-2 {
      flex-direction: column;
      margin-bottom: 32px;
    }
  }

  .grid-1 {
    grid-area: a;
  }
  .grid-2 {
    grid-area: b;
  }
  .grid-3 {
    grid-area: c;
  }
`;

const Footer = () => {
  const pathname = usePathname();

  return (
    <Cont colors={COLORS}>
      <div className="grid-1">
        <h4 className="white mar-bottom-8">Email</h4>
        <a href="mailto:">
          <p className="white underline-hover">example@gmail.com</p>
        </a>
        <div className="mar-bottom-24"></div>
        <div className="flex">
          <a href="" className="mar-right-32">
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon-med white hover-green"
            />
          </a>
          <a href="" className="mar-right-32">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon-med white hover-green"
            />
          </a>
          <a href="" className="mar-right-32">
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon-med white hover-green"
            />
          </a>
        </div>
      </div>

      <div className="flex grid-2">
        <Link
          href="/"
          className={pathname == "/" ? "footer-link px-16 py-8" : "px-16 py-8"}
        >
          <h5 className="white">Home</h5>
        </Link>
        <Link
          href="/"
          className={
            pathname == "/directory" ? "footer-link px-16 py-8" : "px-16 py-8"
          }
        >
          <h5 className="white">Directory</h5>
        </Link>
        <Link
          href="/"
          className={
            pathname == "/consultations"
              ? "footer-link px-16 py-8"
              : "px-16 py-8"
          }
        >
          <h5 className="white">Consultations</h5>
        </Link>
        <Link
          href="/"
          className={
            pathname == "/contact" ? "footer-link px-16 py-8" : "px-16 py-8"
          }
        >
          <h5 className="white">Contact</h5>
        </Link>
      </div>

      <div className="flex  align-end flex-column grid-3">
        <h4 className="white ">Mailing List</h4>\
        <MailingList />
      </div>
    </Cont>
  );
};

export default Footer;
