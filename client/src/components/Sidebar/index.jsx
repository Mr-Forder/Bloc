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

const Sidebar = ({ isOpen, toggle }) => {
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
          <SidebarLink to="send" onClick={toggle}>
            Get Started
          </SidebarLink>
          <SidebarLink to="coins" onClick={toggle}>
            Coins
          </SidebarLink>
          <SidebarLink to="trans" onClick={toggle}>
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

export default Sidebar;
