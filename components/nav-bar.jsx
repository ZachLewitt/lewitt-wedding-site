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
      isEnabled={isEnabled}
    >
      <Bar isEnabled={isEnabled}>
        <Link href="/" passHref>
          <HomeLink>Lewitt Wedding</HomeLink>
        </Link>
        <StyledHamburgerButton
          isEnabled={isEnabled}
          onClick={() => setIsEnabled(!isEnabled)}
        />
      </Bar>
      <NavMenu isEnabled={isEnabled}>
        <Link href="/rsvp" passHref>
          <NavItem>RSVP</NavItem>
        </Link>
        <Link href="/details" passHref>
          <NavItem>Details</NavItem>
        </Link>
        <Link href="/itinerary" passHref>
          <NavItem>Itinerary</NavItem>
        </Link>
        <Link href="/accommodation" passHref>
          <NavItem>Accommodation</NavItem>
        </Link>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    height: ${({ isEnabled }) => (isEnabled ? "100%" : "auto")};
  }
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;

  padding-inline: ${({ theme }) => theme.margin.large};

  @media only screen and (max-width: 600px) {
    border-block-end: ${({ isEnabled, theme }) =>
      isEnabled ? `1px solid ${theme.colors.lightBorder}` : "none"};
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: ${({ theme }) => theme.margin.large};
  margin-inline-end: ${({ theme }) => theme.margin.large};
  flex-grow: 1;

  @media only screen and (max-width: 600px) {
    display: ${({ isEnabled }) => (isEnabled ? "flex" : "none")};
    flex-direction: column;
    align-items: center;

    width: 100%;
    grid-gap: 0px;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.menuForeground};
  text-decoration: none;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.font.menu};
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: ${({ theme }) => theme.margin.extraLarge};
    text-align: center;
    border-block-end: 1px solid ${({ theme }) => theme.colors.lightBorder};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-style: italic;
  }
`;

const HomeLink = styled.a`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.menuForeground};
  text-decoration: none;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.font.menu};
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
`;

const StyledHamburgerButton = styled(HamburgerButton)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
