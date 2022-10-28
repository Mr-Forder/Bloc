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
} from "../Navbar/NavbarElements";
const SecondaryNavbar = ({ toggle }) => {
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
              <ExtNavLinks to="/">About Bloc</ExtNavLinks>
            </NavItem>

            <NavItem>
              <ExtNavLinks to="/">Get Started</ExtNavLinks>
            </NavItem>
            <NavItem>
              <ExtNavLinks to="/cryptocurrencies">Coins</ExtNavLinks>
            </NavItem>
            <NavItem>
              <ExtNavLinks
                to="wallet"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Transactions
              </ExtNavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="wallet">My Wallet</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default SecondaryNavbar;
