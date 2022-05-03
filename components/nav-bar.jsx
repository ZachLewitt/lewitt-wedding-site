import { useState } from "react";
import styled from "styled-components";
import { HamburgerButton } from "./hamburger-button";

export const NavBar = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Nav>
      <StyledHamburgerButton
        isEnabled={isEnabled}
        onClick={() => setIsEnabled(!isEnabled)}
      />
      <NavItem href="#home" isEnabled={isEnabled}>
        Home
      </NavItem>
      <NavItem href="#venue" isEnabled={isEnabled}>
        Venue
      </NavItem>
      <NavItem href="#accommodation" isEnabled={isEnabled}>
        Accommodation
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  margin: 0px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.menuForeground};
  margin: ${({ theme }) => theme.margin.medium};

  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    display: ${({ isEnabled }) => (isEnabled ? "block" : "none")};
  }
`;

const StyledHamburgerButton = styled(HamburgerButton)`
  display: none;
  margin: ${({ theme }) => `${theme.margin.small} ${theme.margin.medium}`};

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
