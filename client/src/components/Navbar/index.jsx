import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.svg";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ExtNavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  //Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="" />
            Bloc
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                About Bloc
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="send"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Get Started
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="coins"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Coins
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="trans"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Transactions
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="wallet">
              <strong>My Wallet</strong>
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
