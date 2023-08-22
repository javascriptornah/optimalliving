import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  .top-bar {
    padding: 16px 32px;
    position: relative;

    background-color: #fff;
  }
  .desktop-nav {
    z-index: 2;
  }

  .nav-dropdown {
    background-color: ${(props) => props.colors.lightishGrey};
    padding: 16px;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0px;
    z-index: -1;
    transition: transform 0.5s ease;
  }
`;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <Cont colors={COLORS}>
      <div className="top-bar">
        <div className="flex space-between align-center desktop-nav">
          {/** Logo text */}
          <div className="mar-right-32 mar-bottom-16">
            <h3>Optimal Living Community</h3>
          </div>

          {/** Desktop link elements */}
          <div className="flex flex-end flex-wrap align-center flex-one hide-mobile">
            <Link href="/" className="mar-right-32 base-link mar-bottom-16">
              <h5 className={pathname == "/" ? "link-underline" : ""}>Home</h5>
            </Link>
            <Link
              href="/directory"
              className="mar-right-32 base-link mar-bottom-16"
            >
              <h5 className={pathname == "/directory" ? "link-underline" : ""}>
                Directory
              </h5>
            </Link>
            <Link
              href="/consultations"
              className="mar-right-32 base-link mar-bottom-16"
            >
              <h5
                className={pathname == "/consultations" ? "link-underline" : ""}
              >
                Consultations
              </h5>
            </Link>
            <Link
              href="/contact"
              className="mar-right-32 base-link mar-bottom-16"
            >
              <h5 className={pathname == "/contact" ? "link-underline" : ""}>
                Contact
              </h5>
            </Link>
            <Link href="/signup" className="mar-bottom-16">
              <div className="black-btn">
                <h5>Sign up</h5>
              </div>
            </Link>
          </div>

          <div className="mobile-nav show-mobile" onClick={toggleDropdown}>
            <FontAwesomeIcon
              icon={faBars}
              className="black icon-sm cursor hover-green"
            />
          </div>
        </div>

        {/** Navbar dropdown */}
        <div
          className="nav-dropdown show-mobile"
          style={{
            transform: showDropdown ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <div className="flex flex-end flex-wrap align-start flex-one flex-column">
            <Link href="/" className=" base-link mar-bottom-16">
              <h5 className={pathname == "/" ? "link-underline" : ""}>Home</h5>
            </Link>
            <Link href="/directory" className=" base-link mar-bottom-16">
              <h5 className={pathname == "/directory" ? "link-underline" : ""}>
                Directory
              </h5>
            </Link>
            <Link href="/consultations" className=" base-link mar-bottom-16">
              <h5
                className={pathname == "/consultations" ? "link-underline" : ""}
              >
                Consultations
              </h5>
            </Link>
            <Link href="/contact" className=" base-link mar-bottom-16">
              <h5 className={pathname == "/contact" ? "link-underline" : ""}>
                Contact
              </h5>
            </Link>
            <Link href="/signup" className="mar-bottom-16">
              <div className="black-btn">
                <h5>Sign up</h5>
              </div>
            </Link>
          </div>
        </div>
        {/** End of navbar dropdown */}
      </div>
      <div className="black-line-2"></div>
    </Cont>
  );
};

export default Navbar;
