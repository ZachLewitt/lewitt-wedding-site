import { useState } from "react";
import styled from "styled-components";
import { HamburgerButton } from "./hamburger-button";

export const NavBar = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Nav>
      <Bar>
        <HomeLink href="/home">Lewitt Wedding</HomeLink>
        <StyledHamburgerButton
          isEnabled={isEnabled}
          onClick={() => setIsEnabled(!isEnabled)}
        />
      </Bar>
      <NavMenu>
        <RsvpLink href="/rsvp" isEnabled={isEnabled}>
          RSVP
        </RsvpLink>
        <NavItem href="#venue" isEnabled={isEnabled}>
          Ceremony
        </NavItem>
        <NavItem href="#accommodation" isEnabled={isEnabled}>
          Places To Stay
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  margin: 0px;
  padding: ${({ theme }) => theme.margin.medium};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #CCC;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.medium};

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.menuForeground};

  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: bold;
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    display: ${({ isEnabled }) => (isEnabled ? "block" : "none")};
  }
`;

const HomeLink = styled.a`
  flex-grow: 1;

  color: ${({ theme }) => theme.colors.menuForeground};

  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: bold;
`;

const StyledHamburgerButton = styled(HamburgerButton)`
  display: none;
  margin: ${({ theme }) => `${theme.margin.small} ${theme.margin.medium}`};

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const RsvpLink = styled(NavItem)`
  @media only screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.primaryForeground};
    background: ${({ theme }) => theme.colors.primaryBackground};
    padding: ${({ theme }) => theme.margin.small};
    border-radius: 4px;
    min-width: 40px;
  }
`;
