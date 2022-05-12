import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { HamburgerButton } from "./hamburger-button";

export const NavBar = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Nav
      onClick={() => {
        if (isEnabled) setIsEnabled(false);
      }}
    >
      <Bar isEnabled={isEnabled}>
        <Link href="/home">
          <HomeLink>Lewitt Wedding</HomeLink>
        </Link>
        <StyledHamburgerButton
          isEnabled={isEnabled}
          onClick={() => setIsEnabled(!isEnabled)}
        />
      </Bar>
      <NavMenu isEnabled={isEnabled}>
        <Link href="/rsvp">
          <RsvpLink>RSVP</RsvpLink>
        </Link>
        <Link href="/home#ceremony">
          <NavItem>Ceremony</NavItem>
        </Link>
        <Link href="/home#accommodation">
          <NavItem>Accommodation</NavItem>
        </Link>
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
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-block-end: 1px solid ${({ theme }) => theme.colors.lightBorder};

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

  @media only screen and (max-width: 600px) {
    border-block-end: ${({ isEnabled, theme }) =>
      isEnabled ? `1px solid ${theme.colors.lightBorder}` : "none"};
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.medium};
  margin-inline-end: ${({ theme }) => theme.margin.medium};

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isEnabled }) => (isEnabled ? "flex" : "none")};
    margin: ${({ theme }) => theme.margin.medium};
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.menuForeground};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.sansSerif};
  white-space: nowrap;
  cursor: pointer;
`;

const HomeLink = styled.a`
  flex-grow: 1;
  margin-inline-start: ${({ theme }) => theme.margin.medium};
  color: ${({ theme }) => theme.colors.menuForeground};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-weight: bold;
  cursor: pointer;
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
    border: none;
    min-width: 40px;
  }
`;
