import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const SecondSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            About Bloc
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Get Started
          </SidebarLink>
          <SidebarLink to="/cryptocurrencies" onClick={toggle}>
            Coins
          </SidebarLink>
          <SidebarLink to="/wallet" onClick={toggle}>
            Transactions
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/wallet" onClick={toggle}>
            <strong> My Wallet</strong>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SecondSidebar;
